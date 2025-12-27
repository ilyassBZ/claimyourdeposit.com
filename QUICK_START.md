# 🚀 Démarrage Rapide - ClaimYourDeposit

## Installation en 5 Minutes

### 1. Configuration Initiale

```bash
# Créer le fichier de configuration
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=8080
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF

# Remplacer YOUR_SERVER_IP par l'IP de votre serveur
# Exemple : VITE_API_URL=http://192.168.1.100:3001
nano .env
```

### 2. Lancer l'Application

```bash
# Construire et démarrer
docker-compose up -d --build

# Attendre ~2 minutes pour la construction
# Vérifier les logs
docker-compose logs -f
```

### 3. Accéder à l'Application

- **Site Web** : `http://YOUR_SERVER_IP:8080`
- **API Backend** : `http://YOUR_SERVER_IP:3001/health`
- **Télécharger les emails** : `http://YOUR_SERVER_IP:3001/emails`

## ✅ Vérification

```bash
# Vérifier que les conteneurs tournent
docker-compose ps

# Les deux doivent être "Up" et "healthy"
```

## 📊 Récupérer les Inscriptions

```bash
# Télécharger le fichier CSV
curl http://YOUR_SERVER_IP:3001/emails -o emails.csv

# Ou copier depuis le conteneur
docker cp claimyourdeposit-backend:/app/data/emails.csv ./emails.csv
```

## 🛠️ Commandes Utiles

```bash
# Redémarrer
docker-compose restart

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down

# Mettre à jour après modifications du code
docker-compose up -d --build
```

## 🆘 Problèmes Courants

### Port déjà utilisé ?
Modifiez `.env` :
```
FRONTEND_PORT=3000
BACKEND_PORT=5001
```

Puis relancez :
```bash
docker-compose down
docker-compose up -d --build
```

### Frontend ne se connecte pas ?
1. Vérifiez `VITE_API_URL` dans `.env`
2. Reconstruisez : `docker-compose up -d --build`

---

**C'est tout !** Votre landing page est prête à capturer les inscriptions. 🎉

