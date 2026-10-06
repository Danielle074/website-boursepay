<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
    <!-- ========== SECTION HÉRO ========== -->
    <section class="relative overflow-hidden bg-[#19965C] text-white">
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div class="relative container mx-auto px-6 py-20 lg:py-28">
        <div class="max-w-4xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mt-6 animate-bounce"
          >
            <i class="bx bx-group text-xl"></i>
            <span class="text-sm font-semibold tracking-wide">BoursePay pour tous</span>
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Nos <span class="text-[#FA8002]">usagers</span>
          </h1>

          <p class="text-xl lg:text-2xl mb-4 font-light">
            Une plateforme pensée pour chaque profil
          </p>
          <p class="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Que vous soyez étudiant, institution, entreprise ou membre de la diaspora,
            BoursePay vous accompagne dans vos paiements, bourses et aides financières.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/connexion">
              <button
                class="bg-white text-[#19965C] px-8 py-3 rounded-full font-semibold hover:bg-[#FA8002] hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i class="bx bx-user-plus"></i>
                Créer un compte
              </button>
            </RouterLink>

            <button
              class="border-2 border-white/50 backdrop-blur-sm px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i class="bx bx-info-circle"></i>
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <!-- Vague décorative -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full">
          <path
            fill="#f8fafc"
            fill-opacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- ========== SECTION PROFILS ========== -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span
            class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            <i class="bx bx-user-voice mr-2"></i> Nos profils
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            À qui s'adresse <span class="text-[#19965C]">BoursePay</span> ?
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            4 grands profils d'usagers utilisent BoursePay au quotidien pour simplifier leurs
            démarches financières
          </p>
          <div class="w-24 h-1 bg-[#FA8002] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(user, index) in users"
            :key="index"
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500"
              :class="user.bgAccent"
            ></div>

            <div class="relative z-10">
              <!-- Icône -->
              <div
                class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                :class="user.bgIcon"
              >
                <i :class="user.icon" class="text-3xl text-white"></i>
              </div>

              <!-- Titre -->
              <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ user.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-5">{{ user.description }}</p>

              <!-- Points clés -->
              <ul class="space-y-2 mb-6">
                <li
                  v-for="(point, i) in user.points"
                  :key="i"
                  class="flex items-start gap-2 text-sm text-gray-600"
                >
                  <i class="bx bx-check-circle text-[#19965C] text-lg mt-0.5"></i>
                  <span>{{ point }}</span>
                </li>
              </ul>

              <!-- Bouton -->
              <RouterLink to="/connexion">
                <button
                  class="flex items-center text-[#19965C] font-semibold hover:gap-2 hover:text-[#FA8002] transition-all"
                >
                  <span class="text-sm">S'inscrire en tant que {{ user.shortName }}</span>
                  <i class="bx bx-right-arrow-alt text-xl"></i>
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION PARCOURS ÉTUDIANT DÉTAILLÉ ========== -->
    <section class="py-20 px-6 bg-gray-50">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span
            class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            <i class="bx bx-graduation mr-2"></i> Focus Étudiants
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Le parcours <span class="text-[#19965C]">étudiant</span> sur BoursePay
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            De l'inscription à la réception de la bourse, un parcours simple et 100% en ligne
          </p>
          <div class="w-24 h-1 bg-[#FA8002] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(step, index) in studentSteps"
            :key="index"
            class="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-14 h-14 bg-[#FA8002] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg"
            >
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
            <i
              v-if="index < studentSteps.length - 1"
              class="bx bx-right-arrow-alt text-[#19965C] text-3xl absolute top-1/2 -right-4 hidden lg:block"
            ></i>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION POURQUOI BOURSEPAY ========== -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span
            class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            <i class="bx bx-star mr-2"></i> Avantages
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Pourquoi nos usagers nous font <span class="text-[#19965C]">confiance</span> ?
          </h2>
          <div class="w-24 h-1 bg-[#FA8002] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(advantage, index) in advantages"
            :key="index"
            class="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="w-20 h-20 bg-[#19965C]/10 rounded-full flex items-center justify-center mx-auto mb-5"
            >
              <i :class="advantage.icon" class="text-4xl text-[#19965C]"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ advantage.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION STATISTIQUES ========== -->
    <section class="py-16 px-6 bg-[#19965C] relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <i class="bx bx-user text-6xl absolute top-10 left-10 animate-ping text-white"></i>
        <i class="bx bx-group text-8xl absolute bottom-10 right-10 text-white"></i>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="text-center text-white mb-12">
          <h3 class="text-2xl lg:text-3xl font-bold mb-2">Notre communauté en chiffres</h3>
          <p class="opacity-90">Des milliers d'usagers nous font déjà confiance</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center text-white group">
            <div
              class="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform inline-block"
            >
              {{ stat.number }}
            </div>
            <div class="text-sm lg:text-base opacity-90">{{ stat.label }}</div>
            <div class="w-12 h-0.5 bg-[#FA8002] mx-auto mt-3 group-hover:w-24 transition-all"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION CTA ========== -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-[#19965C] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div
            class="absolute -top-20 -right-20 w-64 h-64 bg-[#FA8002]/30 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          ></div>

          <div class="relative z-10">
            <i class="bx bx-user-plus text-6xl text-[#FA8002] mb-6 animate-pulse"></i>
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
              Rejoignez BoursePay dès aujourd'hui
            </h3>
            <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Créez votre compte en quelques minutes et profitez de tous nos services adaptés à
              votre profil.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink to="/connexion">
                <button
                  class="bg-white text-[#19965C] px-8 py-4 rounded-full font-semibold hover:bg-[#FA8002] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <i class="bx bx-user-plus"></i>
                  Créer mon compte
                </button>
              </RouterLink>
              <button
                class="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <i class="bx bx-envelope"></i>
                Contacter l'équipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UsagersPage',
  data() {
    return {
      users: [
        {
          title: 'Étudiants',
          shortName: 'étudiant',
          icon: 'bx bx-user',
          bgIcon: 'bg-[#19965C] group-hover:bg-[#FA8002]',
          bgAccent: 'bg-[#19965C]/10 group-hover:bg-[#FA8002]/10',
          description:
            'Demandez et recevez votre bourse d’études directement sur votre compte BoursePay, sans paperasse ni déplacement.',
          points: [
            'Inscription 100% en ligne',
            'Dépôt des pièces justificatives',
            'Suivi en temps réel du dossier',
            'Réception rapide des bourses',
          ],
        },
        {
          title: 'Institutions publiques',
          shortName: 'institution',
          icon: 'bx bx-buildings',
          bgIcon: 'bg-[#19965C] group-hover:bg-[#FA8002]',
          bgAccent: 'bg-[#19965C]/10 group-hover:bg-[#FA8002]/10',
          description:
            'Gérez la distribution des bourses, des aides sociales et des subventions avec transparence et traçabilité totale.',
          points: [
            'Tableaux de bord personnalisés',
            'Rapports périodiques automatisés',
            'Distribution sécurisée des fonds',
            'Conformité réglementaire garantie',
          ],
        },
        {
          title: 'Entreprises & partenaires',
          shortName: 'entreprise',
          icon: 'bx bx-briefcase',
          bgIcon: 'bg-[#19965C] group-hover:bg-[#FA8002]',
          bgAccent: 'bg-[#19965C]/10 group-hover:bg-[#FA8002]/10',
          description:
            'Encaissez vos paiements, gérez vos transactions et accédez à des solutions financières adaptées à votre activité.',
          points: [
            'Encaissements en ligne sécurisés',
            'Transferts rapides entre partenaires',
            'Suivi des transactions en temps réel',
            'Intégration API simplifiée',
          ],
        },
        {
          title: 'Diaspora ivoirienne',
          shortName: 'membre de la diaspora',
          icon: 'bx bx-world',
          bgIcon: 'bg-[#19965C] group-hover:bg-[#FA8002]',
          bgAccent: 'bg-[#19965C]/10 group-hover:bg-[#FA8002]/10',
          description:
            'Soutenez vos proches, financez des projets et payez vos démarches en Côte d’Ivoire depuis n’importe où dans le monde.',
          points: [
            'Transferts internationaux simplifiés',
            'Paiement de bourses pour vos proches',
            'Suivi des aides envoyées',
            'Accès aux services depuis l’étranger',
          ],
        },
      ],

      studentSteps: [
        {
          title: 'Créer un compte',
          description:
            'L’étudiant s’inscrit gratuitement sur BoursePay avec son numéro de téléphone et son adresse email.',
        },
        {
          title: 'Remplir le profil',
          description:
            'Il complète ses informations personnelles, académiques et bancaires en quelques minutes.',
        },
        {
          title: 'Demander une bourse',
          description:
            'Il choisit le type de bourse, téléverse ses pièces justificatives et soumet sa demande.',
        },
        {
          title: 'Recevoir les fonds',
          description:
            'Après validation, la bourse est versée directement sur son compte BoursePay.',
        },
      ],

      advantages: [
        {
          title: 'Simple à utiliser',
          icon: 'bx bx-happy',
          description:
            'Une interface claire et intuitive, accessible à tous les profils, même sans expérience numérique.',
        },
        {
          title: '100% sécurisé',
          icon: 'bx bx-lock-alt',
          description:
            'Vos paiements et données personnelles sont protégés par un chiffrement de bout en bout.',
        },
        {
          title: 'Accessible partout',
          icon: 'bx bx-globe',
          description:
            'Disponible sur mobile et ordinateur, 24h/24 et 7j/7, où que vous soyez dans le monde.',
        },
      ],

      stats: [
        { number: '500K+', label: 'Utilisateurs actifs', icon: 'bx bx-user-check' },
        { number: '200+', label: 'Institutions partenaires', icon: 'bx bx-buildings' },
        { number: '50K+', label: 'Bourses distribuées', icon: 'bx bx-wallet' },
        { number: '30+', label: 'Pays représentés', icon: 'bx bx-world' },
      ],
    }
  },
}
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
