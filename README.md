# Mon Portfolio - Guide de Déploiement

Ce projet est un portfolio moderne construit avec Next.js, Tailwind CSS et Genkit. 

## ⚡ Option 1 : Vercel (Recommandé pour la gratuité totale)

Vercel est la plateforme la plus simple pour déployer Next.js sans avoir besoin d'activer une facturation ou de fournir une carte bancaire.

1.  **GitHub** : Créez un nouveau dépôt sur GitHub et poussez votre code :
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/VOTRE_NOM/VOTRE_REPO.git
    git push -u origin main
    ```
2.  **Déploiement** : Allez sur [Vercel.com](https://vercel.com/) et connectez-vous avec GitHub.
3.  **Import** : Cliquez sur **"Add New"** > **"Project"** et importez votre dépôt.
4.  **Variables d'environnement** : Dans la section **"Environment Variables"**, ajoutez ces clés (très important pour les emails et l'IA) :
    - `SMTP_USER` : `thierno.241991@gmail.com`
    - `SMTP_PASS` : `yrub vmwc rlup ntxe`
    - `GOOGLE_GENAI_API_KEY` : (Votre clé API Gemini obtenue sur Google AI Studio)
5.  **Terminé** : Cliquez sur **"Deploy"**. Votre site sera en ligne avec une URL en `.vercel.app`.

## 🚀 Option 2 : Firebase App Hosting

*Note : Firebase nécessite l'activation du plan "Blaze" (pay-as-you-go) pour utiliser App Hosting, ce qui demande une carte bancaire pour la vérification, même si l'usage reste gratuit en dessous des quotas.*

1.  **Console Firebase** : Allez sur la [Console Firebase](https://console.firebase.google.com/).
2.  **App Hosting** : Dans le menu de gauche, cliquez sur "App Hosting" puis suivez les étapes pour lier votre dépôt GitHub.
3.  **Variables d'environnement** : Ajoutez `SMTP_USER`, `SMTP_PASS` et `GOOGLE_GENAI_API_KEY` dans les paramètres secrets de l'application.

## 📁 Gestion du CV
Assurez-vous que votre fichier `CV__Thierno Abdourahmane_Diallo.pdf` est bien placé dans le dossier `public/` à la racine de votre projet pour qu'il soit téléchargeable.

## 📧 Rappel Sécurité
Le fichier `.env` est local. Ne le partagez jamais. Utilisez toujours les interfaces de Vercel ou Firebase pour configurer vos clés secrètes en ligne.
