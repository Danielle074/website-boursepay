<template>
  <div class="font-sans text-gray-800">
    <!-- ========== SECTION HERO BOURSEPAY ========== -->
    <section class="relative min-h-screen flex items-center justify-center mt-16 overflow-hidden">
      <!-- Background images -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-black/60 z-10"></div>

        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          :class="[currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105']"
          :style="{ backgroundImage: `url('${image}')` }"
        ></div>
      </div>

      <!-- Contenu -->
      <div class="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in-down">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
          >
            <i class="bx bxs-badge-check text-[#FA8002] text-lg"></i>
            <span class="text-white text-sm font-semibold">
              Plateforme officielle BoursePay — Côte d'Ivoire
            </span>
          </div>

          <!-- Titre -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Paiements, bourses & aides financières
            <br />
            <span class="text-[#FA8002]"> simplifiés pour tous </span>
          </h1>

          <!-- Description -->
          <p class="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            BoursePay est la plateforme institutionnelle dédiée à la gestion sécurisée des
            paiements, des bourses d'études et des aides financières en Côte d'Ivoire.
            Une solution fiable, transparente et accessible à tous.
          </p>

          <!-- Boutons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="group px-8 py-4 bg-[#19965C] text-white rounded-2xl font-bold hover:bg-[#FA8002] hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
            >
              <i class="bx bx-search-alt-2 text-2xl group-hover:rotate-12 transition"></i>
              Découvrir BoursePay
            </button>

            <button
              class="group px-8 py-4 border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <i class="bx bx-rocket text-2xl"></i>
              Nos services
            </button>
          </div>
        </div>
      </div>

      <!-- Slides indicators -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        <span
          v-for="(_, index) in images"
          :key="index"
          @click="currentIndex = index"
          class="h-2 rounded-full cursor-pointer transition-all duration-300"
          :class="currentIndex === index ? 'w-10 bg-[#FA8002]' : 'w-2 bg-white/50 hover:bg-white/80'"
        ></span>
      </div>
    </section>

    <!-- ========== SECTION STATISTIQUES ========== -->
    <section class="bg-[#19965C] py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div
            class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <i class="bx bx-user-check text-[#FA8002] text-4xl mb-2"></i>
            <div class="text-3xl font-black text-white">500K+</div>
            <div class="text-sm text-white/80">Utilisateurs actifs</div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <i class="bx bx-transfer-alt text-[#FA8002] text-4xl mb-2"></i>
            <div class="text-3xl font-black text-white">2M+</div>
            <div class="text-sm text-white/80">Transactions/an</div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <i class="bx bx-wallet text-[#FA8002] text-4xl mb-2"></i>
            <div class="text-3xl font-black text-white">50K+</div>
            <div class="text-sm text-white/80">Bourses distribuées</div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <i class="bx bx-shield-quarter text-[#FA8002] text-4xl mb-2"></i>
            <div class="text-3xl font-black text-white">100%</div>
            <div class="text-sm text-white/80">Sécurisé & conforme</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION PRÉSENTATION ========== -->
    <section class="py-20 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-14 items-center">
          <!-- IMAGE -->
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-[#19965C] rounded-3xl blur opacity-30 group-hover:opacity-50 transition"
            ></div>

            <img
              :src="presentationImage"
              alt="BoursePay plateforme"
              class="relative rounded-3xl shadow-2xl w-full object-cover"
            />

            <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
              <div class="flex items-center gap-3">
                <i class="bx bxs-badge-check text-[#19965C] text-3xl"></i>
                <span class="font-bold text-[#19965C]"> 500 000+ transactions sécurisées </span>
              </div>
            </div>
          </div>

          <!-- TEXTE -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <i class="bx bx-info-circle text-[#19965C] text-3xl"></i>
              <span class="text-[#19965C] font-bold uppercase tracking-wider"> Qui sommes-nous ? </span>
            </div>

            <h2 class="text-4xl sm:text-5xl font-black text-gray-800 mb-5 leading-tight">
              <span class="text-[#19965C]">BoursePay</span>,
              <br />
              la plateforme de confiance pour vos paiements et bourses
            </h2>

            <p class="text-gray-600 leading-relaxed mb-8 text-lg">
              BoursePay est une solution numérique institutionnelle conçue pour faciliter et
              sécuriser les paiements, la distribution des bourses et la gestion des aides
              financières. Elle s'adresse aux étudiants, aux institutions, aux entreprises et aux
              particuliers.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <i class="bx bx-lock-alt text-[#19965C] text-3xl"></i>
                <span class="font-semibold">Sécurité maximale</span>
              </div>

              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <i class="bx bx-time-five text-[#19965C] text-3xl"></i>
                <span class="font-semibold">Rapidité d'exécution</span>
              </div>

              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <i class="bx bx-globe text-[#19965C] text-3xl"></i>
                <span class="font-semibold">Accessible partout</span>
              </div>

              <div
                class="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <i class="bx bx-check-shield text-[#19965C] text-3xl"></i>
                <span class="font-semibold">Conforme aux normes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION NOS MISSIONS ========== -->
    <section class="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-3 mb-4">
            <i class="bx bx-target-lock text-[#19965C] text-4xl"></i>
            <span class="text-[#19965C] font-bold uppercase tracking-wider">Nos missions</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-gray-800 mb-4">Ce que nous faisons</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            BoursePay agit sur plusieurs fronts pour simplifier et sécuriser les flux financiers en
            Côte d'Ivoire
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(mission, index) in missions"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-[#19965C] rounded-2xl flex items-center justify-center mb-5"
            >
              <i :class="mission.icon + ' text-white text-3xl'"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ mission.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ mission.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION SERVICES CLÉS ========== -->
    <section class="py-20 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-3 mb-4">
            <i class="bx bx-grid-alt text-[#19965C] text-4xl"></i>
            <span class="text-[#19965C] font-bold uppercase tracking-wider">Nos services</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-gray-800 mb-4">Services clés</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Des solutions concrètes pour un impact durable sur la gestion des paiements et des
            bourses
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
          >
            <i class="bx bx-credit-card text-[#19965C] text-4xl"></i>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Paiements en ligne sécurisés</h3>
              <p class="text-gray-600">
                Réglez vos factures, frais de scolarité et services en toute sécurité, 24h/24 et
                7j/7.
              </p>
            </div>
          </div>

          <div
            class="flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
          >
            <i class="bx bx-graduation text-[#19965C] text-4xl"></i>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Gestion des bourses</h3>
              <p class="text-gray-600">
                Distribution rapide, transparente et traçable des bourses d'études et aides
                scolaires.
              </p>
            </div>
          </div>

          <div
            class="flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
          >
            <i class="bx bx-transfer text-[#19965C] text-4xl"></i>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Transferts sécurisés</h3>
              <p class="text-gray-600">
                Envoyez et recevez des fonds en toute confiance, avec un suivi en temps réel.
              </p>
            </div>
          </div>

          <div
            class="flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
          >
            <i class="bx bx-handicap text-[#19965C] text-4xl"></i>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Aides financières</h3>
              <p class="text-gray-600">
                Gestion des aides sociales, subventions et dispositifs d'accompagnement financier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SECTION TÉMOIGNAGES ========== -->
    <section class="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-3 mb-4">
            <i class="bx bx-chat text-[#19965C] text-4xl"></i>
            <span class="text-[#19965C] font-bold uppercase tracking-wider">Témoignages</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-gray-800 mb-4">Ils parlent de nous</h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez les retours d'expérience de nos utilisateurs et partenaires
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <i class="bx bxs-quote-left text-[#19965C] text-5xl opacity-20 mb-4"></i>
            <p class="text-gray-600 text-lg mb-6 italic">
              "Grâce à BoursePay, j'ai reçu ma bourse d'études en quelques minutes, sans aucune
              démarche compliquée."
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[#19965C] rounded-full flex items-center justify-center"
              >
                <i class="bx bx-user text-white text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800">Aminata K.</h4>
                <p class="text-sm text-gray-500">Étudiante, Abidjan</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <i class="bx bxs-quote-left text-[#19965C] text-5xl opacity-20 mb-4"></i>
            <p class="text-gray-600 text-lg mb-6 italic">
              "BoursePay nous permet de gérer nos paiements institutionnels avec une transparence
              et une traçabilité totales."
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-[#19965C] rounded-full flex items-center justify-center"
              >
                <i class="bx bx-user-plus text-white text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800">M. Koné A.</h4>
                <p class="text-sm text-gray-500">Directeur financier, Bouaké</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== BOUTON RETOUR HAUT ========== -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-[#19965C] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[#FA8002] transition-all duration-300 hover:scale-110 flex items-center justify-center"
    >
      <i class="bx bx-chevron-up text-2xl"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/* ================= IMAGES ================= */

/* HERO */
import hero1 from '@/assets/images/Header1.jpg'
import hero2 from '@/assets/images/Header2.jpg'
import hero3 from '@/assets/images/Header3.jpg'

/* PRESENTATION */
import presentationImage from '@/assets/images/Header4.jpg'

/* ================= SLIDER ================= */

const images = [hero1, hero2, hero3]

const currentIndex = ref(0)
const showScrollTop = ref(false)

let sliderInterval: number

/* ================= MISSIONS ================= */

const missions = [
  {
    icon: 'bx bx-credit-card',
    title: 'Paiements sécurisés',
    description:
      "Offrir une plateforme de paiement fiable, rapide et accessible à tous les Ivoiriens, où qu'ils soient.",
  },
  {
    icon: 'bx bx-wallet',
    title: 'Gestion des bourses',
    description:
      "Distribuer les bourses d'études et aides financières de manière transparente et traçable.",
  },
  {
    icon: 'bx bx-shield-quarter',
    title: 'Sécurité des transactions',
    description:
      'Garantir la protection des données et la sécurité de chaque transaction via des standards internationaux.',
  },
  {
    icon: 'bx bx-bar-chart-alt-2',
    title: 'Suivi & reporting',
    description:
      'Fournir des tableaux de bord et rapports détaillés aux institutions et partenaires.',
  },
  {
    icon: 'bx bx-buildings',
    title: 'Solutions institutionnelles',
    description:
      'Accompagner les institutions publiques et privées dans la digitalisation de leurs flux financiers.',
  },
  {
    icon: 'bx bx-world',
    title: 'Ouverture internationale',
    description:
      "Permettre aux membres de la diaspora et aux partenaires internationaux d'interagir facilement avec la Côte d'Ivoire.",
  },
]

/* ================= SCROLL ================= */

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/* ================= MOUNTED ================= */

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)

  clearInterval(sliderInterval)
})
</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
