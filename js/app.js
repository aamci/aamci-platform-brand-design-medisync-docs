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
  ]
};

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

  // For articles without specific content, generate a default template
  if (!contents[id]) {
    return `
      <h2 id="introduction">Introduction</h2>
      <p>Cette section de la documentation est en cours de rédaction. Elle sera enrichie avec des captures d'écran détaillées et des guides pas à pas complets.</p>

      <div class="info-box important">
        <span class="info-box-icon">ℹ️</span>
        <div><strong>Documentation en cours</strong> : Cette page sera complétée prochainement avec des instructions détaillées, des captures d'écran annotées et des tutoriels vidéo.</div>
      </div>

      <h2 id="overview">Vue d'ensemble</h2>
      <p>Consultez les articles connexes dans la barre latérale pour découvrir les fonctionnalités liées à cette section.</p>

      <p>Si vous avez des questions, n'hésitez pas à contacter notre équipe support via la messagerie intégrée ou par e-mail.</p>
    `;
  }

  return contents[id];
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
