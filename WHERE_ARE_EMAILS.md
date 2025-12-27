# 📍 Où Sont les Emails ?

## Localisation des Emails

Tous les emails des inscriptions sont sauvegardés dans un fichier CSV :

### Sur Docker (Recommandé)

```bash
# Les emails sont dans le volume Docker
./data/emails.csv
```

### Format du Fichier

```csv
email,timestamp
john@example.com,2025-12-27T10:30:00.000Z
jane@example.com,2025-12-27T11:45:00.000Z
```

Chaque ligne contient :
- **email** : L'adresse email du subscriber
- **timestamp** : Date et heure de l'inscription (ISO 8601)

## 📥 Récupérer les Emails

### Méthode 1 : Via l'API (Plus Simple)

```bash
# Télécharge directement le fichier CSV
curl http://YOUR_SERVER_IP:3001/emails -o emails.csv
```

Ou ouvrez dans votre navigateur :
```
http://YOUR_SERVER_IP:3001/emails
```

### Méthode 2 : Depuis le Serveur

```bash
# Si vous êtes sur le serveur
cat data/emails.csv

# Ou copiez-le en local
scp user@YOUR_SERVER_IP:/path/to/claimyourdeposit-landing/data/emails.csv ./
```

### Méthode 3 : Depuis Docker

```bash
# Copier depuis le conteneur
docker cp claimyourdeposit-backend:/app/data/emails.csv ./emails.csv

# Ou entrer dans le conteneur
docker exec -it claimyourdeposit-backend sh
cat /app/data/emails.csv
```

## 📊 Importer dans Excel/Google Sheets

1. Téléchargez `emails.csv`
2. Ouvrez avec Excel/Google Sheets
3. Les colonnes seront automatiquement détectées

## 🔄 Sauvegardes

Les emails sont persistants grâce au volume Docker :
```yaml
volumes:
  - ./data:/app/data
```

Même si vous redémarrez les conteneurs, les emails restent sauvegardés.

### Backup Manuel

```bash
# Créer une copie de sauvegarde
cp data/emails.csv data/emails_backup_$(date +%Y%m%d).csv

# Ou utilisez git
git add data/emails.csv
git commit -m "Backup emails $(date +%Y-%m-%d)"
```

## 🗑️ Réinitialiser la Liste

**⚠️ ATTENTION : Ceci supprime TOUS les emails**

```bash
# Supprimer le fichier
rm data/emails.csv

# Ou vider le fichier
echo "" > data/emails.csv

# Redémarrer le backend
docker-compose restart backend
```

## 📧 Statistiques Rapides

```bash
# Compter le nombre d'inscriptions (moins la ligne d'en-tête)
wc -l data/emails.csv

# Voir les 10 dernières inscriptions
tail -10 data/emails.csv

# Rechercher un email spécifique
grep "john@example.com" data/emails.csv
```

## 🔒 Sécurité

**Important** : 
- Le fichier `emails.csv` contient des données personnelles
- Ne le commitez pas dans un repo public
- Il est déjà dans `.gitignore`
- Utilisez HTTPS en production
- Limitez l'accès à l'endpoint `/emails`

## 💡 Intégrations Futures

Pour envoyer les emails vers :

**Mailchimp / ConvertKit / SendGrid** :
```javascript
// Dans server.js, ajoutez après la sauvegarde
await mailchimp.addSubscriber(email);
```

**Google Sheets** :
Utilisez l'API Google Sheets pour sync automatique.

**Base de Données** :
Remplacez le CSV par PostgreSQL/MySQL pour des volumes importants.

---

**Besoin d'aide ?** Vérifiez les logs : `docker-compose logs backend`

