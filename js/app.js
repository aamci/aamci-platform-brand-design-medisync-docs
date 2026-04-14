/* ============================================================
   MediSync Documentation - Application Logic
   Client-side SPA routing, search, and rendering
   ============================================================ */

// ---- DATA: Complete Documentation Content ----
const APPS = [
  { id: 'pro', name: 'MediSync Pro', desc: 'Praticiens & Établissements', icon: 'stethoscope' },
  { id: 'patient', name: 'MediSync Patient', desc: 'Application Patient', icon: 'user-heart' },
  { id: 'parents', name: 'MediSync Parents', desc: 'Enfants 0-4 ans', icon: 'baby' },
  { id: 'telesecretariat', name: 'MediSync Télésecrétariats', desc: 'Support téléphonique', icon: 'headset' }
];

const CATEGORIES = {
  pro: [
    {
      id: 'getting-started',
      title: 'Prise en main',
      icon: 'rocket',
      description: 'Premiers pas avec MediSync Pro : création de compte, connexion et découverte de l\'interface.',
      sections: [
        {
          id: 'account-setup',
          title: 'Créer et configurer votre compte',
          articles: [
            { id: 'create-account', title: 'Créer votre compte MediSync Pro', content: getArticleContent('create-account') },
            { id: 'first-login', title: 'Se connecter pour la première fois', content: getArticleContent('first-login') },
            { id: 'discover-interface', title: 'Découvrir l\'interface MediSync Pro', content: getArticleContent('discover-interface') },
            { id: 'setup-profile', title: 'Configurer votre profil praticien', content: getArticleContent('setup-profile') },
            { id: 'setup-cabinet', title: 'Paramétrer votre cabinet', content: getArticleContent('setup-cabinet') },
          ]
        },
        {
          id: 'navigation',
          title: 'Naviguer dans l\'application',
          articles: [
            { id: 'sidebar-nav', title: 'La barre de navigation latérale', content: getArticleContent('sidebar-nav') },
            { id: 'header-search', title: 'Utiliser la recherche globale', content: getArticleContent('header-search') },
            { id: 'keyboard-shortcuts', title: 'Raccourcis clavier', content: getArticleContent('keyboard-shortcuts') },
          ]
        }
      ]
    },
    {
      id: 'agenda',
      title: 'Agenda & Planning',
      icon: 'calendar',
      description: 'Gérez votre planning, vos rendez-vous et vos créneaux de disponibilité.',
      sections: [
        {
          id: 'agenda-views',
          title: 'Vues de l\'agenda',
          articles: [
            { id: 'agenda-overview', title: 'Vue d\'ensemble de l\'agenda', content: getArticleContent('agenda-overview') },
            { id: 'day-view', title: 'Vue journalière', content: getArticleContent('day-view') },
            { id: 'week-view', title: 'Vue hebdomadaire', content: getArticleContent('week-view') },
            { id: 'month-view', title: 'Vue mensuelle', content: getArticleContent('month-view') },
          ]
        },
        {
          id: 'manage-appointments',
          title: 'Gérer les rendez-vous',
          articles: [
            { id: 'create-appointment', title: 'Créer un rendez-vous', content: getArticleContent('create-appointment') },
            { id: 'modify-appointment', title: 'Modifier ou déplacer un rendez-vous', content: getArticleContent('modify-appointment') },
            { id: 'cancel-appointment', title: 'Annuler un rendez-vous', content: getArticleContent('cancel-appointment') },
            { id: 'appointment-types', title: 'Les types de rendez-vous (consultation, suivi, urgence...)', content: getArticleContent('appointment-types') },
            { id: 'appointment-status', title: 'Statuts des rendez-vous', content: getArticleContent('appointment-status') },
          ]
        },
        {
          id: 'availability',
          title: 'Disponibilités',
          articles: [
            { id: 'manage-slots', title: 'Gérer vos créneaux de disponibilité', content: getArticleContent('manage-slots') },
            { id: 'unavailable-slots', title: 'Marquer des indisponibilités', content: getArticleContent('unavailable-slots') },
            { id: 'recurring-schedule', title: 'Configurer des horaires récurrents', content: getArticleContent('recurring-schedule') },
          ]
        }
      ]
    },
    {
      id: 'patients',
      title: 'Gestion des patients',
      icon: 'users',
      description: 'Créez et gérez les dossiers patients complets : informations, antécédents, traitements et documents.',
      sections: [
        {
          id: 'patient-list',
          title: 'Liste des patients',
          articles: [
            { id: 'patient-list-overview', title: 'Vue d\'ensemble de la liste patients', content: getArticleContent('patient-list-overview') },
            { id: 'search-patient', title: 'Rechercher un patient', content: getArticleContent('search-patient') },
            { id: 'create-patient', title: 'Créer un nouveau dossier patient', content: getArticleContent('create-patient') },
          ]
        },
        {
          id: 'patient-dossier',
          title: 'Dossier patient',
          articles: [
            { id: 'patient-home', title: 'Accueil du dossier patient', content: getArticleContent('patient-home') },
            { id: 'patient-consultation', title: 'Onglet Consultation', content: getArticleContent('patient-consultation') },
            { id: 'patient-infos', title: 'Informations administratives', content: getArticleContent('patient-infos') },
            { id: 'patient-antecedents', title: 'Antécédents médicaux', content: getArticleContent('patient-antecedents') },
            { id: 'patient-observations', title: 'Observations cliniques', content: getArticleContent('patient-observations') },
            { id: 'patient-treatments', title: 'Traitements en cours', content: getArticleContent('patient-treatments') },
            { id: 'patient-biologie', title: 'Résultats biologiques', content: getArticleContent('patient-biologie') },
            { id: 'patient-vaccination', title: 'Carnet de vaccination', content: getArticleContent('patient-vaccination') },
            { id: 'patient-documents', title: 'Documents du patient', content: getArticleContent('patient-documents') },
            { id: 'patient-history', title: 'Historique des consultations', content: getArticleContent('patient-history') },
            { id: 'patient-invoices', title: 'Facturation patient', content: getArticleContent('patient-invoices') },
          ]
        }
      ]
    },
    {
      id: 'teleconsultation',
      title: 'Téléconsultation',
      icon: 'video',
      description: 'Réalisez des consultations vidéo sécurisées avec vos patients, directement depuis MediSync Pro.',
      sections: [
        {
          id: 'teleconsult-setup',
          title: 'Configuration',
          articles: [
            { id: 'teleconsult-config', title: 'Configurer la téléconsultation', content: getArticleContent('teleconsult-config') },
            { id: 'teleconsult-requirements', title: 'Prérequis techniques', content: getArticleContent('teleconsult-requirements') },
          ]
        },
        {
          id: 'teleconsult-usage',
          title: 'Réaliser une téléconsultation',
          articles: [
            { id: 'start-teleconsult', title: 'Lancer une téléconsultation', content: getArticleContent('start-teleconsult') },
            { id: 'waiting-room', title: 'La salle d\'attente virtuelle', content: getArticleContent('waiting-room') },
            { id: 'video-features', title: 'Fonctionnalités de la visioconférence', content: getArticleContent('video-features') },
            { id: 'end-teleconsult', title: 'Terminer et documenter la consultation', content: getArticleContent('end-teleconsult') },
          ]
        }
      ]
    },
    {
      id: 'messaging',
      title: 'Messagerie',
      icon: 'message-square',
      description: 'Communiquez avec vos patients de manière sécurisée grâce à la messagerie intégrée.',
      sections: [
        {
          id: 'messaging-basics',
          title: 'Utiliser la messagerie',
          articles: [
            { id: 'messaging-overview', title: 'Vue d\'ensemble de la messagerie', content: getArticleContent('messaging-overview') },
            { id: 'send-message', title: 'Envoyer un message', content: getArticleContent('send-message') },
            { id: 'manage-conversations', title: 'Gérer vos conversations', content: getArticleContent('manage-conversations') },
            { id: 'messaging-notifications', title: 'Notifications de messagerie', content: getArticleContent('messaging-notifications') },
          ]
        }
      ]
    },
    {
      id: 'notes-tasks',
      title: 'Notes & Tâches',
      icon: 'clipboard',
      description: 'Organisez votre quotidien avec les notes cliniques et le gestionnaire de tâches.',
      sections: [
        {
          id: 'notes',
          title: 'Notes',
          articles: [
            { id: 'create-note', title: 'Créer et gérer des notes', content: getArticleContent('create-note') },
            { id: 'note-templates', title: 'Modèles de notes', content: getArticleContent('note-templates') },
          ]
        },
        {
          id: 'tasks',
          title: 'Tâches',
          articles: [
            { id: 'task-management', title: 'Gérer vos tâches', content: getArticleContent('task-management') },
            { id: 'task-priorities', title: 'Priorisation et suivi', content: getArticleContent('task-priorities') },
          ]
        }
      ]
    },
    {
      id: 'activity',
      title: 'Activité & Statistiques',
      icon: 'bar-chart',
      description: 'Suivez votre activité et analysez vos performances grâce aux tableaux de bord.',
      sections: [
        {
          id: 'dashboard',
          title: 'Tableau de bord',
          articles: [
            { id: 'activity-dashboard', title: 'Le tableau de bord d\'activité', content: getArticleContent('activity-dashboard') },
            { id: 'consultation-stats', title: 'Statistiques de consultation', content: getArticleContent('consultation-stats') },
            { id: 'revenue-tracking', title: 'Suivi du chiffre d\'affaires', content: getArticleContent('revenue-tracking') },
          ]
        }
      ]
    },
    {
      id: 'settings',
      title: 'Paramètres',
      icon: 'settings',
      description: 'Configurez votre cabinet, vos motifs de consultation, la messagerie et votre compte.',
      sections: [
        {
          id: 'cabinet-settings',
          title: 'Cabinet & Organisation',
          articles: [
            { id: 'user-accounts', title: 'Comptes utilisateurs', content: getArticleContent('user-accounts') },
            { id: 'substitutes', title: 'Gestion des remplaçants', content: getArticleContent('substitutes') },
            { id: 'agenda-settings', title: 'Paramètres des agendas', content: getArticleContent('agenda-settings') },
            { id: 'locations', title: 'Lieux de consultation', content: getArticleContent('locations') },
            { id: 'visibility', title: 'Visibilité et réservation en ligne', content: getArticleContent('visibility') },
          ]
        },
        {
          id: 'rdv-settings',
          title: 'Rendez-vous',
          articles: [
            { id: 'consultation-motifs', title: 'Motifs de consultation', content: getArticleContent('consultation-motifs') },
            { id: 'motif-categories', title: 'Catégories de motifs', content: getArticleContent('motif-categories') },
            { id: 'internal-instructions', title: 'Instructions internes', content: getArticleContent('internal-instructions') },
            { id: 'patient-instructions', title: 'Consignes patients', content: getArticleContent('patient-instructions') },
            { id: 'rdv-questions', title: 'Questions pré-rendez-vous', content: getArticleContent('rdv-questions') },
            { id: 'rdv-documents', title: 'Documents liés aux rendez-vous', content: getArticleContent('rdv-documents') },
          ]
        },
        {
          id: 'profile-settings',
          title: 'Profil & Sécurité',
          articles: [
            { id: 'my-account', title: 'Mon compte', content: getArticleContent('my-account') },
            { id: 'privacy-center', title: 'Centre de confidentialité', content: getArticleContent('privacy-center') },
            { id: 'security-log', title: 'Journal de sécurité', content: getArticleContent('security-log') },
            { id: 'signature', title: 'Ma signature', content: getArticleContent('signature') },
          ]
        }
      ]
    }
  ],
  patient: [
    {
      id: 'premiers-pas',
      title: 'Premiers pas',
      icon: 'rocket',
      description: 'Créez votre compte patient, connectez-vous et découvrez l\'application MediSync Patient.',
      sections: [
        {
          id: 'compte',
          title: 'Votre compte patient',
          articles: [
            { id: 'p-create-account', title: 'Créer un compte MediSync Patient', content: getArticleContent('p-create-account') },
            { id: 'p-login', title: 'Se connecter à votre espace patient', content: getArticleContent('p-login') },
            { id: 'p-profile', title: 'Compléter votre profil patient', content: getArticleContent('p-profile') },
            { id: 'p-ayants-droit', title: 'Ajouter des ayants droit (enfants, famille)', content: getArticleContent('p-ayants-droit') },
            { id: 'p-interface', title: 'Découvrir l\'interface patient', content: getArticleContent('p-interface') },
          ]
        }
      ]
    },
    {
      id: 'p-dashboard',
      title: 'Tableau de bord',
      icon: 'home',
      description: 'Votre page d\'accueil : prochains rendez-vous, messages, notifications et suivi de santé.',
      sections: [
        {
          id: 'accueil',
          title: 'Accueil',
          articles: [
            { id: 'p-home-overview', title: 'Vue d\'ensemble de l\'accueil', content: getArticleContent('p-home-overview') },
            { id: 'p-stats-cards', title: 'Les cartes statistiques (À venir, Messages, Notifications)', content: getArticleContent('p-stats-cards') },
            { id: 'p-prochain-rdv', title: 'Section Prochain rendez-vous', content: getArticleContent('p-prochain-rdv') },
            { id: 'p-teleconsult-home', title: 'Téléconsultations à venir', content: getArticleContent('p-teleconsult-home') },
            { id: 'p-suivi-sante', title: 'Le suivi de santé', content: getArticleContent('p-suivi-sante') },
          ]
        }
      ]
    },
    {
      id: 'p-medecins',
      title: 'Trouver un médecin',
      icon: 'search',
      description: 'Recherchez un médecin par spécialité, ville ou nom, consultez les profils et prenez rendez-vous.',
      sections: [
        {
          id: 'recherche',
          title: 'Recherche et réservation',
          articles: [
            { id: 'p-search-doctor', title: 'Rechercher un médecin', content: getArticleContent('p-search-doctor') },
            { id: 'p-doctor-profile', title: 'Consulter le profil d\'un médecin', content: getArticleContent('p-doctor-profile') },
            { id: 'p-book-rdv', title: 'Prendre un rendez-vous', content: getArticleContent('p-book-rdv') },
            { id: 'p-motif-choice', title: 'Choisir un motif de consultation', content: getArticleContent('p-motif-choice') },
            { id: 'p-slot-choice', title: 'Choisir un créneau', content: getArticleContent('p-slot-choice') },
            { id: 'p-confirm-rdv', title: 'Confirmer et recevoir la confirmation', content: getArticleContent('p-confirm-rdv') },
          ]
        }
      ]
    },
    {
      id: 'p-rdv',
      title: 'Mes rendez-vous',
      icon: 'calendar',
      description: 'Consultez, modifiez ou annulez vos rendez-vous en cabinet et vos téléconsultations.',
      sections: [
        {
          id: 'gestion-rdv',
          title: 'Gérer mes rendez-vous',
          articles: [
            { id: 'p-list-rdv', title: 'Liste de mes rendez-vous', content: getArticleContent('p-list-rdv') },
            { id: 'p-rdv-detail', title: 'Détail d\'un rendez-vous', content: getArticleContent('p-rdv-detail') },
            { id: 'p-modify-rdv', title: 'Modifier un rendez-vous', content: getArticleContent('p-modify-rdv') },
            { id: 'p-cancel-rdv', title: 'Annuler un rendez-vous', content: getArticleContent('p-cancel-rdv') },
            { id: 'p-rappels', title: 'Rappels SMS et e-mail', content: getArticleContent('p-rappels') },
          ]
        }
      ]
    },
    {
      id: 'p-teleconsult',
      title: 'Téléconsultation',
      icon: 'video',
      description: 'Réalisez vos consultations vidéo en toute simplicité depuis votre ordinateur ou votre smartphone.',
      sections: [
        {
          id: 'visio',
          title: 'Visioconférence',
          articles: [
            { id: 'p-teleconsult-prep', title: 'Préparer votre téléconsultation', content: getArticleContent('p-teleconsult-prep') },
            { id: 'p-join-visio', title: 'Rejoindre la salle d\'attente', content: getArticleContent('p-join-visio') },
            { id: 'p-visio-features', title: 'Fonctionnalités pendant la consultation', content: getArticleContent('p-visio-features') },
            { id: 'p-visio-issues', title: 'Résoudre les problèmes techniques', content: getArticleContent('p-visio-issues') },
          ]
        }
      ]
    },
    {
      id: 'p-dossier',
      title: 'Dossier médical',
      icon: 'file-text',
      description: 'Accédez à votre dossier de santé complet : antécédents, traitements, résultats et documents.',
      sections: [
        {
          id: 'dossier-sante',
          title: 'Votre dossier de santé',
          articles: [
            { id: 'p-dossier-overview', title: 'Vue d\'ensemble du dossier médical', content: getArticleContent('p-dossier-overview') },
            { id: 'p-mes-traitements', title: 'Mes traitements en cours', content: getArticleContent('p-mes-traitements') },
            { id: 'p-mes-antecedents', title: 'Mes antécédents', content: getArticleContent('p-mes-antecedents') },
            { id: 'p-mes-vaccins', title: 'Mon carnet de vaccination', content: getArticleContent('p-mes-vaccins') },
            { id: 'p-mes-documents', title: 'Mes documents médicaux', content: getArticleContent('p-mes-documents') },
            { id: 'p-mes-resultats', title: 'Résultats d\'examens et biologie', content: getArticleContent('p-mes-resultats') },
          ]
        }
      ]
    },
    {
      id: 'p-messages',
      title: 'Messages',
      icon: 'message-square',
      description: 'Échangez de manière sécurisée avec vos médecins.',
      sections: [
        {
          id: 'messagerie-p',
          title: 'Messagerie sécurisée',
          articles: [
            { id: 'p-messages-overview', title: 'Découvrir la messagerie patient', content: getArticleContent('p-messages-overview') },
            { id: 'p-new-message', title: 'Envoyer un message à mon médecin', content: getArticleContent('p-new-message') },
            { id: 'p-attach-docs', title: 'Joindre un document', content: getArticleContent('p-attach-docs') },
          ]
        }
      ]
    },
    {
      id: 'p-favoris',
      title: 'Favoris & Établissements',
      icon: 'users',
      description: 'Retrouvez vos médecins favoris et découvrez les établissements partenaires.',
      sections: [
        {
          id: 'favoris-etab',
          title: 'Favoris et établissements',
          articles: [
            { id: 'p-favorites', title: 'Gérer mes médecins favoris', content: getArticleContent('p-favorites') },
            { id: 'p-etablissements', title: 'Trouver un établissement de santé', content: getArticleContent('p-etablissements') },
            { id: 'p-etab-detail', title: 'Détail d\'un établissement', content: getArticleContent('p-etab-detail') },
          ]
        }
      ]
    },
    {
      id: 'p-notifications',
      title: 'Notifications',
      icon: 'bar-chart',
      description: 'Restez informé des mises à jour importantes concernant vos soins.',
      sections: [
        {
          id: 'notifs',
          title: 'Centre de notifications',
          articles: [
            { id: 'p-notif-center', title: 'Centre de notifications', content: getArticleContent('p-notif-center') },
            { id: 'p-notif-prefs', title: 'Préférences de notifications', content: getArticleContent('p-notif-prefs') },
          ]
        }
      ]
    },
    {
      id: 'p-compte',
      title: 'Mon compte',
      icon: 'settings',
      description: 'Gérez votre compte, votre sécurité et vos préférences de confidentialité.',
      sections: [
        {
          id: 'compte-secu',
          title: 'Compte et sécurité',
          articles: [
            { id: 'p-account-settings', title: 'Paramètres du compte', content: getArticleContent('p-account-settings') },
            { id: 'p-password', title: 'Changer mon mot de passe', content: getArticleContent('p-password') },
            { id: 'p-2fa', title: 'Activer la double authentification', content: getArticleContent('p-2fa') },
            { id: 'p-privacy', title: 'Confidentialité et RGPD', content: getArticleContent('p-privacy') },
            { id: 'p-export-data', title: 'Exporter mes données', content: getArticleContent('p-export-data') },
          ]
        }
      ]
    }
  ],
  parents: [
    {
      id: 'parents-start',
      title: 'Bienvenue dans MediSync Parents',
      icon: 'rocket',
      description: 'L\'application dédiée au suivi médical de vos enfants de 0 à 4 ans.',
      sections: [
        {
          id: 'demarrage',
          title: 'Démarrer avec MediSync Parents',
          articles: [
            { id: 'pa-create', title: 'Créer un compte Parents', content: getArticleContent('pa-create') },
            { id: 'pa-add-child', title: 'Ajouter un enfant', content: getArticleContent('pa-add-child') },
            { id: 'pa-interface', title: 'Découvrir l\'interface Parents', content: getArticleContent('pa-interface') },
          ]
        }
      ]
    },
    {
      id: 'parents-suivi',
      title: 'Suivi de l\'enfant',
      icon: 'baby',
      description: 'Suivi du développement, courbes de croissance et étapes clés.',
      sections: [
        {
          id: 'croissance',
          title: 'Croissance et développement',
          articles: [
            { id: 'pa-growth', title: 'Courbes de croissance (taille, poids, PC)', content: getArticleContent('pa-growth') },
            { id: 'pa-milestones', title: 'Étapes du développement', content: getArticleContent('pa-milestones') },
            { id: 'pa-feeding', title: 'Alimentation et diversification', content: getArticleContent('pa-feeding') },
            { id: 'pa-sleep', title: 'Sommeil et rythmes', content: getArticleContent('pa-sleep') },
          ]
        }
      ]
    },
    {
      id: 'parents-sante',
      title: 'Santé & Vaccinations',
      icon: 'file-text',
      description: 'Carnet de santé numérique, vaccinations et examens obligatoires.',
      sections: [
        {
          id: 'carnet',
          title: 'Carnet de santé',
          articles: [
            { id: 'pa-carnet', title: 'Le carnet de santé numérique', content: getArticleContent('pa-carnet') },
            { id: 'pa-vaccines', title: 'Calendrier vaccinal', content: getArticleContent('pa-vaccines') },
            { id: 'pa-exams', title: 'Examens obligatoires 0-4 ans', content: getArticleContent('pa-exams') },
            { id: 'pa-symptoms', title: 'Journal des symptômes', content: getArticleContent('pa-symptoms') },
          ]
        }
      ]
    },
    {
      id: 'parents-rdv',
      title: 'Rendez-vous pédiatre',
      icon: 'calendar',
      description: 'Prenez rendez-vous avec pédiatres, PMI et professionnels de santé pour enfants.',
      sections: [
        {
          id: 'rdv-enfant',
          title: 'Rendez-vous de l\'enfant',
          articles: [
            { id: 'pa-book', title: 'Prendre RDV pour un enfant', content: getArticleContent('pa-book') },
            { id: 'pa-pmi', title: 'Consultations en PMI', content: getArticleContent('pa-pmi') },
            { id: 'pa-reminders', title: 'Rappels automatiques', content: getArticleContent('pa-reminders') },
          ]
        }
      ]
    },
    {
      id: 'parents-conseils',
      title: 'Conseils & Ressources',
      icon: 'clipboard',
      description: 'Fiches pratiques, conseils santé et ressources pour jeunes parents.',
      sections: [
        {
          id: 'ressources',
          title: 'Ressources parentales',
          articles: [
            { id: 'pa-advice', title: 'Conseils santé selon l\'âge', content: getArticleContent('pa-advice') },
            { id: 'pa-emergency', title: 'Que faire en cas d\'urgence ?', content: getArticleContent('pa-emergency') },
            { id: 'pa-resources', title: 'Ressources utiles', content: getArticleContent('pa-resources') },
          ]
        }
      ]
    }
  ],
  telesecretariat: [
    {
      id: 'ts-start',
      title: 'Introduction',
      icon: 'rocket',
      description: 'Découvrez MediSync Télésecrétariats, la solution de gestion d\'appels médicaux.',
      sections: [
        {
          id: 'intro-ts',
          title: 'Présentation',
          articles: [
            { id: 'ts-overview', title: 'Qu\'est-ce que MediSync Télésecrétariats ?', content: getArticleContent('ts-overview') },
            { id: 'ts-login', title: 'Connexion télésecrétaire', content: getArticleContent('ts-login') },
            { id: 'ts-interface', title: 'Interface télésecrétaire', content: getArticleContent('ts-interface') },
          ]
        }
      ]
    },
    {
      id: 'ts-calls',
      title: 'Gestion des appels',
      icon: 'headset',
      description: 'Prenez et gérez les appels entrants pour les cabinets médicaux partenaires.',
      sections: [
        {
          id: 'appels',
          title: 'Traitement des appels',
          articles: [
            { id: 'ts-incoming', title: 'Traiter un appel entrant', content: getArticleContent('ts-incoming') },
            { id: 'ts-book-rdv', title: 'Prendre un rendez-vous pour un patient', content: getArticleContent('ts-book-rdv') },
            { id: 'ts-emergency', title: 'Gérer les urgences', content: getArticleContent('ts-emergency') },
            { id: 'ts-transfer', title: 'Transférer un appel', content: getArticleContent('ts-transfer') },
            { id: 'ts-notes', title: 'Prendre des notes pendant l\'appel', content: getArticleContent('ts-notes') },
          ]
        }
      ]
    },
    {
      id: 'ts-cabinets',
      title: 'Cabinets gérés',
      icon: 'users',
      description: 'Consignes spécifiques, agendas et règles par cabinet partenaire.',
      sections: [
        {
          id: 'cabinets',
          title: 'Cabinets partenaires',
          articles: [
            { id: 'ts-cabinet-list', title: 'Liste des cabinets', content: getArticleContent('ts-cabinet-list') },
            { id: 'ts-cabinet-rules', title: 'Règles et consignes par cabinet', content: getArticleContent('ts-cabinet-rules') },
            { id: 'ts-cabinet-agenda', title: 'Agendas des praticiens', content: getArticleContent('ts-cabinet-agenda') },
          ]
        }
      ]
    },
    {
      id: 'ts-messages',
      title: 'Messagerie & Transmissions',
      icon: 'message-square',
      description: 'Transmettez les messages aux cabinets et suivez les demandes en cours.',
      sections: [
        {
          id: 'transmissions',
          title: 'Transmissions',
          articles: [
            { id: 'ts-transmit', title: 'Transmettre un message au cabinet', content: getArticleContent('ts-transmit') },
            { id: 'ts-follow-up', title: 'Suivre les demandes en cours', content: getArticleContent('ts-follow-up') },
          ]
        }
      ]
    },
    {
      id: 'ts-stats',
      title: 'Performance',
      icon: 'bar-chart',
      description: 'Statistiques d\'activité : volume d\'appels, durée moyenne, taux de décroché.',
      sections: [
        {
          id: 'stats-ts',
          title: 'Tableaux de bord',
          articles: [
            { id: 'ts-dashboard', title: 'Tableau de bord télésecrétaire', content: getArticleContent('ts-dashboard') },
            { id: 'ts-stats-detail', title: 'Indicateurs clés', content: getArticleContent('ts-stats-detail') },
          ]
        }
      ]
    }
  ]
};

// ---- UI MOCKUP SVGs (inline illustrations of real screens) ----
function mockupProDashboard() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interface MediSync Pro">
    <rect width="800" height="450" fill="#F6F8FA" rx="8"/>
    <rect x="0" y="0" width="72" height="450" fill="#101D2F"/>
    <rect x="16" y="16" width="40" height="40" rx="10" fill="#17926B"/>
    <text x="36" y="42" font-family="system-ui" font-size="18" font-weight="800" fill="white" text-anchor="middle">M</text>
    ${[['Planning',80,true],['Notes',130],['Tâches',180],['Patients',230],['Msg',280],['Visio',330],['Stats',380]].map(([l,y,a])=>`<rect x="12" y="${y-12}" width="48" height="40" rx="10" fill="${a?'#17926B':'transparent'}"/><circle cx="36" cy="${y}" r="7" fill="none" stroke="${a?'white':'#8A97AB'}" stroke-width="2"/><text x="36" y="${y+22}" font-family="system-ui" font-size="9" fill="${a?'white':'#8A97AB'}" text-anchor="middle">${l}</text>`).join('')}
    <rect x="72" y="0" width="728" height="60" fill="white" stroke="#E2E6EC"/>
    <text x="96" y="38" font-family="system-ui" font-size="18" font-weight="700" fill="#0D4A6B">Planning</text>
    <rect x="640" y="18" width="140" height="32" rx="8" fill="#17926B"/>
    <text x="710" y="38" font-family="system-ui" font-size="13" font-weight="600" fill="white" text-anchor="middle">+ Créer un RDV</text>
    ${[['RDV du jour','12','#0D4A6B'],['Patients','847','#17926B'],['Messages','5','#F59E0B'],['Visio','3','#0D4A6B']].map(([l,v,c],i)=>`<rect x="${96+i*172}" y="84" width="160" height="80" rx="8" fill="white" stroke="#E2E6EC"/><text x="${112+i*172}" y="108" font-family="system-ui" font-size="11" fill="#6B7B8D">${l}</text><text x="${112+i*172}" y="146" font-family="system-ui" font-size="26" font-weight="800" fill="${c}">${v}</text>`).join('')}
    ${[0,1,2,3].map(i=>`<rect x="96" y="${184+i*56}" width="676" height="48" rx="6" fill="white" stroke="#E2E6EC"/><rect x="108" y="${196+i*56}" width="64" height="24" rx="4" fill="#DDF3E9"/><text x="140" y="${213+i*56}" font-family="system-ui" font-size="11" font-weight="600" fill="#17926B" text-anchor="middle">${9+i*2}h00</text><circle cx="196" cy="${208+i*56}" r="12" fill="#DDF3E9"/><text x="220" y="${206+i*56}" font-family="system-ui" font-size="13" font-weight="600" fill="#0D4A6B">Patient ${i+1}</text><text x="220" y="${222+i*56}" font-family="system-ui" font-size="11" fill="#6B7B8D">Consultation de suivi</text>`).join('')}
  </svg><div class="ui-mockup-caption">Interface MediSync Pro — Module Planning avec barre latérale, statistiques et liste des rendez-vous du jour</div></div>`;
}

function mockupPatientDossier() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="450" fill="#F6F8FA" rx="8"/>
    <rect x="0" y="0" width="72" height="450" fill="#101D2F"/>
    <rect x="72" y="0" width="728" height="60" fill="white" stroke="#E2E6EC"/>
    <text x="96" y="38" font-family="system-ui" font-size="18" font-weight="700" fill="#0D4A6B">Dossier patient</text>
    <rect x="96" y="84" width="676" height="100" rx="8" fill="white" stroke="#E2E6EC"/>
    <circle cx="140" cy="134" r="28" fill="#17926B"/>
    <text x="140" y="140" font-family="system-ui" font-size="18" font-weight="700" fill="white" text-anchor="middle">MD</text>
    <text x="184" y="120" font-family="system-ui" font-size="18" font-weight="800" fill="#0D4A6B">Marie Dubois</text>
    <text x="184" y="140" font-family="system-ui" font-size="12" fill="#6B7B8D">Femme — 42 ans — 15/03/1984</text>
    <text x="184" y="158" font-family="system-ui" font-size="11" fill="#6B7B8D">06 12 34 56 78 — marie.dubois@email.fr</text>
    ${['Accueil','Consultation','Infos','Historique','Antécédents','Documents','Observations','Traitement','Biologie','Vaccination'].map((t,i)=>`<rect x="${96+i*68}" y="196" width="64" height="28" rx="6" fill="${i===0?'#0D4A6B':'transparent'}" stroke="${i===0?'none':'#E2E6EC'}"/><text x="${128+i*68}" y="214" font-family="system-ui" font-size="10" font-weight="${i===0?'600':'400'}" fill="${i===0?'white':'#6B7B8D'}" text-anchor="middle">${t}</text>`).join('')}
    <rect x="96" y="240" width="330" height="190" rx="8" fill="white" stroke="#E2E6EC"/>
    <text x="112" y="264" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Prochain rendez-vous</text>
    <rect x="112" y="278" width="300" height="60" rx="6" fill="#DDF3E9"/>
    <text x="124" y="300" font-family="system-ui" font-size="12" font-weight="600" fill="#0D4A6B">Lun 21 avril — 10h30</text>
    <text x="124" y="318" font-family="system-ui" font-size="11" fill="#17926B">Consultation de suivi</text>
    <text x="112" y="362" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Dernière consultation</text>
    <text x="112" y="384" font-family="system-ui" font-size="11" fill="#6B7B8D">12 mars 2026 — Renouvellement</text>
    <rect x="442" y="240" width="330" height="190" rx="8" fill="white" stroke="#E2E6EC"/>
    <text x="458" y="264" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Alertes &amp; rappels</text>
    <rect x="458" y="278" width="300" height="40" rx="6" fill="#FEF3C7"/>
    <text x="470" y="302" font-family="system-ui" font-size="11" fill="#92400E">Allergie pénicilline</text>
    <rect x="458" y="328" width="300" height="40" rx="6" fill="#DBEAFE"/>
    <text x="470" y="352" font-family="system-ui" font-size="11" fill="#1E40AF">Rappel DTP à prévoir</text>
  </svg><div class="ui-mockup-caption">Dossier patient — Vue d'ensemble avec informations, onglets et alertes médicales</div></div>`;
}

function mockupPatientApp() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="450" fill="#F6F8FA" rx="8"/>
    <rect x="0" y="0" width="800" height="64" fill="white" stroke="#E2E6EC"/>
    <rect x="24" y="18" width="28" height="28" rx="6" fill="#17926B"/>
    <text x="38" y="38" font-family="system-ui" font-size="14" font-weight="800" fill="white" text-anchor="middle">M</text>
    ${['Accueil','Médecins','Rendez-vous','Dossier','Messages','Favoris','Établissements'].map((t,i)=>`<text x="${80+i*90}" y="38" font-family="system-ui" font-size="12" font-weight="${i===0?'700':'500'}" fill="${i===0?'#0D4A6B':'#6B7B8D'}">${t}</text>${i===0?`<rect x="${70+i*90}" y="54" width="50" height="2" fill="#17926B"/>`:''}`).join('')}
    <circle cx="760" cy="32" r="16" fill="#E2E6EC"/>
    <text x="760" y="37" font-family="system-ui" font-size="11" font-weight="700" fill="#0D4A6B" text-anchor="middle">MD</text>
    <rect x="24" y="84" width="752" height="90" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="44" y="116" font-family="system-ui" font-size="18" font-weight="700" fill="#0D4A6B">Bon après-midi, Marie</text>
    <text x="44" y="138" font-family="system-ui" font-size="12" fill="#6B7B8D">mardi 14 avril 2026</text>
    <rect x="620" y="112" width="140" height="40" rx="8" fill="#17926B"/>
    <text x="690" y="137" font-family="system-ui" font-size="13" font-weight="600" fill="white" text-anchor="middle">Prendre RDV</text>
    ${[['À venir','0','#0D4A6B'],['Messages','0','#17926B'],['Notifs','2','#EF4444'],["Aujourd'hui",'0','#F59E0B']].map(([l,v,c],i)=>`<rect x="${24+i*190}" y="188" width="170" height="80" rx="10" fill="white" stroke="#E2E6EC"/><text x="${44+i*190}" y="214" font-family="system-ui" font-size="11" fill="#6B7B8D">${l}</text><text x="${44+i*190}" y="246" font-family="system-ui" font-size="28" font-weight="800" fill="${c}">${v}</text>`).join('')}
    <rect x="24" y="284" width="370" height="150" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="44" y="310" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Prochain rendez-vous</text>
    <text x="44" y="360" font-family="system-ui" font-size="12" fill="#6B7B8D">Aucun RDV prévu</text>
    <rect x="44" y="380" width="170" height="36" rx="8" fill="#17926B"/>
    <text x="129" y="403" font-family="system-ui" font-size="12" font-weight="600" fill="white" text-anchor="middle">Trouver un médecin</text>
    <rect x="406" y="284" width="370" height="150" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="426" y="310" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Téléconsultations</text>
    <text x="426" y="360" font-family="system-ui" font-size="12" fill="#6B7B8D">Aucune visio prévue</text>
  </svg><div class="ui-mockup-caption">MediSync Patient — Tableau de bord avec barre de navigation horizontale et cartes d'information</div></div>`;
}

function mockupVisio() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="450" fill="#0F172A" rx="8"/>
    <rect x="20" y="20" width="560" height="360" rx="8" fill="#1E293B"/>
    <circle cx="300" cy="170" r="60" fill="#334155"/>
    <text x="300" y="260" font-family="system-ui" font-size="18" font-weight="600" fill="white" text-anchor="middle">Marie Dubois</text>
    <rect x="40" y="340" width="80" height="26" rx="4" fill="#000" opacity="0.6"/>
    <text x="80" y="358" font-family="system-ui" font-size="11" fill="white" text-anchor="middle">REC 12:34</text>
    <rect x="600" y="20" width="180" height="130" rx="8" fill="#1E293B"/>
    <circle cx="690" cy="75" r="24" fill="#17926B"/>
    <text x="690" y="82" font-family="system-ui" font-size="14" font-weight="700" fill="white" text-anchor="middle">Dr</text>
    <text x="690" y="130" font-family="system-ui" font-size="11" fill="white" text-anchor="middle">Vous (Dr Martin)</text>
    <rect x="600" y="170" width="180" height="210" rx="8" fill="#1E293B"/>
    <text x="620" y="196" font-family="system-ui" font-size="12" font-weight="700" fill="white">Notes rapides</text>
    <rect x="620" y="208" width="140" height="80" rx="4" fill="#0F172A"/>
    <text x="628" y="226" font-family="system-ui" font-size="10" fill="#94A3B8">Motif : fièvre depuis</text>
    <text x="628" y="242" font-family="system-ui" font-size="10" fill="#94A3B8">3 jours</text>
    ${[['Mic','#17926B'],['Cam','#17926B'],['Chat','#334155'],['Share','#334155'],['End','#EF4444']].map((p,i)=>`<circle cx="${260+i*60}" cy="415" r="20" fill="${p[1]}"/><text x="${260+i*60}" y="419" font-family="system-ui" font-size="9" font-weight="600" fill="white" text-anchor="middle">${p[0]}</text>`).join('')}
  </svg><div class="ui-mockup-caption">Téléconsultation en cours — Vue praticien avec vidéo patient, notes rapides et contrôles</div></div>`;
}

function mockupBooking() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="450" fill="#F6F8FA" rx="8"/>
    <rect x="40" y="40" width="720" height="50" rx="8" fill="white" stroke="#E2E6EC"/>
    <text x="60" y="70" font-family="system-ui" font-size="13" fill="#6B7B8D">Recherche : Médecin généraliste — Paris 15e</text>
    <rect x="40" y="110" width="350" height="300" rx="10" fill="white" stroke="#E2E6EC"/>
    <circle cx="90" cy="160" r="30" fill="#0D4A6B"/>
    <text x="90" y="167" font-family="system-ui" font-size="16" font-weight="700" fill="white" text-anchor="middle">JM</text>
    <text x="130" y="152" font-family="system-ui" font-size="14" font-weight="700" fill="#0D4A6B">Dr Jean Martin</text>
    <text x="130" y="170" font-family="system-ui" font-size="11" fill="#6B7B8D">Médecin généraliste</text>
    <text x="130" y="186" font-family="system-ui" font-size="10" fill="#17926B">Note 4.8 / 5 (247 avis)</text>
    <text x="60" y="220" font-family="system-ui" font-size="11" font-weight="600" fill="#0D4A6B">12 rue de la Santé, 75015 Paris</text>
    <text x="60" y="244" font-family="system-ui" font-size="11" fill="#6B7B8D">Conventionné secteur 1 — CB acceptée</text>
    <text x="60" y="276" font-family="system-ui" font-size="12" font-weight="700" fill="#0D4A6B">Motif de consultation</text>
    ${['Première consultation','Consultation de suivi','Téléconsultation','Renouvellement ordonnance'].map((m,i)=>`<rect x="60" y="${290+i*26}" width="310" height="22" rx="4" fill="${i===1?'#DDF3E9':'#F6F8FA'}"/><text x="72" y="${306+i*26}" font-family="system-ui" font-size="11" fill="${i===1?'#17926B':'#6B7B8D'}" font-weight="${i===1?'600':'400'}">${m}</text>`).join('')}
    <rect x="410" y="110" width="350" height="300" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="430" y="138" font-family="system-ui" font-size="14" font-weight="700" fill="#0D4A6B">Créneaux disponibles</text>
    <text x="430" y="160" font-family="system-ui" font-size="11" fill="#6B7B8D">Mercredi 16 avril</text>
    ${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${430+(i%4)*80}" y="${178+Math.floor(i/4)*40}" width="72" height="32" rx="6" fill="${i===2?'#17926B':'white'}" stroke="#17926B" stroke-width="1"/><text x="${466+(i%4)*80}" y="${198+Math.floor(i/4)*40}" font-family="system-ui" font-size="11" font-weight="600" fill="${i===2?'white':'#17926B'}" text-anchor="middle">${9+i}h${i%2?'30':'00'}</text>`).join('')}
    <rect x="430" y="360" width="320" height="36" rx="8" fill="#17926B"/>
    <text x="590" y="383" font-family="system-ui" font-size="13" font-weight="600" fill="white" text-anchor="middle">Confirmer — Mercredi 16 avril à 10h00</text>
  </svg><div class="ui-mockup-caption">Prise de rendez-vous — Sélection du motif et du créneau disponible</div></div>`;
}

function mockupParents() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="450" fill="#FDF8F4" rx="8"/>
    <rect x="0" y="0" width="800" height="64" fill="white" stroke="#E2E6EC"/>
    <rect x="24" y="18" width="28" height="28" rx="14" fill="#F59E0B"/>
    <text x="38" y="38" font-family="system-ui" font-size="14" font-weight="800" fill="white" text-anchor="middle">P</text>
    <text x="64" y="38" font-family="system-ui" font-size="14" font-weight="700" fill="#0D4A6B">MediSync Parents</text>
    <rect x="24" y="84" width="752" height="100" rx="12" fill="white" stroke="#E2E6EC"/>
    <circle cx="80" cy="134" r="32" fill="#FEE4C0"/>
    <text x="80" y="142" font-family="system-ui" font-size="22" text-anchor="middle">L</text>
    <text x="130" y="120" font-family="system-ui" font-size="18" font-weight="800" fill="#0D4A6B">Léa</text>
    <text x="130" y="142" font-family="system-ui" font-size="12" fill="#6B7B8D">Née le 12/06/2024 — 22 mois</text>
    <text x="130" y="160" font-family="system-ui" font-size="11" fill="#17926B">Prochain RDV pédiatre : 22 avril à 16h</text>
    ${[['Taille','82 cm','+50e'],['Poids','11,2 kg','+50e'],['PC','47 cm','+25e']].map(([l,v,p],i)=>`<rect x="${24+i*250}" y="200" width="232" height="100" rx="10" fill="white" stroke="#E2E6EC"/><text x="${44+i*250}" y="224" font-family="system-ui" font-size="11" fill="#6B7B8D">${l}</text><text x="${44+i*250}" y="260" font-family="system-ui" font-size="22" font-weight="800" fill="#0D4A6B">${v}</text><text x="${44+i*250}" y="284" font-family="system-ui" font-size="11" font-weight="600" fill="#17926B">Percentile ${p}</text>`).join('')}
    <rect x="24" y="316" width="370" height="118" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="44" y="342" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Vaccinations à jour</text>
    <text x="44" y="368" font-family="system-ui" font-size="11" fill="#6B7B8D">Prochain rappel : ROR — 24 mois</text>
    <rect x="44" y="388" width="100" height="30" rx="6" fill="#17926B"/>
    <text x="94" y="408" font-family="system-ui" font-size="11" font-weight="600" fill="white" text-anchor="middle">Carnet</text>
    <rect x="406" y="316" width="370" height="118" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="426" y="342" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Étape de développement</text>
    <text x="426" y="368" font-family="system-ui" font-size="11" fill="#6B7B8D">22 mois : associe 2-3 mots</text>
    <text x="426" y="386" font-family="system-ui" font-size="11" fill="#6B7B8D">marche assurée, monte les escaliers</text>
  </svg><div class="ui-mockup-caption">MediSync Parents — Suivi de l'enfant avec courbes de croissance et étapes du développement</div></div>`;
}

function mockupTelesec() {
  return `<div class="ui-mockup"><svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="450" fill="#F1F5F9" rx="8"/>
    <rect x="0" y="0" width="800" height="56" fill="#0D4A6B"/>
    <text x="24" y="35" font-family="system-ui" font-size="15" font-weight="700" fill="white">MediSync Télésecrétariats</text>
    <rect x="660" y="14" width="120" height="28" rx="14" fill="#17926B"/>
    <text x="720" y="32" font-family="system-ui" font-size="11" font-weight="600" fill="white" text-anchor="middle">En ligne</text>
    <rect x="20" y="76" width="260" height="354" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="40" y="100" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">File d'appels</text>
    ${[['Mme Bernard','Cab. Martin','En ligne','#EF4444',true],['M. Petit','Cab. Dupont','03:24','#F59E0B'],['Mlle Roy','Cab. Martin','01:12','#6B7B8D'],['M. Lopez','Cab. Bernard','00:45','#6B7B8D']].map(([n,c,t,col,act],i)=>`<rect x="32" y="${118+i*64}" width="236" height="56" rx="8" fill="${act?'#DDF3E9':'#F8FAFC'}"/><circle cx="56" cy="${146+i*64}" r="14" fill="${col}"/><text x="80" y="${140+i*64}" font-family="system-ui" font-size="12" font-weight="600" fill="#0D4A6B">${n}</text><text x="80" y="${156+i*64}" font-family="system-ui" font-size="10" fill="#6B7B8D">${c}</text><text x="240" y="${156+i*64}" font-family="system-ui" font-size="11" font-weight="600" fill="${col}" text-anchor="end">${t}</text>`).join('')}
    <rect x="296" y="76" width="484" height="354" rx="10" fill="white" stroke="#E2E6EC"/>
    <text x="316" y="100" font-family="system-ui" font-size="14" font-weight="700" fill="#0D4A6B">Appel en cours — Mme Bernard</text>
    <text x="316" y="120" font-family="system-ui" font-size="11" fill="#6B7B8D">Cabinet du Dr Martin — Médecin généraliste</text>
    <rect x="316" y="138" width="448" height="80" rx="8" fill="#FEF3C7"/>
    <text x="332" y="160" font-family="system-ui" font-size="11" font-weight="700" fill="#92400E">Consignes du cabinet</text>
    <text x="332" y="180" font-family="system-ui" font-size="11" fill="#92400E">Pas de RDV avant 10h. Urgences à orienter vers 15.</text>
    <text x="332" y="198" font-family="system-ui" font-size="11" fill="#92400E">Renouvellements : adresser à la secrétaire physique.</text>
    <text x="316" y="248" font-family="system-ui" font-size="13" font-weight="700" fill="#0D4A6B">Prendre un rendez-vous</text>
    ${['Patient existant','Nouveau patient','Téléconsultation'].map((l,i)=>`<rect x="${316+i*150}" y="262" width="140" height="34" rx="6" fill="${i===0?'#0D4A6B':'white'}" stroke="#0D4A6B"/><text x="${386+i*150}" y="284" font-family="system-ui" font-size="11" font-weight="600" fill="${i===0?'white':'#0D4A6B'}" text-anchor="middle">${l}</text>`).join('')}
    <rect x="316" y="312" width="448" height="100" rx="8" fill="#F8FAFC" stroke="#E2E6EC"/>
    <text x="332" y="334" font-family="system-ui" font-size="11" font-weight="700" fill="#0D4A6B">Notes de l'appel</text>
    <text x="332" y="356" font-family="system-ui" font-size="10" fill="#6B7B8D">Souhaite RDV consultation suivi diabète,</text>
    <text x="332" y="372" font-family="system-ui" font-size="10" fill="#6B7B8D">disponible jeudi/vendredi matin de préférence.</text>
  </svg><div class="ui-mockup-caption">MediSync Télésecrétariats — Console de prise d'appels avec file, consignes du cabinet et prise de RDV</div></div>`;
}

// ---- ARTICLE CONTENT ----
function getArticleContent(id) {
  const contents = {
    'create-account': `
      <h2 id="introduction">Introduction</h2>
      <p>Bienvenue sur MediSync Pro ! Ce guide vous accompagne pas à pas dans la création de votre compte praticien. MediSync Pro est votre plateforme de gestion médicale complète, conçue pour simplifier votre quotidien de professionnel de santé.</p>

      <div class="info-box tip">
        <span class="info-box-icon">💡</span>
        <div><strong>Bon à savoir</strong> : La création de compte est gratuite et ne prend que quelques minutes.</div>
      </div>

      <h2 id="prerequisites">Prérequis</h2>
      <p>Avant de commencer, assurez-vous de disposer des éléments suivants :</p>
      <ul>
        <li>Une adresse e-mail professionnelle valide</li>
        <li>Votre numéro RPPS (Répertoire Partagé des Professionnels de Santé)</li>
        <li>Les informations de votre cabinet (adresse, téléphone)</li>
        <li>Un navigateur web récent (Chrome, Firefox, Safari ou Edge)</li>
      </ul>

      <h2 id="steps">Étapes de création du compte</h2>
      <ol class="steps">
        <li class="step">
          <div class="step-content">
            <h4>Accédez à la page d'inscription</h4>
            <p>Rendez-vous sur la page de connexion de MediSync Pro. Cliquez sur le bouton <strong>« Créer un compte »</strong> situé sous le formulaire de connexion.</p>
          </div>
        </li>
        <li class="step">
          <div class="step-content">
            <h4>Renseignez vos informations</h4>
            <p>Complétez le formulaire d'inscription avec votre nom, prénom, spécialité médicale, adresse e-mail et mot de passe. Choisissez un mot de passe robuste d'au moins 8 caractères.</p>
          </div>
        </li>
        <li class="step">
          <div class="step-content">
            <h4>Vérifiez votre identité</h4>
            <p>Saisissez votre numéro RPPS pour vérifier votre identité en tant que professionnel de santé. Cette étape garantit la sécurité de la plateforme.</p>
          </div>
        </li>
        <li class="step">
          <div class="step-content">
            <h4>Confirmez votre e-mail</h4>
            <p>Un e-mail de confirmation vous est envoyé. Cliquez sur le lien de validation pour activer votre compte.</p>
          </div>
        </li>
      </ol>

      <div class="info-box important">
        <span class="info-box-icon">ℹ️</span>
        <div><strong>Sécurité</strong> : Vos données sont protégées conformément au RGPD et aux normes de sécurité des données de santé (HDS). Toutes les communications sont chiffrées.</div>
      </div>

      <h2 id="next-steps">Étapes suivantes</h2>
      <p>Une fois votre compte créé, vous serez guidé pour :</p>
      <ul>
        <li>Compléter votre profil praticien</li>
        <li>Configurer votre cabinet et vos lieux de consultation</li>
        <li>Définir vos horaires de disponibilité</li>
        <li>Créer vos motifs de consultation</li>
      </ul>
    `,
    'first-login': `
      <h2 id="connexion">Se connecter</h2>
      <p>Accédez à MediSync Pro via votre navigateur web. La page de connexion vous permet de saisir vos identifiants (e-mail et mot de passe) définis lors de la création de votre compte.</p>

      <h2 id="page-connexion">La page de connexion</h2>
      <p>La page de connexion de MediSync Pro présente un formulaire épuré et sécurisé. Vous y trouverez :</p>
      <ul>
        <li><strong>Champ e-mail</strong> : Saisissez l'adresse e-mail associée à votre compte</li>
        <li><strong>Champ mot de passe</strong> : Entrez votre mot de passe</li>
        <li><strong>Bouton « Se connecter »</strong> : Lance la connexion à votre espace</li>
        <li><strong>Lien « Mot de passe oublié ? »</strong> : Pour réinitialiser votre mot de passe si nécessaire</li>
      </ul>

      <div class="info-box tip">
        <span class="info-box-icon">💡</span>
        <div><strong>Astuce</strong> : Cochez la case « Se souvenir de moi » pour rester connecté sur votre appareil personnel. Évitez cette option sur un poste partagé.</div>
      </div>

      <h2 id="first-steps">Premiers pas après connexion</h2>
      <p>Après votre première connexion, MediSync Pro vous accueille sur le <strong>Planning</strong> (agenda). La barre de navigation latérale à gauche vous donne accès à toutes les sections de l'application.</p>
    `,
    'discover-interface': `
      <h2 id="overview">Vue d'ensemble de l'interface</h2>
      <p>L'interface de MediSync Pro est conçue pour être intuitive et efficace. Elle se compose de plusieurs zones principales qui vous permettent d'accéder rapidement à toutes les fonctionnalités.</p>

      <h2 id="sidebar">La barre de navigation latérale</h2>
      <p>Située à gauche de l'écran, la barre de navigation compacte (72px) vous donne accès aux modules principaux :</p>
      <ul>
        <li><strong>Planning</strong> — Votre agenda et vos rendez-vous</li>
        <li><strong>Notes</strong> — Vos notes cliniques et mémos</li>
        <li><strong>Tâches</strong> — Votre gestionnaire de tâches</li>
        <li><strong>Patients</strong> — La liste et les dossiers patients</li>
        <li><strong>Messagerie</strong> — Communication sécurisée</li>
        <li><strong>Visio</strong> — Téléconsultation vidéo</li>
        <li><strong>Activité</strong> — Tableaux de bord et statistiques</li>
      </ul>
      <p>En bas de la barre, vous trouverez l'accès aux <strong>Paramètres</strong>, à l'<strong>Aide</strong> et à votre <strong>profil utilisateur</strong>.</p>

      <h2 id="zones">Les zones de l'interface</h2>
      <p>Chaque page de MediSync Pro est organisée de manière cohérente :</p>
      <ul>
        <li><strong>En-tête de page</strong> : Titre de la section, barre de recherche contextuelle et actions principales</li>
        <li><strong>Zone de contenu principal</strong> : L'espace de travail central adapté à chaque module</li>
        <li><strong>Panneaux latéraux</strong> : Informations complémentaires et actions rapides (selon la page)</li>
      </ul>

      <div class="info-box tip">
        <span class="info-box-icon">💡</span>
        <div><strong>Design System</strong> : MediSync Pro utilise un code couleur cohérent. Les éléments en <strong style="color:#17926B">teal/vert</strong> sont des actions principales. Les badges <strong style="color:#F59E0B">orange</strong> indiquent des notifications.</div>
      </div>
    `,
    'setup-profile': `
      <h2 id="acces">Accéder à votre profil</h2>
      <p>Pour configurer votre profil praticien, cliquez sur votre avatar en bas de la barre de navigation latérale, ou accédez à <strong>Paramètres → Mon Compte</strong>.</p>

      <h2 id="informations">Informations du profil</h2>
      <p>Votre profil praticien comprend les informations suivantes :</p>
      <ul>
        <li><strong>Identité</strong> : Titre (Dr, Pr...), prénom, nom</li>
        <li><strong>Spécialité</strong> : Votre spécialité médicale principale</li>
        <li><strong>Contact</strong> : Téléphone professionnel, e-mail</li>
        <li><strong>Numéro RPPS</strong> : Votre identifiant professionnel</li>
        <li><strong>Photo de profil</strong> : Visible par vos patients lors des téléconsultations</li>
      </ul>

      <h2 id="signature">Signature électronique</h2>
      <p>Configurez votre signature électronique dans <strong>Paramètres → Ma Signature</strong>. Cette signature sera apposée automatiquement sur les documents que vous générez (ordonnances, certificats, courriers).</p>
    `,
  };

  Object.assign(contents, getExtendedContent());
  if (!contents[id]) return defaultArticleContent(id);
  return contents[id];
}

function defaultArticleContent(id) {
  return `
    <h2 id="introduction">Introduction</h2>
    <p>Cet article fait partie de la documentation de MediSync. Il décrit une fonctionnalité spécifique de la plateforme, avec les étapes, les options disponibles et les bonnes pratiques associées.</p>
    <div class="info-box tip"><span class="info-box-icon">💡</span><div><strong>Astuce</strong> : utilisez la barre de recherche en haut de page pour trouver rapidement le sujet qui vous intéresse. Consultez également les articles connexes affichés dans la colonne de droite.</div></div>
    <h2 id="acceder">Accéder à la fonctionnalité</h2>
    <p>Depuis la barre de navigation latérale, sélectionnez la section correspondante. L'interface s'ouvre sur la vue principale, avec un en-tête indiquant le titre de la section, une barre de recherche contextuelle et les actions principales regroupées dans le coin supérieur droit.</p>
    <h2 id="utilisation">Utilisation</h2>
    <p>Chaque page de MediSync suit la même logique : une zone de contenu central, des panneaux latéraux d'informations contextuelles, et des actions principales mises en évidence par la couleur <strong style="color:#17926B">teal</strong>.</p>
    <h2 id="aide">Besoin d'aide ?</h2>
    <p>Si vous rencontrez un problème, contactez le support via la messagerie intégrée ou consultez les articles connexes ci-contre.</p>
  `;
}

var _EXT_CACHE = null;
function getExtendedContent() {
  if (_EXT_CACHE) return _EXT_CACHE;
  _EXT_CACHE = {
  'setup-cabinet': `
    <h2 id="intro">Paramétrer votre cabinet</h2>
    <p>La configuration du cabinet est une étape fondamentale qui détermine comment vos patients vous trouvent, réservent et interagissent avec vous. Tout se passe dans <strong>Paramètres → Cabinet &amp; Organisation</strong>.</p>
    ${mockupProDashboard()}
    <h2 id="coordonnees">Coordonnées et identité</h2>
    <p>Renseignez le <strong>nom du cabinet</strong>, l'<strong>adresse complète</strong>, le <strong>téléphone principal</strong> et l'<strong>e-mail de contact</strong>. Ces informations apparaissent sur vos ordonnances, factures et dans la fiche publique de réservation.</p>
    <h2 id="lieux">Lieux de consultation</h2>
    <p>Ajoutez chaque lieu où vous exercez (cabinet principal, cabinet secondaire, visite à domicile, téléconsultation). Pour chaque lieu, définissez l'adresse, les équipements disponibles et les motifs autorisés.</p>
    <h2 id="horaires">Horaires d'ouverture</h2>
    <p>Définissez les plages horaires de consultation pour chaque jour de la semaine. Vous pouvez gérer des pauses déjeuner, des demi-journées et des horaires différents selon le lieu.</p>
  `,
  'sidebar-nav': `
    <h2 id="presentation">Présentation</h2>
    <p>La barre latérale gauche de MediSync Pro (largeur 72 px) est toujours visible. Elle contient les icônes des sept modules principaux, ainsi que l'accès aux paramètres, à l'aide et à votre profil.</p>
    ${mockupProDashboard()}
    <h2 id="modules">Les 7 modules principaux</h2>
    <ul><li><strong>Planning</strong> — Agenda du jour/semaine/mois</li><li><strong>Notes</strong> — Bloc-notes cliniques</li><li><strong>Tâches</strong> — To-do list avec priorités</li><li><strong>Patients</strong> — Liste et dossiers complets</li><li><strong>Messagerie</strong> — Communication sécurisée</li><li><strong>Visio</strong> — Téléconsultations</li><li><strong>Activité</strong> — Statistiques et CA</li></ul>
    <h2 id="badges">Badges de notification</h2>
    <p>Certaines icônes affichent un <strong>badge numérique orange</strong> indiquant le nombre d'éléments non lus ou en attente.</p>
  `,
  'header-search': `
    <h2 id="global">La recherche globale</h2>
    <p>La barre de recherche en haut de page permet de trouver instantanément patients, rendez-vous, documents, notes ou paramètres. Raccourci : <kbd>Ctrl</kbd>+<kbd>K</kbd>.</p>
    <h2 id="filtres">Filtres</h2>
    <p>Les résultats sont groupés par catégorie — <em>Patients</em>, <em>RDV</em>, <em>Documents</em>, <em>Messages</em>, <em>Notes</em>.</p>
  `,
  'keyboard-shortcuts': `
    <h2 id="globaux">Raccourcis globaux</h2>
    <ul><li><kbd>Ctrl</kbd>+<kbd>K</kbd> — Recherche globale</li><li><kbd>Ctrl</kbd>+<kbd>N</kbd> — Nouveau rendez-vous</li><li><kbd>Ctrl</kbd>+<kbd>P</kbd> — Nouveau patient</li><li><kbd>Ctrl</kbd>+<kbd>M</kbd> — Nouveau message</li></ul>
    <h2 id="agenda">Dans l'agenda</h2>
    <ul><li><kbd>J</kbd> / <kbd>S</kbd> / <kbd>M</kbd> — Vues jour / semaine / mois</li><li><kbd>T</kbd> — Aujourd'hui</li><li><kbd>←</kbd> / <kbd>→</kbd> — Navigation</li></ul>
  `,
  'agenda-overview': `
    <h2 id="intro">L'agenda MediSync Pro</h2>
    <p>L'agenda est le cœur de votre activité. Il affiche vos rendez-vous sur la période de votre choix (jour, semaine, mois) avec un code couleur par type de consultation.</p>
    ${mockupProDashboard()}
    <h2 id="zones">Zones de l'écran</h2>
    <p>En-tête avec titre « Planning », navigation de période, sélecteur de vue (Jour/Semaine/Mois) et bouton <strong>+ Créer un RDV</strong> en vert. Sous l'en-tête, 4 cartes statistiques en temps réel.</p>
    <h2 id="legende">Légende des couleurs</h2>
    <ul><li><strong style="color:#17926B">Vert</strong> — Consultation confirmée</li><li><strong style="color:#0D4A6B">Bleu</strong> — Téléconsultation</li><li><strong style="color:#F59E0B">Orange</strong> — À confirmer</li><li><strong style="color:#EF4444">Rouge</strong> — Urgence</li><li><strong style="color:#6B7B8D">Gris</strong> — Indisponibilité</li></ul>
  `,
  'day-view': `<h2 id="intro">Vue journalière</h2><p>Colonne verticale 7h-21h. Clic sur créneau vide = création de RDV. Clic sur RDV = détail. Glisser-déposer pour déplacer. Étirer les bords pour modifier la durée.</p>`,
  'week-view': `<h2 id="intro">Vue hebdomadaire</h2><p>7 colonnes lundi-dimanche. Vue par défaut. Mode multi-praticiens pour voir côte à côte les plannings des confrères.</p>`,
  'month-view': `<h2 id="intro">Vue mensuelle</h2><p>Grille mensuelle avec nombre de RDV par jour et barre de remplissage (% de créneaux occupés). Jours fériés/vacances grisés.</p>`,
  'create-appointment': `
    <h2 id="intro">Créer un rendez-vous</h2>
    ${mockupProDashboard()}
    <ol class="steps">
      <li class="step"><div class="step-content"><h4>Sélectionner le patient</h4><p>Recherche par nom ou création d'une nouvelle fiche.</p></div></li>
      <li class="step"><div class="step-content"><h4>Choisir le motif</h4><p>Durée et couleur s'appliquent automatiquement.</p></div></li>
      <li class="step"><div class="step-content"><h4>Date et heure</h4><p>Créneau cliqué prérempli.</p></div></li>
      <li class="step"><div class="step-content"><h4>Lieu et type</h4><p>Cabinet, téléconsultation, domicile.</p></div></li>
      <li class="step"><div class="step-content"><h4>Enregistrer</h4><p>Confirmation SMS/email automatique au patient.</p></div></li>
    </ol>
  `,
  'modify-appointment': `<h2 id="intro">Modifier un rendez-vous</h2><p>Cliquez sur le RDV puis <strong>Modifier</strong>, ou glissez-déposez pour changer date/heure. Patient notifié automatiquement.</p>`,
  'cancel-appointment': `<h2 id="intro">Annuler un rendez-vous</h2><p>Ouvrez le RDV, cliquez <strong>Annuler</strong>, choisissez un motif. L'annulation est tracée dans le journal de sécurité.</p>`,
  'appointment-types': `<h2 id="types">Types de rendez-vous</h2><ul><li>Consultation standard</li><li>Consultation de suivi</li><li>Première consultation (durée longue)</li><li>Téléconsultation</li><li>Visite à domicile</li><li>Urgence</li><li>Acte technique (ECG, frottis...)</li></ul>`,
  'appointment-status': `<h2 id="statuts">Statuts d'un RDV</h2><ul><li>Programmé</li><li>Confirmé</li><li>Patient arrivé</li><li>En cours</li><li>Terminé</li><li>Annulé</li><li>Absent</li></ul>`,
  'manage-slots': `<h2 id="intro">Gérer les créneaux</h2><p>Dans <strong>Paramètres → Agendas</strong>, définissez pour chaque lieu et motif les plages horaires disponibles. Cochez celles ouvertes à la réservation en ligne.</p>`,
  'unavailable-slots': `<h2 id="intro">Indisponibilités</h2><p>Cliquez-glissez sur un créneau vide et choisissez <strong>Indisponibilité</strong>. Règles récurrentes possibles pour pauses quotidiennes.</p>`,
  'recurring-schedule': `<h2 id="intro">Horaires récurrents</h2><p>Modèles d'horaires appliqués automatiquement chaque semaine. Exemple : lundi-vendredi 9h-12h30 / 14h-18h.</p>`,
  'patient-list-overview': `
    <h2 id="intro">La liste des patients</h2>
    <p>Dans <strong>Patients</strong>, retrouvez tous les dossiers sous forme de liste ou cartes. Chaque ligne : photo, nom, âge, dernière consultation, prochain RDV.</p>
    ${mockupPatientDossier()}
    <h2 id="tri">Tri et filtres</h2>
    <ul><li>Tri alphabétique, par date, par âge</li><li>Filtres par tranche d'âge, sexe, médecin traitant, statut</li></ul>
  `,
  'search-patient': `<h2 id="intro">Rechercher un patient</h2><p>Barre de recherche en haut de la liste. Trouvez par nom, prénom, date de naissance, numéro SS ou téléphone.</p>`,
  'create-patient': `
    <h2 id="intro">Créer un dossier patient</h2>
    <ol class="steps">
      <li class="step"><div class="step-content"><h4>Identité</h4><p>Nom de naissance, nom d'usage, prénoms, date, sexe, n° SS. Identitovigilance automatique.</p></div></li>
      <li class="step"><div class="step-content"><h4>Coordonnées</h4><p>Adresse, téléphones, e-mail, personne de confiance.</p></div></li>
      <li class="step"><div class="step-content"><h4>Couverture santé</h4><p>Régime, CMU, mutuelle, tiers payant.</p></div></li>
    </ol>
  `,
  'patient-home': `
    <h2 id="intro">Accueil du dossier</h2>
    <p>Synthèse visuelle : identité, photo, alertes médicales (allergies, antécédents), prochains RDV, dernières consultations.</p>
    ${mockupPatientDossier()}
    <h2 id="alertes">Alertes critiques</h2>
    <p>Allergies graves, contre-indications et pathologies chroniques apparaissent en <strong style="color:#EF4444">rouge</strong> en haut.</p>
  `,
  'patient-consultation': `<h2 id="intro">Onglet Consultation</h2><p>Écran principal pour la consultation : observations, prescriptions, ordonnance en temps réel, examen clinique structuré. Modèles SOAP et spécialisés disponibles.</p>`,
  'patient-infos': `<h2 id="intro">Informations administratives</h2><p>Coordonnées, couverture santé, personne de confiance, médecin traitant, employeur. Tout modifiable à tout moment.</p>`,
  'patient-antecedents': `<h2 id="intro">Antécédents médicaux</h2><p>Catégories : <strong>Personnels médicaux</strong>, <strong>Chirurgicaux</strong>, <strong>Gynéco-obstétricaux</strong>, <strong>Familiaux</strong>, <strong>Allergies</strong>, <strong>Habitus</strong> (tabac, alcool, sport).</p>`,
  'patient-observations': `<h2 id="intro">Observations cliniques</h2><p>Toutes les observations datées. Texte libre, schémas, photos. Structuration SOAP (Subjectif/Objectif/Analyse/Plan) possible.</p>`,
  'patient-treatments': `<h2 id="intro">Traitements en cours</h2><p>Liste active avec posologie et durée. Renouvellement en un clic. Détection automatique d'interactions médicamenteuses.</p>`,
  'patient-biologie': `<h2 id="intro">Résultats biologiques</h2><p>Import de PDF laboratoire ou saisie manuelle. Représentation graphique des valeurs dans le temps.</p>`,
  'patient-vaccination': `<h2 id="intro">Carnet de vaccination</h2><p>Vaccinations avec date, lot, lieu. Rappels calculés automatiquement selon le calendrier en vigueur.</p>`,
  'patient-documents': `<h2 id="intro">Documents du patient</h2><p>Ordonnances, certificats, courriers, CR hospitaliers, imagerie. Téléversement par glisser-déposer ou scan direct.</p>`,
  'patient-history': `<h2 id="intro">Historique</h2><p>Liste chronologique des consultations passées avec recherche textuelle. Duplication d'une ancienne consultation possible.</p>`,
  'patient-invoices': `<h2 id="intro">Facturation patient</h2><p>Historique des factures : montant, statut (payé, en attente), mode de règlement. Duplicata et relances.</p>`,
  'teleconsult-config': `
    <h2 id="intro">Configurer la téléconsultation</h2>
    ${mockupVisio()}
    <p>Dans <strong>Administration → Téléconsultation</strong>, activez le service, configurez la salle d'attente virtuelle et les tarifs. Marquez les motifs éligibles visio.</p>
  `,
  'teleconsult-requirements': `<h2 id="intro">Prérequis</h2><ul><li>Navigateur récent (Chrome, Firefox, Safari, Edge)</li><li>Connexion stable (2 Mbps+)</li><li>Webcam HD et micro</li><li>Permissions autorisées</li></ul><p>Aucune installation logicielle — tout se passe dans le navigateur (WebRTC).</p>`,
  'start-teleconsult': `
    <h2 id="intro">Lancer une téléconsultation</h2>
    <ol class="steps">
      <li class="step"><div class="step-content"><h4>Depuis l'agenda</h4><p>Bouton <strong>Démarrer la visio</strong> actif 10 min avant.</p></div></li>
      <li class="step"><div class="step-content"><h4>Autoriser caméra/micro</h4></div></li>
      <li class="step"><div class="step-content"><h4>Admettre le patient</h4><p>Depuis la salle d'attente virtuelle.</p></div></li>
      <li class="step"><div class="step-content"><h4>Consultation</h4><p>Notes en panneau latéral.</p></div></li>
    </ol>
  `,
  'waiting-room': `<h2 id="intro">Salle d'attente virtuelle</h2><p>Patients dans une salle sécurisée. Vous admettez les patients l'un après l'autre.</p>`,
  'video-features': `<h2 id="intro">Fonctionnalités visio</h2>${mockupVisio()}<ul><li>Couper/activer micro &amp; caméra</li><li>Partage d'écran</li><li>Chat écrit</li><li>Flou d'arrière-plan</li><li>Notes rapides</li></ul>`,
  'end-teleconsult': `<h2 id="intro">Terminer la consultation</h2><p>Cliquez <strong>Raccrocher</strong>. La consultation est enregistrée avec durée, notes et facturation immédiate.</p>`,
  'messaging-overview': `<h2 id="intro">Messagerie</h2><p>Messagerie de santé sécurisée et chiffrée, conforme MSSanté. Échanges avec patients et confrères.</p>`,
  'send-message': `<h2 id="intro">Envoyer un message</h2><ol class="steps"><li class="step"><div class="step-content"><h4>+ Nouveau message</h4></div></li><li class="step"><div class="step-content"><h4>Destinataire</h4></div></li><li class="step"><div class="step-content"><h4>Sujet + contenu + pièces jointes</h4></div></li><li class="step"><div class="step-content"><h4>Envoyer (chiffrement E2E)</h4></div></li></ol>`,
  'manage-conversations': `<h2 id="intro">Gérer les conversations</h2><p>Tri par <em>Non lus</em>, <em>Favoris</em>, <em>Archivés</em>. Affectation à un membre de l'équipe.</p>`,
  'messaging-notifications': `<h2 id="intro">Notifications</h2><p>Paramètres → Messagerie : e-mail, SMS, intervalle de rappel.</p>`,
  'create-note': `<h2 id="intro">Créer une note</h2><p>Consignez pense-bêtes, consignes d'équipe, observations internes. Catégories avec code couleur.</p>`,
  'note-templates': `<h2 id="intro">Modèles de notes</h2><p>Modèles réutilisables : comptes-rendus types, consignes récurrentes, checklists.</p>`,
  'task-management': `<h2 id="intro">Gérer les tâches</h2><p>Rappeler un patient, commander du matériel, envoyer un courrier. Titre, échéance, priorité, responsable. Tâches en retard en rouge.</p>`,
  'task-priorities': `<h2 id="priorites">Priorités</h2><ul><li><strong>Urgent</strong></li><li><strong>Élevé</strong></li><li><strong>Normal</strong></li><li><strong>Faible</strong></li></ul>`,
  'activity-dashboard': `<h2 id="intro">Tableau de bord</h2><p>Nombre de consultations, CA, patients actifs, taux de remplissage, évolutions. Widgets personnalisables.</p>`,
  'consultation-stats': `<h2 id="intro">Statistiques de consultation</h2><p>Total, durée moyenne, répartition par motif, par jour, par tranche horaire.</p>`,
  'revenue-tracking': `<h2 id="intro">Suivi du CA</h2><p>CA brut/net, répartition par acte, évolution mensuelle/annuelle. Export Excel et PDF pour votre comptable.</p>`,
  'user-accounts': `<h2 id="intro">Comptes utilisateurs</h2><p>Gérez praticiens, secrétaires, remplaçants.</p><h2 id="roles">Rôles</h2><ul><li><strong>Administrateur</strong></li><li><strong>Praticien</strong></li><li><strong>Secrétaire</strong></li><li><strong>Remplaçant</strong></li></ul>`,
  'substitutes': `<h2 id="intro">Remplaçants</h2><p>Invitez un remplaçant, définissez dates et droits. Accès temporaire au cabinet.</p>`,
  'agenda-settings': `<h2 id="intro">Paramètres des agendas</h2><p>Par praticien : amplitude horaire, durée par défaut des RDV, pauses, jours fériés, identitovigilance.</p>`,
  'locations': `<h2 id="intro">Lieux de consultation</h2><p>Adresse complète, horaires, équipements, parking, accès PMR.</p>`,
  'visibility': `<h2 id="intro">Visibilité en ligne</h2>${mockupBooking()}<p>Contrôlez votre présence sur MediSync Patient : visibilité, ouverture de la prise de RDV, motifs autorisés.</p>`,
  'consultation-motifs': `<h2 id="intro">Motifs de consultation</h2><p>Liste proposée aux patients : nom, durée, couleur, lieu, tarif, questions préalables.</p><h2 id="exemples">Exemples</h2><ul><li>Première consultation (30 min)</li><li>Consultation de suivi (15 min)</li><li>Téléconsultation (20 min)</li><li>Renouvellement (10 min)</li></ul>`,
  'motif-categories': `<h2 id="intro">Catégories</h2><p>Regroupez vos motifs (Médecine générale, Pédiatrie, Gynécologie) pour une meilleure navigation patient.</p>`,
  'internal-instructions': `<h2 id="intro">Instructions internes</h2><p>Visibles par votre équipe uniquement : « préparer l'ECG », « vérifier la carte Vitale »...</p>`,
  'patient-instructions': `<h2 id="intro">Consignes patients</h2><p>Envoyées automatiquement à la réservation : « venir à jeun », « apporter derniers résultats », « arriver 10 min en avance ».</p>`,
  'rdv-questions': `<h2 id="intro">Questions pré-RDV</h2><p>Posées au patient lors de la réservation pour préparer la consultation : symptômes, durée, traitements en cours.</p>`,
  'rdv-documents': `<h2 id="intro">Documents liés aux RDV</h2><p>Formulaires, consignes, CGU envoyés ou demandés automatiquement selon le motif.</p>`,
  'my-account': `<h2 id="intro">Mon compte</h2><p>Identité, coordonnées, langue, fuseau, avatar.</p>`,
  'privacy-center': `<h2 id="intro">Centre de confidentialité</h2><p>Consentements RGPD, téléchargement de données, suppression d'informations.</p>`,
  'security-log': `<h2 id="intro">Journal de sécurité</h2><p>Historique des connexions, actions sensibles, changements de mot de passe. Export PDF pour audit.</p>`,
  'signature': `<h2 id="intro">Ma signature</h2><p>Signature électronique apposée sur ordonnances, certificats, courriers. Téléversement d'image ou dessin à la souris.</p>`,

  // ===== PATIENT =====
  'p-create-account': `
    <h2 id="intro">Créer votre compte patient</h2>
    <p>Bienvenue sur MediSync Patient. Votre espace santé en ligne vous permet de prendre rendez-vous, réaliser des téléconsultations et accéder à votre dossier médical.</p>
    ${mockupPatientApp()}
    <ol class="steps">
      <li class="step"><div class="step-content"><h4>Page d'inscription</h4><p>Cliquez sur « Créer un compte ».</p></div></li>
      <li class="step"><div class="step-content"><h4>Informations</h4><p>Nom, prénom, date de naissance, e-mail, téléphone, mot de passe.</p></div></li>
      <li class="step"><div class="step-content"><h4>Validation e-mail</h4><p>Lien reçu par e-mail.</p></div></li>
      <li class="step"><div class="step-content"><h4>2FA (recommandé)</h4><p>Code par SMS ou application.</p></div></li>
    </ol>
  `,
  'p-login': `<h2 id="intro">Se connecter</h2><p>Accédez à MediSync Patient via navigateur ou application mobile. E-mail + mot de passe. Mot de passe oublié : lien de réinitialisation par e-mail.</p>`,
  'p-profile': `<h2 id="intro">Compléter votre profil</h2><p>N° de sécurité sociale, mutuelle, médecin traitant, personne de confiance, allergies. Un profil complet améliore votre suivi.</p>`,
  'p-ayants-droit': `<h2 id="intro">Ayants droit</h2><p>Gérez enfants et proches depuis un compte unique. <strong>Mon compte → Ayants droit</strong> → <em>+ Ajouter</em>. Identité, lien de parenté, consentement.</p>`,
  'p-interface': `
    <h2 id="intro">Interface</h2>
    ${mockupPatientApp()}
    <h2 id="nav">Navigation horizontale</h2>
    <p>Accueil, Médecins, Rendez-vous, Dossier médical, Messages, Favoris, Établissements, Notifications.</p>
    <h2 id="accueil">Éléments de l'accueil</h2>
    <ul><li>Message personnalisé avec date</li><li>Bouton <strong>Prendre RDV</strong> vert</li><li>4 cartes (À venir, Messages, Notifications, Aujourd'hui)</li><li>Prochain RDV</li><li>Téléconsultations</li><li>Suivi de santé</li></ul>
  `,
  'p-home-overview': `<h2 id="intro">Accueil</h2><p>Vue d'ensemble : prochains RDV, messages, notifications, suivi de santé.</p>${mockupPatientApp()}`,
  'p-stats-cards': `<h2 id="intro">Les 4 cartes</h2><ul><li><strong>À venir</strong> — RDV à venir</li><li><strong>Messages</strong> — messages non lus</li><li><strong>Notifications</strong> — nouvelles notifications</li><li><strong>Aujourd'hui</strong> — RDV du jour</li></ul><p>Clic = accès direct à la section.</p>`,
  'p-prochain-rdv': `<h2 id="intro">Prochain rendez-vous</h2><p>Praticien, date, heure, lieu, motif. Actions : <strong>calendrier</strong>, <strong>itinéraire</strong>, <strong>annuler</strong>. État vide : bouton <strong>Trouver un médecin</strong>.</p>`,
  'p-teleconsult-home': `<h2 id="intro">Téléconsultations</h2><p>Téléconsultations programmées. Bouton <strong>Rejoindre</strong> actif 10 min avant.</p>`,
  'p-suivi-sante': `<h2 id="intro">Suivi de santé</h2><p>Lien vers le dossier médical : antécédents, traitements, vaccins, résultats, documents.</p>`,
  'p-search-doctor': `
    <h2 id="intro">Rechercher un médecin</h2>
    ${mockupBooking()}
    <h2 id="criteres">Critères</h2>
    <ul><li>Nom</li><li>Spécialité</li><li>Ville / code postal</li><li>Type de consultation</li><li>Disponibilité</li><li>Secteur conventionnel</li></ul>
  `,
  'p-doctor-profile': `<h2 id="intro">Profil d'un médecin</h2><p>Photo, spécialité, diplômes, expérience, langues, lieux, tarifs, moyens de paiement, avis patients, créneaux.</p>`,
  'p-book-rdv': `
    <h2 id="intro">Prendre rendez-vous</h2>
    ${mockupBooking()}
    <ol class="steps">
      <li class="step"><div class="step-content"><h4>Médecin</h4></div></li>
      <li class="step"><div class="step-content"><h4>Motif</h4></div></li>
      <li class="step"><div class="step-content"><h4>Lieu (si plusieurs)</h4></div></li>
      <li class="step"><div class="step-content"><h4>Créneau</h4></div></li>
      <li class="step"><div class="step-content"><h4>Questions préalables</h4></div></li>
      <li class="step"><div class="step-content"><h4>Confirmer</h4></div></li>
    </ol>
  `,
  'p-motif-choice': `<h2 id="intro">Choisir un motif</h2><p>Chaque médecin propose sa liste. Motifs restreints (patients existants) parfois indisponibles.</p>`,
  'p-slot-choice': `<h2 id="intro">Choisir un créneau</h2><p>Créneaux verts disponibles. Flèches pour changer de jour. Jours sans créneaux grisés.</p>`,
  'p-confirm-rdv': `<h2 id="intro">Confirmation</h2><p>Page récapitulative (médecin, motif, lieu, date, tarif estimé) → <strong>Confirmer</strong>. E-mail et SMS de confirmation.</p>`,
  'p-list-rdv': `<h2 id="intro">Mes rendez-vous</h2><p>Onglets <strong>À venir</strong> et <strong>Passés</strong>. Date, heure, médecin, motif, lieu, statut.</p>`,
  'p-rdv-detail': `<h2 id="intro">Détail d'un RDV</h2><p>Consignes praticien, questions préalables, documents à apporter, itinéraire, actions (modifier/annuler/calendrier).</p>`,
  'p-modify-rdv': `<h2 id="intro">Modifier</h2><p>Bouton <strong>Déplacer</strong> → nouveau créneau chez le même praticien.</p>`,
  'p-cancel-rdv': `<h2 id="intro">Annuler</h2><p>Bouton <strong>Annuler</strong>. Certains cabinets demandent 24h de préavis.</p>`,
  'p-rappels': `<h2 id="intro">Rappels</h2><p>Paramètres Notifications : rappel 24h avant, rappel 2h avant, confirmation de présence.</p>`,
  'p-teleconsult-prep': `<h2 id="intro">Préparer votre téléconsultation</h2><ul><li>Endroit calme</li><li>Connexion internet stable</li><li>Caméra et micro fonctionnels</li><li>Pièce d'identité</li><li>Questions préparées</li></ul>`,
  'p-join-visio': `<h2 id="intro">Rejoindre la salle d'attente</h2>${mockupVisio()}<p>10 min avant : bouton <strong>Rejoindre</strong>. Autoriser caméra et micro. Attendre l'admission.</p>`,
  'p-visio-features': `<h2 id="intro">Pendant la consultation</h2><p>Couper micro, partager écran, chat. L'ordonnance vous arrive directement dans votre espace en fin de consultation.</p>`,
  'p-visio-issues': `<h2 id="intro">Problèmes techniques</h2><ul><li>Pas de son : vérifier autorisation micro</li><li>Vidéo figée : rafraîchir</li><li>Déconnexion : cliquer à nouveau sur Rejoindre</li></ul>`,
  'p-dossier-overview': `<h2 id="intro">Dossier médical</h2><p>Centralise toutes vos données : antécédents, traitements, vaccins, résultats, documents.</p>`,
  'p-mes-traitements': `<h2 id="intro">Traitements en cours</h2><p>Médicaments, posologie, durée. Rappels de prise. Renouvellement en un clic auprès du médecin traitant.</p>`,
  'p-mes-antecedents': `<h2 id="intro">Antécédents</h2><p>Historique médical accessible (avec votre accord) à tous les médecins que vous consultez.</p>`,
  'p-mes-vaccins': `<h2 id="intro">Vaccinations</h2><p>Historique, rappels à prévoir, alertes de retard.</p>`,
  'p-mes-documents': `<h2 id="intro">Documents</h2><p>Ordonnances, certificats, comptes-rendus, résultats. Téléchargement PDF, partage avec un autre médecin.</p>`,
  'p-mes-resultats': `<h2 id="intro">Résultats</h2><p>Résultats biologiques et d'imagerie envoyés par votre médecin, avec graphiques d'évolution.</p>`,
  'p-messages-overview': `<h2 id="intro">Messagerie patient</h2><p>Échanges sécurisés avec vos médecins après consultation. Chiffrement E2E. Pièces jointes possibles.</p>`,
  'p-new-message': `<h2 id="intro">Nouveau message</h2><p><strong>+ Nouveau message</strong>. Choisir le médecin (parmi consultations récentes). Rédiger, envoyer. Réponse sous 48h ouvrées en général.</p>`,
  'p-attach-docs': `<h2 id="intro">Pièces jointes</h2><p>Photos, résultats PDF, scans. Max 20 Mo par pièce.</p>`,
  'p-favorites': `<h2 id="intro">Médecins favoris</h2><p>Marquez vos médecins habituels pour les retrouver en tête de l'onglet Médecins.</p>`,
  'p-etablissements': `<h2 id="intro">Établissements</h2><p>Hôpitaux, cliniques, centres de santé. Filtres par spécialité, urgences, accessibilité PMR.</p>`,
  'p-etab-detail': `<h2 id="intro">Détail d'un établissement</h2><p>Coordonnées, services, équipements, praticiens, plan d'accès.</p>`,
  'p-notif-center': `<h2 id="intro">Centre de notifications</h2><p>Rappels, messages, nouveaux documents, résultats. Marquage lu / archivage.</p>`,
  'p-notif-prefs': `<h2 id="intro">Préférences</h2><p>Canaux (push, e-mail, SMS) par type d'événement.</p>`,
  'p-account-settings': `<h2 id="intro">Paramètres</h2><p>Informations personnelles, affichage clair/sombre, langue.</p>`,
  'p-password': `<h2 id="intro">Mot de passe</h2><p><strong>Sécurité</strong> → ancien + nouveau (minimum 12 caractères).</p>`,
  'p-2fa': `<h2 id="intro">2FA</h2><p>Double authentification par SMS ou application (Google Authenticator, Authy). Recommandé.</p>`,
  'p-privacy': `<h2 id="intro">Confidentialité RGPD</h2><p>Consentements, partage avec praticiens, anonymisation pour la recherche.</p>`,
  'p-export-data': `<h2 id="intro">Exporter mes données</h2><p>Téléchargement JSON/PDF (droit RGPD à la portabilité).</p>`,

  // ===== PARENTS =====
  'pa-create': `<h2 id="intro">Créer un compte Parents</h2><p>MediSync Parents est dédié au suivi santé des enfants de 0 à 4 ans. Un compte par parent, partage possible entre les deux parents.</p>${mockupParents()}`,
  'pa-add-child': `<h2 id="intro">Ajouter un enfant</h2><ol class="steps"><li class="step"><div class="step-content"><h4>Informations de naissance</h4><p>Prénom, sexe, date/heure, terme, taille, poids, PC.</p></div></li><li class="step"><div class="step-content"><h4>Pédiatre / médecin</h4></div></li><li class="step"><div class="step-content"><h4>Parcours périnatal</h4></div></li></ol>`,
  'pa-interface': `<h2 id="intro">Interface Parents</h2>${mockupParents()}<ul><li>Accueil de l'enfant</li><li>Carnet de santé</li><li>Vaccinations</li><li>Alimentation / Sommeil / Symptômes</li><li>Conseils</li><li>RDV</li></ul>`,
  'pa-growth': `<h2 id="intro">Courbes de croissance</h2><p>Taille, poids, périmètre crânien avec courbes OMS/AFPA. Calcul automatique du percentile. Alerte si écart significatif.</p>`,
  'pa-milestones': `<h2 id="intro">Étapes du développement</h2><p>Motricité (assis, marche), langage (premiers mots), socialisation. Repères par âge.</p>`,
  'pa-feeding': `<h2 id="intro">Alimentation</h2><p>Lait → diversification. Conseils par âge, allergènes, journal alimentaire.</p>`,
  'pa-sleep': `<h2 id="intro">Sommeil</h2><p>Suivi nuits/siestes, recommandations par âge, guide de l'endormissement.</p>`,
  'pa-carnet': `<h2 id="intro">Carnet de santé numérique</h2><p>Version numérique officielle : RDV, vaccinations, mesures, observations pédiatre.</p>`,
  'pa-vaccines': `<h2 id="intro">Calendrier vaccinal</h2><p>Calendrier officiel : DTP, coqueluche, Hib, HépB, pneumocoque, méningocoque C, ROR. Rappels un mois avant.</p>`,
  'pa-exams': `<h2 id="intro">Examens obligatoires</h2><p>20 examens 0-4 ans pris en charge à 100% : 8 en 1ère année, 3 entre 1 et 2 ans, 2/an ensuite. Préparation avec liste de points.</p>`,
  'pa-symptoms': `<h2 id="intro">Journal des symptômes</h2><p>Fièvre, vomissements, éruptions. Export PDF pour le pédiatre.</p>`,
  'pa-book': `<h2 id="intro">RDV enfant</h2><p>Pédiatres, généralistes spécialisés enfant, PMI.</p>`,
  'pa-pmi': `<h2 id="intro">PMI</h2><p>Centres de Protection Maternelle et Infantile. Consultations gratuites 0-6 ans.</p>`,
  'pa-reminders': `<h2 id="intro">Rappels</h2><p>Vaccinations, examens obligatoires, suivi dentaire à 3 ans, bilan à 4 ans.</p>`,
  'pa-advice': `<h2 id="intro">Conseils santé</h2><p>Fiches rédigées par pédiatres et puéricultrices. Contenu adapté à l'âge.</p>`,
  'pa-emergency': `<h2 id="intro">Urgence</h2><div class="info-box important"><span class="info-box-icon">ℹ️</span><div><strong>En cas d'urgence vitale, appelez le 15 ou le 112.</strong></div></div><h2 id="signes">Signes d'alerte nourrisson</h2><ul><li>Fièvre chez bébé &lt; 3 mois</li><li>Difficultés respiratoires, cyanose</li><li>Convulsions</li><li>Déshydratation sévère</li><li>Perte de connaissance</li></ul>`,
  'pa-resources': `<h2 id="intro">Ressources</h2><p>Numéros utiles (15, 119), sites référence, associations, groupes de soutien.</p>`,

  // ===== TÉLÉSECRÉTARIAT =====
  'ts-overview': `<h2 id="intro">MediSync Télésecrétariats</h2><p>Solution dédiée : console de prise d'appels, agendas des cabinets partenaires, transmissions sécurisées, suivi des demandes.</p>${mockupTelesec()}`,
  'ts-login': `<h2 id="intro">Connexion télésecrétaire</h2><p>Compte individuel avec 2FA obligatoire. Session tracée, actions auditées.</p>`,
  'ts-interface': `<h2 id="intro">Interface</h2>${mockupTelesec()}<ul><li><strong>File d'appels</strong> à gauche</li><li><strong>Zone de travail</strong> au centre (fiche appel, consignes, RDV, notes)</li><li><strong>Statut</strong> en haut (En ligne, Pause, Indisponible)</li></ul>`,
  'ts-incoming': `<h2 id="intro">Traiter un appel</h2><ol class="steps"><li class="step"><div class="step-content"><h4>Identifier le cabinet</h4><p>Consignes spécifiques affichées.</p></div></li><li class="step"><div class="step-content"><h4>Saluer selon le script</h4></div></li><li class="step"><div class="step-content"><h4>Identifier le patient</h4></div></li><li class="step"><div class="step-content"><h4>Qualifier la demande</h4><p>RDV, information, urgence, message.</p></div></li><li class="step"><div class="step-content"><h4>Traiter et clôturer</h4></div></li></ol>`,
  'ts-book-rdv': `<h2 id="intro">RDV pour un patient</h2><p>Agenda du praticien, vérification des règles du cabinet (motifs, lieu, durée), création du RDV. Confirmation SMS automatique.</p>`,
  'ts-emergency': `<h2 id="intro">Urgences</h2><p>Selon cabinet : transfert 15, RDV urgence dans la journée, mise en relation directe. Consignes en orange en haut.</p>`,
  'ts-transfer': `<h2 id="intro">Transfert</h2><p>Vers le cabinet (secrétaire physique) ou vers un autre télésecrétaire spécialisé.</p>`,
  'ts-notes': `<h2 id="intro">Notes d'appel</h2><p>Champ libre : rappel à faire, contexte, urgence relative.</p>`,
  'ts-cabinet-list': `<h2 id="intro">Cabinets partenaires</h2><p>Liste gérée. Filtres par spécialité, ville, praticien.</p>`,
  'ts-cabinet-rules': `<h2 id="intro">Règles par cabinet</h2><ul><li>Horaires d'ouverture du télésecrétariat</li><li>Scripts d'accueil</li><li>Motifs autorisés</li><li>Procédure d'urgence</li><li>Renouvellement d'ordonnance</li><li>Consignes particulières</li></ul>`,
  'ts-cabinet-agenda': `<h2 id="intro">Agendas des praticiens</h2><p>Visualisation temps réel. Création/modification selon droits accordés.</p>`,
  'ts-transmit': `<h2 id="intro">Transmission</h2><p>Message acheminé vers la messagerie du cabinet avec horodatage et identité patient. Visible immédiatement par le praticien.</p>`,
  'ts-follow-up': `<h2 id="intro">Suivi</h2><p>Transmissions : <em>en attente</em>, <em>lues</em>, <em>traitées</em>. Relance automatique après 24h.</p>`,
  'ts-dashboard': `<h2 id="intro">Tableau de bord</h2><p>Appels pris, TMT, taux de décroché, appels en attente.</p>`,
  'ts-stats-detail': `<h2 id="intro">Indicateurs</h2><ul><li><strong>Taux de décroché</strong></li><li><strong>Temps d'attente moyen</strong></li><li><strong>Durée moyenne d'appel</strong></li><li><strong>Taux de RDV pris</strong></li><li><strong>Volume par cabinet / tranche horaire</strong></li></ul>`
  };
  return _EXT_CACHE;
}

// ---- SVG ICONS ----
const ICONS = {
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>',
  'message-square': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',
  'bar-chart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>',
  'chevron-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  stethoscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
  'user-heart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 13c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1L18 18l-3.1-2.9c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0z"/></svg>',
  baby: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  thumbsUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>',
  thumbsDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>',
};

function icon(name, className = '') {
  return `<span class="${className}">${ICONS[name] || ''}</span>`;
}

// ---- ROUTER ----
let currentApp = 'pro';
let currentView = 'home'; // home | category | article | search
let currentCategoryId = null;
let currentArticleId = null;
let searchQuery = '';

function navigateTo(view, params = {}) {
  currentView = view;
  if (params.app) currentApp = params.app;
  if (params.categoryId) currentCategoryId = params.categoryId;
  if (params.articleId) currentArticleId = params.articleId;
  if (params.query !== undefined) searchQuery = params.query;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- SEARCH ----
function searchArticles(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  const results = [];
  const cats = CATEGORIES[currentApp] || [];
  cats.forEach(cat => {
    cat.sections.forEach(sec => {
      sec.articles.forEach(art => {
        if (art.title.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q) || sec.title.toLowerCase().includes(q)) {
          results.push({ ...art, categoryTitle: cat.title, categoryId: cat.id, sectionTitle: sec.title });
        }
      });
    });
  });
  return results;
}

// ---- RENDERERS ----
function render() {
  const app = document.getElementById('app');
  app.innerHTML = renderHeader() + renderContent() + renderFooter();
  bindEvents();
}

function renderHeader() {
  const cats = CATEGORIES[currentApp] || [];
  return `
    <header class="header">
      <div class="header-inner">
        <a href="#" class="header-logo" data-nav="home">
          <div class="header-logo-icon">M</div>
          <div class="header-logo-text">MediSync<span>Documentation</span></div>
        </a>
        <nav class="header-nav">
          ${APPS.map(a => `
            <a href="#" class="header-nav-link ${currentApp === a.id ? 'active' : ''}" data-app="${a.id}">${a.name}</a>
          `).join('')}
        </nav>
        <div class="header-search">
          <span class="header-search-icon">${ICONS.search}</span>
          <input type="text" placeholder="Rechercher dans la documentation..." id="headerSearch" value="${searchQuery}">
        </div>
      </div>
    </header>
  `;
}

function renderContent() {
  switch (currentView) {
    case 'home': return renderHome();
    case 'category': return renderCategory();
    case 'article': return renderArticle();
    case 'search': return renderSearchResults();
    default: return renderHome();
  }
}

function renderHome() {
  const cats = CATEGORIES[currentApp] || [];
  const appInfo = APPS.find(a => a.id === currentApp);

  return `
    <section class="hero">
      <div class="hero-content">
        <h1>Comment pouvons-nous vous aider ?</h1>
        <p>Documentation complète de ${appInfo.name} — Guides, tutoriels et réponses à vos questions.</p>
        <div class="hero-search">
          <span class="hero-search-icon">${ICONS.search}</span>
          <input type="text" placeholder="Recherchez un article, une fonctionnalité..." id="heroSearch" value="">
        </div>
      </div>
    </section>

    <div class="app-tabs">
      ${APPS.map(a => `
        <button class="app-tab ${currentApp === a.id ? 'active' : ''}" data-app="${a.id}">
          <span class="app-tab-icon">${icon(a.icon)}</span>
          ${a.name}
        </button>
      `).join('')}
    </div>

    <section class="categories-section">
      <h2 class="section-title">${appInfo.name}</h2>
      <div class="categories-grid">
        ${cats.map((cat, i) => `
          <a href="#" class="category-card animate-in animate-delay-${i + 1}" data-category="${cat.id}">
            <div class="category-card-icon">${icon(cat.icon)}</div>
            <h3>${cat.title}</h3>
            <p>${cat.description}</p>
            <div class="category-card-count">
              ${icon('file-text', 'category-card-count-icon')}
              ${cat.sections.reduce((sum, s) => sum + s.articles.length, 0)} articles
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="popular-articles">
      <h2 class="section-title">Articles populaires</h2>
      <div class="popular-grid">
        ${cats.slice(0, 3).flatMap(cat => cat.sections[0]?.articles.slice(0, 2).map(art => `
          <a href="#" class="popular-item" data-article="${art.id}" data-category="${cat.id}">
            <div class="popular-item-icon">${icon('file-text')}</div>
            <div>
              <h4>${art.title}</h4>
              <p>${cat.title}</p>
            </div>
          </a>
        `)).join('')}
      </div>
    </section>

    <section class="quick-help">
      <div class="quick-help-inner">
        <div>
          <h3>Besoin d'aide supplémentaire ?</h3>
          <p>Notre équipe support est disponible du lundi au vendredi, de 9h à 18h.</p>
        </div>
        <a href="#" class="btn">Contacter le support</a>
      </div>
    </section>
  `;
}

function renderCategory() {
  const cats = CATEGORIES[currentApp] || [];
  const cat = cats.find(c => c.id === currentCategoryId);
  if (!cat) return renderHome();

  return `
    <nav class="breadcrumbs">
      <a href="#" data-nav="home">${icon('home')}</a>
      <span class="separator">›</span>
      <a href="#" data-nav="home">${APPS.find(a => a.id === currentApp).name}</a>
      <span class="separator">›</span>
      <span class="current">${cat.title}</span>
    </nav>

    <div class="category-page">
      <div class="category-header">
        <h1>
          <span style="display:inline-flex;width:40px;height:40px;background:var(--ms-accent-soft);border-radius:var(--radius-md);align-items:center;justify-content:center;color:var(--ms-accent)">${icon(cat.icon)}</span>
          ${cat.title}
        </h1>
        <p>${cat.description}</p>
      </div>

      <div class="sections-list">
        ${cat.sections.map(sec => `
          <div class="section-block">
            <div class="section-block-header">
              <h2>${sec.title}</h2>
            </div>
            <ul class="articles-list">
              ${sec.articles.map(art => `
                <li>
                  <a href="#" class="article-link" data-article="${art.id}" data-category="${cat.id}">
                    <span class="article-link-icon">${ICONS['file-text']}</span>
                    <span class="article-link-title">${art.title}</span>
                    <span class="article-link-arrow">${ICONS['chevron-right']}</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderArticle() {
  const cats = CATEGORIES[currentApp] || [];
  const cat = cats.find(c => c.id === currentCategoryId);
  if (!cat) return renderHome();

  let article = null;
  let section = null;
  for (const sec of cat.sections) {
    const art = sec.articles.find(a => a.id === currentArticleId);
    if (art) { article = art; section = sec; break; }
  }
  if (!article) return renderCategory();

  // Get related articles
  const allArticles = cat.sections.flatMap(s => s.articles);
  const relatedArticles = allArticles.filter(a => a.id !== article.id).slice(0, 5);

  // Extract headings for TOC
  const headingRegex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;
  const toc = [];
  let match;
  while ((match = headingRegex.exec(article.content)) !== null) {
    toc.push({ id: match[1], title: match[2] });
  }

  return `
    <nav class="breadcrumbs">
      <a href="#" data-nav="home">${icon('home')}</a>
      <span class="separator">›</span>
      <a href="#" data-nav="home">${APPS.find(a => a.id === currentApp).name}</a>
      <span class="separator">›</span>
      <a href="#" data-category="${cat.id}">${cat.title}</a>
      <span class="separator">›</span>
      <span class="current">${article.title}</span>
    </nav>

    <div class="article-layout">
      <main class="article-main">
        <div class="article-meta">
          <span>${section.title}</span>
          <span class="article-meta-divider"></span>
          <span>Mis à jour le 6 mars 2026</span>
        </div>
        <h1>${article.title}</h1>
        <div class="article-content">
          ${article.content}
        </div>

        <div class="feedback-widget">
          <p>Cet article vous a-t-il été utile ?</p>
          <div class="feedback-buttons">
            <button class="feedback-btn">${icon('thumbsUp')} Oui</button>
            <button class="feedback-btn">${icon('thumbsDown')} Non</button>
          </div>
        </div>
      </main>

      <aside class="article-sidebar">
        ${toc.length > 0 ? `
          <div class="sidebar-block">
            <h4>Sur cette page</h4>
            <ul class="toc-list">
              ${toc.map(t => `
                <li class="toc-item">
                  <a href="#${t.id}" class="toc-link">${t.title}</a>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="sidebar-block">
          <h4>Articles connexes</h4>
          <ul class="related-list">
            ${relatedArticles.map(a => `
              <li>
                <a href="#" class="related-link" data-article="${a.id}" data-category="${cat.id}">
                  ${icon('file-text')} ${a.title}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      </aside>
    </div>
  `;
}

function renderSearchResults() {
  const results = searchArticles(searchQuery);
  return `
    <nav class="breadcrumbs">
      <a href="#" data-nav="home">${icon('home')}</a>
      <span class="separator">›</span>
      <span class="current">Résultats de recherche</span>
    </nav>

    <div class="search-results">
      <div class="search-results-header">
        <h1>Résultats pour « ${searchQuery} »</h1>
        <p class="search-results-count">${results.length} article${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}</p>
      </div>

      ${results.length === 0 ? `
        <div style="text-align:center;padding:48px 0;color:var(--ms-text-secondary)">
          <p style="font-size:1.1rem;margin-bottom:8px">Aucun résultat trouvé.</p>
          <p style="font-size:0.875rem">Essayez avec d'autres termes ou parcourez les catégories.</p>
        </div>
      ` : results.map(r => `
        <div class="search-result-item" data-article="${r.id}" data-category="${r.categoryId}">
          <h3>${r.title}</h3>
          <p class="result-category">${r.categoryTitle} › ${r.sectionTitle}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <h3><span style="display:inline-flex;width:28px;height:28px;background:linear-gradient(135deg,var(--ms-accent),var(--ms-accent-light));border-radius:6px;align-items:center;justify-content:center;color:white;font-weight:800;font-size:0.85rem;margin-right:4px">M</span> MediSync</h3>
          <p>La plateforme de santé connectée pour les professionnels de santé et leurs patients. Sécurisée, intuitive et conforme RGPD.</p>
        </div>
        <div class="footer-col">
          <h4>Produits</h4>
          <ul>
            <li><a href="#" data-app="pro">MediSync Pro</a></li>
            <li><a href="#" data-app="patient">MediSync Patient</a></li>
            <li><a href="#" data-app="parents">MediSync Parents</a></li>
            <li><a href="#" data-app="telesecretariat">MediSync Télésecrétariats</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Ressources</h4>
          <ul>
            <li><a href="#">Centre d'aide</a></li>
            <li><a href="#">Guides vidéo</a></li>
            <li><a href="#">Mises à jour</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Légal</h4>
          <ul>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">RGPD</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 MediSync. Tous droits réservés.</span>
        <span>Conforme RGPD &bull; Hébergement HDS France</span>
      </div>
    </footer>
  `;
}

// ---- EVENT BINDING ----
function bindEvents() {
  // Home navigation
  document.querySelectorAll('[data-nav="home"]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); navigateTo('home'); });
  });

  // App tabs
  document.querySelectorAll('[data-app]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo('home', { app: el.dataset.app });
    });
  });

  // Category cards
  document.querySelectorAll('[data-category]').forEach(el => {
    if (!el.dataset.article) {
      el.addEventListener('click', e => {
        e.preventDefault();
        navigateTo('category', { categoryId: el.dataset.category });
      });
    }
  });

  // Article links
  document.querySelectorAll('[data-article]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo('article', {
        categoryId: el.dataset.category,
        articleId: el.dataset.article
      });
    });
  });

  // Search results click
  document.querySelectorAll('.search-result-item[data-article]').forEach(el => {
    el.addEventListener('click', e => {
      navigateTo('article', {
        categoryId: el.dataset.category,
        articleId: el.dataset.article
      });
    });
  });

  // Search inputs
  const heroSearch = document.getElementById('heroSearch');
  const headerSearch = document.getElementById('headerSearch');

  [heroSearch, headerSearch].forEach(input => {
    if (input) {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && input.value.trim()) {
          navigateTo('search', { query: input.value.trim() });
        }
      });
    }
  });

  // Feedback buttons
  document.querySelectorAll('.feedback-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.feedback-widget').innerHTML = '<p style="color:var(--ms-accent);font-weight:600">Merci pour votre retour ! 🙏</p>';
    });
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  render();
});
