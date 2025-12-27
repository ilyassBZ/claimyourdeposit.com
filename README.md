# 🚀 ClaimYourDeposit - Landing Page

> **Get Your Security Deposit Back. Every. Single. Cent.**

Une plateforme alimentée par l'IA qui aide les locataires à récupérer leurs dépôts de garantie en auditant les photos, en citant les lois locales et en générant des lettres de mise en demeure juridiques.

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation Rapide](#installation-rapide)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Structure du Projet](#structure-du-projet)

## 🎯 Aperçu

ClaimYourDeposit est une landing page de liste d'attente conçue pour :

- **Capturer les inscriptions anticipées** avec un formulaire de newsletter
- **Générer des codes de parrainage** pour chaque inscription
- **Afficher une proposition de valeur claire** avec des sections axées sur la conversion
- **Design mobile-first** optimisé pour les locataires en déplacement

### Sections de la Landing Page

1. **Hero Section** - Titre accrocheur avec formulaire d'inscription
2. **Section Douleur** - Points de friction que les locataires ressentent
3. **Section Logique IA** - Visualisation du processus IA
4. **Comment ça Marche** - Processus en 3 étapes
5. **Offre Liste d'Attente** - Tarification membres fondateurs ($9 vs $29)
6. **Signaux de Confiance** - Couverture 50 états, lois 2025
7. **FAQ** - Questions fréquentes
8. **CTA Final** - Appel à l'action avec avantages

## 🚀 Installation Rapide

### Prérequis

- Docker & Docker Compose
- Node.js 18+ (pour développement local)

### Option 1 : Docker (Recommandé)

```bash
# 1. Cloner et naviguer
cd claimyourdeposit-landing

# 2. Créer le fichier .env
cat > .env << 'EOF'
BACKEND_PORT=3001
FRONTEND_PORT=8080
VITE_API_URL=http://YOUR_SERVER_IP:3001
EOF

# 3. Mettre à jour l'IP du serveur
nano .env  # Remplacez YOUR_SERVER_IP

# 4. Construire et démarrer
docker-compose up -d --build

# 5. Vérifier les logs
docker-compose logs -f
```

Accédez à :
- **Frontend** : `http://YOUR_SERVER_IP:8080`
- **Backend** : `http://YOUR_SERVER_IP:3001`
- **Emails** : `http://YOUR_SERVER_IP:3001/emails`

### Option 2 : Développement Local

```bash
# Backend
cd server
npm install
npm start

# Frontend (nouveau terminal)
cd client
npm install
npm run dev
```

## ⚙️ Configuration

### Variables d'Environnement

**Fichier racine `.env`** (non inclus dans git) :
```env
BACKEND_PORT=3001
FRONTEND_PORT=8080
VITE_API_URL=http://YOUR_SERVER_IP:3001
```

**Client `.env.production`** :
```env
VITE_API_URL=http://YOUR_SERVER_IP:3001
```

### Changer les Ports

Si les ports par défaut sont occupés :

```bash
# Utiliser les ports 3000 (frontend) et 5001 (backend)
cat > .env << 'EOF'
BACKEND_PORT=5001
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_SERVER_IP:5001
EOF

# Reconstruire
docker-compose down
docker-compose up -d --build
```

## 🌐 Déploiement

### Déploiement sur VPS

1. **Connectez-vous à votre serveur**
```bash
ssh user@your-server-ip
```

2. **Installez Docker & Docker Compose**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl start docker
sudo systemctl enable docker
```

3. **Clonez et configurez**
```bash
git clone <votre-repo> claimyourdeposit-landing
cd claimyourdeposit-landing

# Configurez .env avec l'IP de votre serveur
nano .env
```

4. **Lancez l'application**
```bash
docker-compose up -d --build
```

5. **Vérifiez le statut**
```bash
docker-compose ps
docker-compose logs -f
```

### Configuration DNS

Pour utiliser `claimyourdeposit.com` :

1. **Créez des enregistrements A** dans votre registrar DNS :
   - `claimyourdeposit.com` → `YOUR_SERVER_IP`
   - `www.claimyourdeposit.com` → `YOUR_SERVER_IP`

2. **Configurez HTTPS** (recommandé avec Caddy ou Nginx Proxy Manager)

## 📁 Structure du Projet

```
claimyourdeposit-landing/
├── client/                    # Frontend React
│   ├── public/
│   │   └── favicon.svg       # Logo ClaimYourDeposit
│   ├── src/
│   │   ├── components/
│   │   │   ├── FAQ.jsx       # Section FAQ
│   │   │   ├── NewsletterForm.jsx
│   │   │   └── NewsletterForm.css
│   │   ├── App.jsx           # Composant principal
│   │   ├── index.css         # Styles globaux (thème rouge)
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── vite.config.js
├── server/                    # Backend Express
│   ├── server.js             # API + codes parrainage
│   ├── package.json
│   └── Dockerfile
├── data/                      # Volume Docker
│   └── emails.csv            # Inscriptions exportées
├── docker-compose.yml
├── ENV_TEMPLATE.txt
└── README.md
```

## 📊 Récupérer les Emails

### Via l'API
```bash
curl http://YOUR_SERVER_IP:3001/emails -o emails.csv
```

### Via le conteneur Docker
```bash
docker cp claimyourdeposit-backend:/app/data/emails.csv ./emails.csv
```

### Format CSV
```csv
email,timestamp
user@example.com,2025-12-27T10:30:00.000Z
```

## 🎨 Personnalisation

### Changer les Couleurs

Modifiez `client/src/index.css` :
```css
:root {
  --red-900: #7f1d1d;  /* Couleur principale foncée */
  --red-700: #b91c1c;  /* Dégradé */
  --red-600: #dc2626;  /* Accents */
  --accent: #f59e0b;   /* Orange vif */
}
```

### Modifier les Sections

Tous les contenus se trouvent dans `client/src/App.jsx` :
- Titres et sous-titres
- Statistiques ($4.2B gardés par les propriétaires)
- Tarification ($9 vs $29)
- FAQ

## 🔧 Commandes Utiles

```bash
# Voir les logs en temps réel
docker-compose logs -f

# Redémarrer les services
docker-compose restart

# Reconstruire après modifications
docker-compose up -d --build

# Arrêter tout
docker-compose down

# Supprimer volumes et tout reconstruire
docker-compose down -v
docker-compose up -d --build
```

## 🐛 Dépannage

### Le frontend ne se connecte pas au backend

1. Vérifiez que `VITE_API_URL` dans `.env` utilise l'IP correcte
2. Reconstruisez : `docker-compose up -d --build`

### Les ports sont déjà utilisés

```bash
# Vérifier quels ports sont occupés
sudo netstat -tulpn | grep LISTEN

# Modifier les ports dans .env et reconstruire
```

### Les emails ne sont pas sauvegardés

```bash
# Vérifier les permissions du dossier data
ls -la data/

# Vérifier les logs du backend
docker-compose logs backend
```

## 📄 Licence

MIT - Libre d'utilisation et de modification.

## 🤝 Support

Pour toute question :
- Vérifiez les logs : `docker-compose logs`
- Testez les endpoints de santé : `/health`
- Consultez la documentation Docker

---

**Construit avec ❤️ pour aider les locataires à récupérer ce qui leur appartient.**

