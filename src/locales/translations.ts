export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      contactBtn: 'Me contacter',
    },
    hero: {
      hi: 'Salut! 😉',
      im: 'Je suis',
      title1: 'Développeur Full Stack',
      title2: '& Mobile',
      desc1: "Bienvenue sur mon portfolio ! Ingénieur logiciel passionné par l'innovation, je conçois des solutions robustes et évolutives en utilisant les stacks les plus modernes du marché.",
      desc2: "Spécialisé dans les architectures complexes, je transforme vos idées en applications performantes.",
      bonCode: 'Bon code !',
      cvBtn: 'Mon CV',
      contactBtn: 'Contactez-moi',
      skillsCenter: 'FullStack',
    },
    about: {
      badge: 'À propos de moi',
      title: 'Développeur Passionné dédié à la',
      quality: 'Qualité',
      desc1: 'Je suis Thierno Abdourahmane Diallo, ingénieur logiciel orienté vers l\'innovation digitale. Mon parcours a commencé par une curiosité sur le fonctionnement du Web, qui est devenue une passion pour la création d\'applications robustes.',
      desc2: 'Spécialisé en .NET Core, React, et Node.js, je me concentre sur la création d\'architectures évolutives et d\'expériences utilisateur fluides.',
      desc3: 'Je suis constamment à la recherche de nouveaux défis et j\'aime explorer les dernières tendances technologiques pour proposer des solutions toujours plus performantes.',
      expYears: 'Années d\'expérience',
      loc: 'Localisation',
      email: 'Email',
      specialty: 'Spécialité',
      interests: 'Intérêts',
      interestsList: 'SaaS, Apps Mobiles, API',
    },
    codeShowcase: {
      subtitle: 'Développeur Full Stack',
    },
    services: {
      title: 'Services et Expertise',
      subtitle: 'Des Solutions Complètes pour les Entreprises Modernes',
      desc: 'De la conception au déploiement, je propose des services de développement complets alliant excellence technique et valeur ajoutée pour votre entreprise.',
      s1: { title: 'Conseil Technique et Stratégie', desc: "Conseil technologique stratégique pour startups et entreprises. Accompagnement expert sur le choix de stack technique, la conception d'architecture et les solutions évolutives." },
      s2: { title: 'Développement Web Full-Stack', desc: "Conception d'applications web modernes et performantes utilisant Next.js, React et Node.js. Maîtrise des architectures micro-services et des APIs REST/GraphQL sécurisées." },
      s3: { title: "Développement d'Apps Mobiles", desc: "Création d'expériences mobiles natives et hybrides fluides avec React Native et Flutter. Focus sur la performance, le design UX/UI et les fonctionnalités temps réel." },
      s4: { title: 'Architecture Cloud et DevOps', desc: "Infrastructure cloud évolutive sur AWS, Azure ou GCP. Conteneurisation avec Docker/Kubernetes, déploiements automatisés et surveillance." },
      s5: { title: 'Optimisation Performance et SEO', desc: "Audits de performance web, optimisation des Core Web Vitals et SEO technique. Amélioration de la vitesse de page et de l'accessibilité." },
      s6: { title: 'Revue de Code et Leadership', desc: "Leadership technique, revues de qualité de code, audits de sécurité et mentorat. Refactorisation de systèmes existants." },
    },
    skills: {
      title: 'Compétences et Expertise',
      desc: "Un arsenal technologique complet pour répondre à tous vos besoins numériques.",
      frontend: "Front-End & Mobile",
      backend: "Back-End",
      cloud: "Data & Cloud",
      devops: "BDD & DevOps",
      certsTitle: "Certifications",
      s_react: "React.js, Next.js, Angular, Flutter, React Native, TypeScript, Tailwind CSS.",
      s_node: "ASP.NET Core (C#), Node.js, Express, Python, Java Spring Boot, Entity Framework.",
      s_cloud: "AWS, Azure, Spark, Scala, Elasticsearch, Kibana, Databricks.",
      s_devops: "PostgreSQL, MySQL, MongoDB, Redis, Docker, Kubernetes, CI/CD, Git.",
    },
    projects: {
      categories: { all: 'Tous les projets', web: 'Web', mobile: 'Mobile' },
      loadMore: 'Charger plus de projets',
      details: 'Détails du projet',
      realizations: 'Réalisations clés',
      tech: 'Technologies',
      items: {
        okooltrip: {
          title: 'OkoolTrip',
          date: 'Décembre 2023 - Présent',
          desc: 'Plateforme complète de billetterie et de gestion de voyages.',
          tasks: [
            "Conception de l'architecture Full-Stack avec Next.js et Node.js",
            "Mise en place d'un système de réservation en temps réel",
            "Intégration de passerelles de paiement sécurisées",
            "Développement d'un tableau de bord administrateur pour la gestion des flux"
          ]
        },
        atos: {
          title: 'Atos (Projet Mobile)',
          date: 'Juin 2023 - Novembre 2023',
          desc: "Application mobile hybride développée pour la transformation numérique d'un client grand compte.",
          tasks: [
            "Développement de l'interface utilisateur mobile avec React Native",
            "Consommation d'APIs complexes pour le reporting en temps réel",
            "Mise en place de capacités hors-ligne avec synchronisation",
            "Optimisation des performances de rendu mobile"
          ]
        },
        fegnseo: {
          title: 'FegnSEO',
          date: 'Janvier 2024 - Avril 2024',
          desc: "SaaS d'audit et de suivi SEO automatisé pour les sites web.",
          tasks: [
            "Développement d'algorithmes d'analyse de performance SEO",
            "Automatisation du crawling de pages web",
            "Génération automatique de rapports PDF détaillés",
            "Intégration de graphiques de données interactifs avec Recharts"
          ]
        },
        assuraf: {
          title: 'Assuraf',
          date: 'Septembre 2023 - Janvier 2024',
          desc: 'Solution digitale de souscription d\'assurance en ligne simplifiée.',
          tasks: [
            "Développement de formulaires de souscription dynamiques complexes",
            "Gestion des documents justificatifs via stockage Cloud",
            "Mise en place d'un moteur de calcul de devis instantané",
            "Architecture API RESTful avec Express.js"
          ]
        },
        cuberfit: {
          title: 'Cuberfit',
          date: 'Mars 2024 - Présent',
          desc: 'Application mobile de coaching et suivi fitness personnalisé.',
          tasks: [
            "Développement de l'application mobile sous React Native / Expo",
            "Système de suivi d'exercices avec historisation des données",
            "Intégration de notifications push pour l'engagement utilisateur",
            "Architecture Backend temps réel avec Socket.io"
          ]
        }
      }
    },
    contact: {
      title: 'Collaborons Ensemble',
      desc: 'Vous avez un projet ? Je suis prêt à vous aider à le réaliser. Utilisez le formulaire ci-dessous ou choisissez une suggestion de l\'IA pour commencer.',
      aiTitle: 'Assistant de demande IA',
      aiDesc: "Besoin d'aide pour commencer ? Cliquez sur une suggestion basée sur mon profil :",
      aiGenerating: 'Génération des idées...',
      aiRegenerate: 'Régénérer les suggestions',
      labels: { name: 'Votre Nom', email: 'Votre Email', subject: 'Sujet', message: 'Votre Message' },
      placeholders: { name: 'Jean Dupont', email: 'jean@example.com', subject: 'Demande de projet', message: 'Parlez-moi de votre projet...' },
      submitBtn: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé !',
      successDesc: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      info: { email: 'Email Direct', phone: 'Téléphone', loc: 'Localisation' },
    },
    footer: {
      about: 'À propos',
      aboutDesc: "Développeur Full Stack passionné par la création d'applications robustes, évolutives et performantes, certifié Cloud et expert en architectures modernes.",
      quickLinks: 'Liens rapides',
      services: 'Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Abonnez-vous pour recevoir mes derniers articles et actualités.',
      newsletterPlaceholder: 'Votre email',
      newsletterSuccess: 'Inscription réussie !',
      newsletterSuccessDesc: 'Votre email a bien été enregistré. Les mises à jour seront envoyées.',
      copyright: 'Thierno Abdourahmane Diallo. Développé avec passion. Tous droits réservés.',
      madeWith: 'Fait avec',
      and: 'et',
      backToTop: 'Retour en haut',
      serv1: 'Architecture Full Stack',
      serv2: 'Solutions Cloud & DevOps',
      serv3: 'Développement Mobile Natif',
      serv4: 'Ingénierie de Données',
      serv5: '.NET & Node.js Expertise',
    },
    chatbot: {
      title: 'Assistant Thierno',
      welcome: 'Bonjour ! Comment puis-je vous aider ?',
      back: 'Retour aux questions',
      q1: 'Quelle est votre stack technique ?',
      a1: 'Je suis spécialisé en .NET Core, Node.js, React, Angular et les solutions Cloud (AWS/Azure).',
      q2: 'Êtes-vous certifié ?',
      a2: 'Oui, je possède plusieurs certifications Cloud (AWS Practitioner, Azure Admin AZ-104, Azure Fundamentals).',
      q3: 'Êtes-vous disponible ?',
      a3: 'Oui, je suis actuellement ouvert à de nouvelles opportunités en freelance ou en CDI.',
      q4: 'Où êtes-vous basé ?',
      a4: 'Je suis basé à Dakar, Sénégal, et je travaille principalement en remote.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      contactBtn: 'Contact Me',
    },
    hero: {
      hi: 'Hi there! 😉',
      im: 'I am',
      title1: 'Full Stack Developer',
      title2: '& Mobile',
      desc1: 'Welcome to my portfolio! As a software engineer passionate about innovation, I design robust and scalable solutions using the most modern stacks on the market.',
      desc2: 'Specialized in complex architectures, I transform your ideas into high-performance applications.',
      bonCode: 'Happy coding!',
      cvBtn: 'My CV',
      contactBtn: 'Contact Me',
      skillsCenter: 'FullStack',
    },
    about: {
      badge: 'About Me',
      title: 'Passionate Developer dedicated to',
      quality: 'Quality',
      desc1: 'I am Thierno Abdourahmane Diallo, a software engineer focused on digital innovation. My journey began with a curiosity about how the Internet works, which grew into a passion for building robust applications.',
      desc2: 'Specializing in .NET Core, React, and Node.js, I focus on creating scalable architectures and seamless user experiences.',
      desc3: 'I am constantly looking for new challenges and love exploring the latest technology trends to provide increasingly efficient solutions.',
      expYears: 'Years of Experience',
      loc: 'Location',
      email: 'Email',
      specialty: 'Specialty',
      interests: 'Interests',
      interestsList: 'SaaS, Mobile Apps, API',
    },
    codeShowcase: {
      subtitle: 'Full Stack Developer',
    },
    services: {
      title: 'Services and Expertise',
      subtitle: 'Complete Solutions for Modern Businesses',
      desc: 'From design to deployment, I offer comprehensive development services combining technical excellence and added value for your business.',
      s1: { title: 'Technical Consulting & Strategy', desc: 'Strategic technology consulting for startups and companies. Expert advice on tech stack choice, architecture design and scalable solutions.' },
      s2: { title: 'Full-Stack Web Development', desc: 'Building high-performance web applications using Next.js, React, and Node.js. Expert in micro-services architectures and secure REST/GraphQL APIs.' },
      s3: { title: 'Mobile App Development', desc: 'Creating seamless native and hybrid mobile experiences with React Native and Flutter. Focus on performance, UX/UI design, and real-time features.' },
      s4: { title: 'Cloud Architecture & DevOps', desc: 'Scalable cloud infrastructure on AWS, Azure, or GCP. Containerization with Docker/Kubernetes, automated deployments and monitoring.' },
      s5: { title: 'Performance & SEO Optimization', desc: 'Web performance audits, Core Web Vitals optimization, and technical SEO. Improving page speed and accessibility to maximize user engagement.' },
      s6: { title: 'Code Review & Team Leadership', desc: 'Technical leadership, code quality reviews, security audits, and mentoring. Refactoring existing systems and setting best practices.' },
    },
    skills: {
      title: 'Skills and Expertise',
      desc: 'A complete technological arsenal to meet all your digital needs.',
      frontend: "Front-End & Mobile",
      backend: "Back-End",
      cloud: "Data & Cloud",
      devops: "DB & DevOps",
      certsTitle: "Certifications",
      s_react: "React.js, Next.js, Angular, Flutter, React Native, TypeScript, Tailwind CSS.",
      s_node: "ASP.NET Core (C#), Node.js, Express, Python, Java Spring Boot, Entity Framework.",
      s_cloud: "AWS, Azure, Spark, Scala, Elasticsearch, Kibana, Databricks.",
      s_devops: "PostgreSQL, MySQL, MongoDB, Redis, Docker, Kubernetes, CI/CD, Git.",
    },
    projects: {
      categories: { all: 'All Projects', web: 'Web', mobile: 'Mobile' },
      loadMore: 'Load more projects',
      details: 'Project Details',
      realizations: 'Key Realizations',
      tech: 'Technologies',
      items: {
        okooltrip: {
          title: 'OkoolTrip',
          date: 'December 2023 - Present',
          desc: 'Full ticketing and trip management platform.',
          tasks: [
            "Full-Stack architecture design with Next.js and Node.js",
            "Real-time booking system implementation",
            "Secure payment gateway integration",
            "Admin dashboard development for flow management"
          ]
        },
        atos: {
          title: 'Atos (Mobile Project)',
          date: 'June 2023 - November 2023',
          desc: "Hybrid mobile application developed for a major client's digital transformation.",
          tasks: [
            "Mobile UI development with React Native",
            "Complex API consumption for real-time reporting",
            "Offline capability with sync implementation",
            "Mobile rendering performance optimization"
          ]
        },
        fegnseo: {
          title: 'FegnSEO',
          date: 'January 2024 - April 2024',
          desc: "Automated SEO audit and monitoring SaaS for websites.",
          tasks: [
            "SEO performance analysis algorithms development",
            "Web page crawling automation",
            "Automatic detailed PDF report generation",
            "Interactive data charts integration with Recharts"
          ]
        },
        assuraf: {
          title: 'Assuraf',
          date: 'September 2023 - January 2024',
          desc: 'Simplified online insurance subscription digital solution.',
          tasks: [
            "Complex dynamic subscription forms development",
            "Supporting documents management via Cloud storage",
            "Instant quote calculation engine implementation",
            "RESTful API architecture with Express.js"
          ]
        },
        cuberfit: {
          title: 'Cuberfit',
          date: 'March 2024 - Present',
          desc: 'Personalized mobile coaching and fitness tracking application.',
          tasks: [
            "Mobile app development using React Native / Expo",
            "Exercise tracking system with data logging",
            "Push notifications integration for user engagement",
            "Real-time Backend architecture with Socket.io"
          ]
        }
      }
    },
    contact: {
      title: "Let's Collaborate",
      desc: 'Have a project? I\'m ready to help you achieve it. Use the form below or pick an AI suggestion to get started.',
      aiTitle: 'AI Request Assistant',
      aiDesc: 'Need help starting? Click a suggestion based on my profile:',
      aiGenerating: 'Generating ideas...',
      aiRegenerate: 'Regenerate suggestions',
      labels: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Your Message' },
      placeholders: { name: 'John Doe', email: 'john@example.com', subject: 'Project Inquiry', message: 'Tell me about your project...' },
      submitBtn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent!',
      successDesc: 'Thank you for contacting me. I will get back to you as soon as possible.',
      info: { email: 'Direct Email', phone: 'Phone', loc: 'Location' },
    },
    footer: {
      about: 'About',
      aboutDesc: 'Full Stack developer passionate about building robust, scalable, and high-performance applications, Cloud certified and expert in modern architectures.',
      quickLinks: 'Quick Links',
      services: 'Services',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to receive my latest articles and updates.',
      newsletterPlaceholder: 'Your email',
      newsletterSuccess: 'Subscription successful!',
      newsletterSuccessDesc: 'Your email has been registered. Updates will be sent.',
      copyright: 'Thierno Abdourahmane Diallo. Developed with passion. All rights reserved.',
      madeWith: 'Made with',
      and: 'and',
      backToTop: 'Back to top',
      serv1: 'Full Stack Architecture',
      serv2: 'Cloud & DevOps Solutions',
      serv3: 'Native Mobile Development',
      serv4: 'Data Engineering',
      serv5: '.NET & Node.js Expertise',
    },
    chatbot: {
      title: 'Thierno Assistant',
      welcome: 'Hi! How can I help you today?',
      back: 'Back to questions',
      q1: 'What is your tech stack?',
      a1: 'I specialize in .NET Core, Node.js, React, Angular, and Cloud solutions (AWS/Azure).',
      q2: 'Are you certified?',
      a2: 'Yes, I hold several Cloud certifications (AWS Practitioner, Azure Admin AZ-104, Azure Fundamentals).',
      q3: 'How to contact you?',
      a3: 'You can use the contact form on this site or email me directly at thierno.241991@gmail.com.',
      q4: 'Where are you based?',
      a4: 'I am based in Dakar, Senegal, and I work mostly remotely.',
    }
  }
};