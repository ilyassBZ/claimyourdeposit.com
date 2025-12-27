# 🔧 Guide de Dépannage - ClaimYourDeposit

## Table des Matières
- [Problèmes de Connexion](#problèmes-de-connexion)
- [Erreurs Docker](#erreurs-docker)
- [Problèmes de Ports](#problèmes-de-ports)
- [Frontend ne Charge Pas](#frontend-ne-charge-pas)
- [Backend ne Répond Pas](#backend-ne-répond-pas)
- [Emails ne se Sauvegardent Pas](#emails-ne-se-sauvegardent-pas)

---

## Problèmes de Connexion

### ❌ "Cannot connect to API"

**Symptômes** : Le formulaire ne fonctionne pas, erreur dans la console

**Solutions** :

1. **Vérifiez que VITE_API_URL est correct**
```bash
cat .env
# VITE_API_URL doit pointer vers l'IP de votre serveur
```

2. **Reconstruisez le frontend**
```bash
docker-compose down
docker-compose up -d --build
```

3. **Testez le backend directement**
```bash
curl http://YOUR_SERVER_IP:3001/health
# Devrait retourner : {"status":"ok","timestamp":"..."}
```

### ❌ "CORS Error"

**Symptômes** : Erreur CORS dans la console du navigateur

**Solution** : Le backend utilise déjà CORS. Vérifiez que :
```bash
# Frontend et backend sont sur le même réseau Docker
docker-compose ps
```

---

## Erreurs Docker

### ❌ "Port is already allocated"

**Symptômes** :
```
ERROR: for frontend  Cannot start service frontend: 
driver failed programming external connectivity on endpoint: 
Bind for 0.0.0.0:8080 failed: port is already allocated
```

**Solution** :

```bash
# Option 1 : Changer les ports dans .env
nano .env
# Changez FRONTEND_PORT=8080 vers FRONTEND_PORT=3000

# Option 2 : Trouver et arrêter le processus qui utilise le port
sudo lsof -i :8080
sudo kill -9 <PID>

# Redémarrez
docker-compose down
docker-compose up -d --build
```

### ❌ "No space left on device"

**Symptômes** : Erreur lors de la construction des images

**Solution** :
```bash
# Nettoyer les images Docker inutilisées
docker system prune -a

# Vérifier l'espace disque
df -h

# Supprimer les volumes inutilisés
docker volume prune
```

### ❌ "Cannot connect to Docker daemon"

**Symptômes** : Docker commandes ne fonctionnent pas

**Solution** :
```bash
# Démarrer le service Docker
sudo systemctl start docker

# Vérifier le statut
sudo systemctl status docker

# Ajouter votre user au groupe docker
sudo usermod -aG docker $USER
# Puis déconnectez-vous et reconnectez-vous
```

---

## Problèmes de Ports

### Vérifier les Ports Utilisés

```bash
# Voir tous les ports en écoute
sudo netstat -tulpn | grep LISTEN

# Vérifier un port spécifique
sudo lsof -i :8080
sudo lsof -i :3001
```

### Changer les Ports

Éditez `.env` :
```bash
nano .env
```

Modifiez :
```env
BACKEND_PORT=5001
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_SERVER_IP:5001
```

Reconstruisez :
```bash
docker-compose down
docker-compose up -d --build
```

---

## Frontend ne Charge Pas

### ❌ Page blanche ou "Cannot GET /"

**Diagnostic** :
```bash
# Vérifier les logs du frontend
docker-compose logs frontend

# Vérifier que le conteneur tourne
docker-compose ps
```

**Solutions** :

1. **Reconstruire le frontend**
```bash
docker-compose up -d --build frontend
```

2. **Vérifier nginx**
```bash
docker exec claimyourdeposit-frontend cat /etc/nginx/conf.d/default.conf
```

3. **Accéder au conteneur**
```bash
docker exec -it claimyourdeposit-frontend sh
ls /usr/share/nginx/html
# Devrait montrer index.html, assets/, etc.
```

### ❌ "Vite build failed"

**Symptômes** : Erreur lors de la construction

**Solution** :
```bash
# Construire localement pour voir l'erreur
cd client
npm install
npm run build

# Corriger les erreurs, puis reconstruire Docker
cd ..
docker-compose up -d --build
```

---

## Backend ne Répond Pas

### ❌ Health check échoue

**Diagnostic** :
```bash
# Tester le health check
curl http://localhost:3001/health

# Voir les logs
docker-compose logs backend
```

**Solutions** :

1. **Redémarrer le backend**
```bash
docker-compose restart backend
```

2. **Vérifier les variables d'environnement**
```bash
docker exec claimyourdeposit-backend env
# PORT devrait être 3001
# EMAIL_FILE devrait être /app/data/emails.csv
```

3. **Reconstruire depuis zéro**
```bash
docker-compose down
docker-compose up -d --build backend
```

### ❌ "Cannot find module 'express'"

**Symptômes** : Erreur dans les logs backend

**Solution** :
```bash
# Reconstruire en forçant l'installation des dépendances
docker-compose build --no-cache backend
docker-compose up -d backend
```

---

## Emails ne se Sauvegardent Pas

### ❌ Les emails n'apparaissent pas dans emails.csv

**Diagnostic** :
```bash
# Vérifier le fichier
cat data/emails.csv

# Vérifier les permissions
ls -la data/

# Voir les logs backend pour les erreurs
docker-compose logs backend | grep -i error
```

**Solutions** :

1. **Créer le dossier data**
```bash
mkdir -p data
chmod 777 data
```

2. **Vérifier le volume Docker**
```bash
# Doit montrer : ./data:/app/data
docker inspect claimyourdeposit-backend | grep -A 5 Mounts
```

3. **Tester l'inscription manuellement**
```bash
curl -X POST http://YOUR_SERVER_IP:3001/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Vérifier la réponse
# Devrait retourner : {"message":"Saved successfully","referralCode":"..."}
```

4. **Vérifier depuis le conteneur**
```bash
docker exec claimyourdeposit-backend cat /app/data/emails.csv
```

---

## Commandes de Diagnostic

### Vérification Complète

```bash
# 1. Status des conteneurs
docker-compose ps

# 2. Logs combinés
docker-compose logs --tail=50

# 3. Tester le backend
curl http://YOUR_SERVER_IP:3001/health

# 4. Tester le frontend
curl -I http://YOUR_SERVER_IP:8080

# 5. Vérifier les volumes
docker volume ls

# 6. Inspecter le réseau
docker network inspect claimyourdeposit_claimyourdeposit-network
```

### Logs en Temps Réel

```bash
# Tous les services
docker-compose logs -f

# Seulement le backend
docker-compose logs -f backend

# Seulement le frontend
docker-compose logs -f frontend
```

### Redémarrage Complet

```bash
# Arrêter tout
docker-compose down

# Supprimer les volumes (⚠️ supprime les emails)
docker-compose down -v

# Nettoyer Docker
docker system prune

# Reconstruire tout
docker-compose up -d --build

# Vérifier
docker-compose ps
docker-compose logs -f
```

---

## Problèmes de Performance

### ❌ Le site est lent

1. **Vérifier les ressources**
```bash
docker stats

# Voir CPU/RAM utilisés par chaque conteneur
```

2. **Optimiser les images**
```bash
# Les images sont déjà optimisées avec nginx
# Pour améliorer, activez HTTP/2 et gzip
```

3. **Vérifier la bande passante**
```bash
# Tester depuis le serveur
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:8080
```

---

## Besoin d'Aide Supplémentaire ?

1. **Vérifiez les logs** : `docker-compose logs -f`
2. **Testez les endpoints** : `/health`
3. **Relisez README.md** pour la configuration
4. **Reconstruisez tout** : `docker-compose down && docker-compose up -d --build`

---

**💡 Astuce** : La plupart des problèmes sont résolus en reconstruisant :
```bash
docker-compose down
docker-compose up -d --build
```

