# Mon Portfolio - Guide de Déploiement

Ce projet est un portfolio moderne construit avec Next.js, Tailwind CSS et Genkit. Voici comment le publier gratuitement.

## 🚀 Option 1 : Firebase App Hosting (Recommandé)

Comme votre projet est déjà configuré pour Firebase, c'est l'option la plus naturelle.

1.  **GitHub** : Créez un nouveau dépôt sur GitHub et poussez votre code :
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/VOTRE_NOM/VOTRE_REPO.git
    git push -u origin main
    ```
2.  **Console Firebase** : Allez sur la [Console Firebase](https://console.firebase.google.com/).
3.  **App Hosting** : Dans le menu de gauche, cliquez sur "App Hosting" puis sur "Get Started".
4.  **Connectez GitHub** : Suivez les étapes pour lier votre dépôt GitHub.
5.  **Variables d'environnement** : C'est l'étape **cruciale**. Dans les paramètres de votre application sur Firebase :
    - Ajoutez `SMTP_USER` : `thierno.241991@gmail.com`
    - Ajoutez `SMTP_PASS` : `yrub vmwc rlup ntxe`
    - Ajoutez `GOOGLE_GENAI_API_KEY` : (Votre clé API Gemini pour l'IA)

## ⚡ Option 2 : Vercel (Très Rapide)

Vercel est le créateur de Next.js et offre un déploiement gratuit extrêmement simple.

1.  Poussez votre code sur GitHub (comme expliqué ci-dessus).
2.  Allez sur [Vercel.com](https://vercel.com/) et connectez-vous avec GitHub.
3.  Cliquez sur **"Add New"** > **"Project"** et importez votre dépôt.
4.  Dans la section **"Environment Variables"**, ajoutez :
    - `SMTP_USER`
    - `SMTP_PASS`
    - `GOOGLE_GENAI_API_KEY`
5.  Cliquez sur **"Deploy"**.

## 📧 Rappel Sécurité
Le fichier `.env` est local et ne doit jamais être partagé publiquement. Assurez-vous que vos clés sont bien saisies dans l'interface de l'hébergeur choisi (Firebase ou Vercel) pour que le formulaire de contact fonctionne en ligne.

## 📁 Gestion du CV
N'oubliez pas que votre fichier `CV__Thierno Abdourahmane_Diallo.pdf` doit être placé dans le dossier `public/` à la racine pour être téléchargeable.
