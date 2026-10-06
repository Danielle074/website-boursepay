<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
    <!-- SECTION HÉRO -->
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
            <i class="bx bx-info-circle text-xl"></i>
            <span class="text-sm font-semibold tracking-wide">Qui sommes-nous ?</span>
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            À propos de
            <span class="text-[#FA8002]">BoursePay</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-4 font-light">
            Plateforme de paiements, bourses & aides financières
          </p>
          <p class="text-lg opacity-90">Côte d'Ivoire • Solution institutionnelle sécurisée</p>
        </div>
      </div>

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

    <!-- SECTION NOTRE MISSION -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <span
              class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
            >
              <i class="bx bx-bullseye mr-2"></i> Notre mission
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Une vision claire pour la
              <span class="text-[#19965C]">gestion des paiements et des bourses</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              BoursePay a pour mission de garantir un accès simple, rapide et sécurisé aux services
              de paiement, aux bourses d'études et aux aides financières pour tous les Ivoiriens.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              À travers des technologies innovantes et un engagement sans faille, nous travaillons à
              réduire la complexité administrative, à renforcer la transparence des flux financiers
              et à accompagner les institutions publiques et privées dans leur transformation
              digitale.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <i class="bx bx-check-circle text-[#FA8002] text-xl"></i>
                <span class="text-gray-700">Sécurité maximale</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bx bx-check-circle text-[#FA8002] text-xl"></i>
                <span class="text-gray-700">Accès universel</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="bx bx-check-circle text-[#FA8002] text-xl"></i>
                <span class="text-gray-700">Innovation continue</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                :src="missionImage"
                alt="BoursePay mission"
                class="w-full h-96 object-cover"
              />
              <div class="absolute inset-0 bg-[#19965C]/30"></div>
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FA8002]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION NOS VALEURS -->
    <section class="py-20 px-6 bg-gray-100">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span
            class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            <i class="bx bx-heart mr-2"></i> Nos fondamentaux
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nos <span class="text-[#19965C]">valeurs</span>
          </h2>
          <div class="w-24 h-1 bg-[#FA8002] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div
              class="w-20 h-20 bg-[#19965C] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-[#FA8002] transition-all duration-300 shadow-lg"
            >
              <i :class="value.icon" class="text-3xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION NOTRE HISTOIRE -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                :src="historyImage"
                alt="Histoire BoursePay"
                class="w-full h-96 object-cover"
              />
              <div class="absolute inset-0 bg-[#19965C]/30"></div>
            </div>
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-[#FA8002]/20 rounded-full blur-2xl"></div>
          </div>
          <div>
            <span
              class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
            >
              <i class="bx bx-history mr-2"></i> Notre parcours
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Une <span class="text-[#19965C]">histoire</span> au service des Ivoiriens
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              Née de la volonté de simplifier les démarches financières et administratives,
              BoursePay s'est imposée comme une solution incontournable pour la gestion des
              paiements, des bourses et des aides en Côte d'Ivoire.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              Depuis son lancement, nous avons accompagné plus de 500 000 utilisateurs, traité
              plus de 2 millions de transactions et distribué plus de 50 000 bourses d'études à
              travers le pays.
            </p>
            <div class="flex items-center gap-4 mt-6">
              <div class="flex -space-x-2">
                <div
                  class="w-10 h-10 rounded-full bg-[#19965C] flex items-center justify-center text-white text-xs border-2 border-white"
                >
                  500K
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-[#FA8002] flex items-center justify-center text-white text-xs border-2 border-white"
                >
                  2M
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-[#19965C] flex items-center justify-center text-white text-xs border-2 border-white"
                >
                  50K
                </div>
              </div>
              <span class="text-gray-500">Utilisateurs • Transactions • Bourses</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION NOTRE ÉQUIPE -->
    <section class="py-20 px-6 bg-gray-100">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span
            class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            <i class="bx bx-group mr-2"></i> Notre équipe
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Des <span class="text-[#19965C]">experts</span> dévoués
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Une équipe pluridisciplinaire engagée pour la sécurité et la fluidité de vos
            transactions
          </p>
          <div class="w-24 h-1 bg-[#FA8002] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-[#19965C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <div class="p-5 text-center">
              <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
              <p class="text-[#19965C] font-semibold text-sm mb-3">{{ member.position }}</p>
              <div class="flex justify-center gap-3">
                <a href="#" class="text-gray-400 hover:text-[#FA8002] transition-colors">
                  <i class="bx bxl-linkedin text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-[#FA8002] transition-colors">
                  <i class="bx bx-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION CHIFFRES CLÉS -->
    <section class="py-16 px-6 bg-[#19965C] relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <i class="bx bx-credit-card text-6xl absolute top-10 left-10 animate-ping text-white"></i>
        <i class="bx bx-graduation text-8xl absolute bottom-10 right-10 text-white"></i>
        <i class="bx bx-shield-quarter text-7xl absolute top-20 right-32 text-white"></i>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="text-center text-white mb-12">
          <h3 class="text-2xl lg:text-3xl font-bold mb-2">Notre impact en chiffres</h3>
          <p class="opacity-90">Des résultats concrets pour les Ivoiriens</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center text-white group">
            <div
              class="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform inline-block"
            >
              {{ stat.number }}
            </div>
            <div class="text-sm lg:text-base opacity-90">{{ stat.label }}</div>
            <div
              class="w-12 h-0.5 bg-[#FA8002] mx-auto mt-3 group-hover:w-24 transition-all"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <div
          class="bg-[#19965C] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#FA8002]/30 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <i class="bx bx-happy-heart-eyes text-6xl text-[#FA8002] mb-6 animate-pulse"></i>
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
              Rejoignez l'aventure BoursePay
            </h3>
            <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ensemble, simplifions les paiements et facilitons l'accès aux bourses pour tous les
              Ivoiriens
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                class="bg-white text-[#19965C] px-8 py-3 rounded-full font-semibold hover:bg-[#FA8002] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <i class="bx bx-envelope"></i>
                Nous contacter
              </button>
              <button
                class="border-2 border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <i class="bx bx-rocket"></i>
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// ========== IMPORT DE TOUTES LES IMAGES ==========
// 1. Image de la mission
import missionImageUrl from '@/assets/images/Header1.jpg'
// 2. Image de l'histoire
import historyImageUrl from '@/assets/images/Header2.jpg'
// 3. Images de l'équipe
import directorImage from '@/assets/images/Header3.jpg'
import pediatricImage from '@/assets/images/Header1.jpg'
import coordinatorImage from '@/assets/images/Header2.jpg'
import logisticImage from '@/assets/images/Header3.jpg'

export default {
  name: 'AboutPage',
  data() {
    return {
      // Images importées
      missionImage: missionImageUrl,
      historyImage: historyImageUrl,

      values: [
        {
          title: 'Sécurité',
          icon: 'bx bx-shield-quarter',
          description:
            'Protection maximale des données et des transactions, conforme aux normes internationales.',
        },
        {
          title: 'Transparence',
          icon: 'bx bx-show',
          description:
            'Une traçabilité totale de chaque opération, pour une confiance durable entre toutes les parties.',
        },
        {
          title: 'Innovation',
          icon: 'bx bx-bulb',
          description:
            'Des technologies modernes au service de la simplification des paiements et des bourses.',
        },
        {
          title: 'Accessibilité',
          icon: 'bx bx-globe',
          description:
            'Une plateforme disponible 24h/24, accessible partout et pour tous les Ivoiriens.',
        },
      ],
      team: [
        {
          name: 'M. Kouadio Fabrice',
          position: 'Directeur Général',
          image: directorImage,
        },
        {
          name: 'Mme. Yao Aminata',
          position: 'Responsable des opérations',
          image: pediatricImage,
        },
        {
          name: 'M. Konan Souleymane',
          position: 'Responsable technique',
          image: coordinatorImage,
        },
        {
          name: 'Mme. Bamba Aïcha',
          position: 'Responsable conformité',
          image: logisticImage,
        },
      ],
      stats: [
        { number: '500K+', label: 'Utilisateurs actifs', icon: 'bx bx-user-check' },
        { number: '2M+', label: 'Transactions / an', icon: 'bx bx-transfer-alt' },
        { number: '50K+', label: 'Bourses distribuées', icon: 'bx bx-graduation' },
        { number: '100%', label: 'Sécurisé & conforme', icon: 'bx bx-shield-quarter' },
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
