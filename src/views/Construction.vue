<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
    <!-- SECTION HÉRO ANIMÉE -->
    <section
      class="relative overflow-hidden bg-[#19965C] text-white min-h-screen flex items-center"
    >
      <!-- Particules animées -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
        <div
          class="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"
        ></div>

        <!-- Étoiles flottantes -->
        <div v-for="i in 20" :key="i" class="absolute animate-float" :style="getStarStyle(i)">
          <i class="bx bx-star text-white/20 text-xs"></i>
        </div>
      </div>

      <div class="relative container mx-auto px-6 py-20 lg:py-28 text-center z-10">
        <!-- Icône animée -->
        <div class="mb-8 relative">
          <div class="w-32 h-32 mx-auto relative">
            <div class="absolute inset-0 bg-[#FA8002]/40 rounded-full blur-xl animate-ping"></div>
            <div
              class="relative w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm animate-spin-slow"
            >
              <i class="bx bx-credit-card text-5xl text-white"></i>
            </div>
          </div>
        </div>

        <div
          class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce"
        >
          <i class="bx bx-hard-hat text-xl"></i>
          <span class="text-sm font-semibold tracking-wide">Travaux en cours</span>
        </div>

        <h1 class="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
          Page en
          <span class="text-[#FA8002]">Construction</span>
        </h1>

        <p class="text-xl lg:text-2xl mb-6 font-light max-w-2xl mx-auto">
          Nous travaillons actuellement sur cette page pour vous offrir une meilleure expérience
          BoursePay
        </p>

        <p class="text-lg opacity-80 mb-10 max-w-lg mx-auto">
          Notre équipe met tout en œuvre pour que cette section soit disponible très bientôt. Merci
          pour votre patience !
        </p>

        <!-- Timer de compte à rebours -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
            <div class="text-3xl lg:text-4xl font-bold">{{ days }}</div>
            <div class="text-sm opacity-80">Jours</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
            <div class="text-3xl lg:text-4xl font-bold">{{ hours }}</div>
            <div class="text-sm opacity-80">Heures</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
            <div class="text-3xl lg:text-4xl font-bold">{{ minutes }}</div>
            <div class="text-sm opacity-80">Minutes</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
            <div class="text-3xl lg:text-4xl font-bold">{{ seconds }}</div>
            <div class="text-sm opacity-80">Secondes</div>
          </div>
        </div>

        <!-- Boutons d'action -->
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/">
            <button
              class="bg-white text-[#19965C] px-8 py-3 rounded-full font-semibold hover:bg-[#FA8002] hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <i class="bx bx-arrow-back"></i>
              Retour à l'accueil
            </button>
          </RouterLink>
          <button
            @click="notifyMe"
            class="border-2 border-white/30 backdrop-blur-sm px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <i class="bx bx-bell"></i>
            M'avertir du lancement
          </button>
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

    <!-- SECTION CE QUI ARRIVE -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span
            class="text-[#19965C] font-semibold text-sm uppercase tracking-wider bg-[#19965C]/10 px-4 py-2 rounded-full inline-block mb-4"
          >
            <i class="bx bx-rocket mr-2"></i> À venir
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ce qui vous <span class="text-[#19965C]">attend</span>
          </h2>
          <div class="w-24 h-1 bg-[#FA8002] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in upcomingFeatures"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
          >
            <div
              class="w-20 h-20 bg-[#19965C] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-[#FA8002] transition-all duration-300 shadow-lg"
            >
              <i :class="feature.icon" class="text-3xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
            <div class="mt-4 inline-flex items-center gap-1 text-[#19965C] text-sm font-semibold">
              <span>Bientôt disponible</span>
              <i class="bx bx-time"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION NEWSLETTER / ALERTE -->
    <section class="py-20 px-6 bg-gray-100">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white rounded-3xl p-10 lg:p-12 text-center shadow-xl">
          <div
            class="w-20 h-20 bg-[#19965C] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <i class="bx bx-mail-send text-3xl text-white"></i>
          </div>
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            Soyez le premier informé !
          </h3>
          <p class="text-gray-500 mb-8 max-w-md mx-auto">
            Inscrivez-vous pour recevoir une notification dès le lancement de cette page
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="notifyEmail"
              type="email"
              placeholder="Votre adresse email"
              class="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#19965C] focus:ring-2 focus:ring-[#19965C]/20"
            />
            <button
              @click="notifyMe"
              class="bg-[#19965C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#FA8002] transition-all"
            >
              M'avertir
            </button>
          </div>
          <p v-if="notifySuccess" class="text-[#19965C] mt-4 text-sm">
            <i class="bx bx-check-circle"></i> Merci ! Vous serez averti dès le lancement.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION CONTACT D'URGENCE -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-[#19965C] rounded-2xl p-8 text-white text-center">
            <div
              class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="bx bx-phone-call text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Besoin d'aide immédiate ?</h3>
            <p class="text-3xl font-bold mb-2">+225 XX XX XX XX</p>
            <p class="opacity-90">Assistance BoursePay 24h/24</p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div
              class="w-16 h-16 bg-[#19965C]/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="bx bx-envelope text-2xl text-[#19965C]"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Nous contacter</h3>
            <p class="text-gray-600 mb-4">
              Pour toute question, notre équipe est à votre disposition
            </p>
            <RouterLink
              to="/construction/contact"
              class="text-[#19965C] font-semibold flex items-center justify-center gap-1 mx-auto hover:gap-2 hover:text-[#FA8002] transition-all"
            >
              Envoyer un message <i class="bx bx-right-arrow-alt"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION PROGRESSION -->
    <section class="py-16 px-6 bg-gray-100">
      <div class="container mx-auto max-w-3xl text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-3">Avancement des travaux</h3>
        <p class="text-gray-500 mb-6">Notre équipe travaille activement sur cette page</p>

        <div class="relative pt-4">
          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Design</span>
            <span>85%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <div
              class="bg-[#19965C] h-3 rounded-full transition-all duration-1000"
              style="width: 85%"
            ></div>
          </div>

          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Contenu</span>
            <span>60%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <div
              class="bg-[#19965C] h-3 rounded-full transition-all duration-1000"
              style="width: 60%"
            ></div>
          </div>

          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Développement</span>
            <span>40%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
            <div
              class="bg-[#FA8002] h-3 rounded-full transition-all duration-1000"
              style="width: 40%"
            ></div>
          </div>

          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Tests</span>
            <span>25%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              class="bg-[#FA8002] h-3 rounded-full transition-all duration-1000"
              style="width: 25%"
            ></div>
          </div>
        </div>

        <div class="mt-8 flex justify-center gap-2">
          <i class="bx bx-check-circle text-[#19965C]"></i>
          <i class="bx bx-check-circle text-[#19965C]"></i>
          <i class="bx bx-loader-alt text-[#FA8002] animate-spin"></i>
          <i class="bx bx-loader-alt text-gray-300"></i>
          <i class="bx bx-loader-alt text-gray-300"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UnderConstructionPage',
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
      notifyEmail: '',
      notifySuccess: false,
      upcomingFeatures: [
        {
          title: 'Tableau de bord étudiant',
          icon: 'bx bx-user',
          description:
            'Un espace dédié aux étudiants pour suivre leurs demandes de bourse et l’historique des versements.',
        },
        {
          title: 'Suivi des transactions',
          icon: 'bx bx-line-chart',
          description:
            'Un outil interactif pour visualiser toutes vos transactions en temps réel, avec rapports automatiques.',
        },
        {
          title: 'Paiement mobile Money',
          icon: 'bx bx-mobile',
          description:
            'Payez directement avec Orange Money, MTN Money, Moov Money et Wave depuis l’application.',
        },
        {
          title: 'Ressources & guides PDF',
          icon: 'bx bx-download',
          description:
            'Guides d’utilisation, brochures et documents officiels à télécharger gratuitement.',
        },
        {
          title: 'FAQ interactive',
          icon: 'bx bx-chat',
          description:
            'Un assistant virtuel pour répondre à toutes vos questions sur les paiements et les bourses.',
        },
        {
          title: 'Annuaire des partenaires',
          icon: 'bx bx-map-alt',
          description:
            'Trouvez les institutions, banques et partenaires BoursePay les plus proches de chez vous.',
        },
      ],
    }
  },
  computed: {
    targetDate() {
      const target = new Date()
      target.setDate(target.getDate() + 30)
      return target
    },
  },
  mounted() {
    this.startCountdown()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    getStarStyle(i) {
      const styles = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }
      return styles
    },

    startCountdown() {
      this.timer = setInterval(() => {
        const now = new Date().getTime()
        const distance = this.targetDate.getTime() - now

        if (distance < 0) {
          clearInterval(this.timer)
          this.days = 0
          this.hours = 0
          this.minutes = 0
          this.seconds = 0
        } else {
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
        }
      }, 1000)
    },

    async notifyMe() {
      if (!this.notifyEmail) {
        alert('Veuillez entrer votre adresse email')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.notifyEmail)) {
        alert('Veuillez entrer une adresse email valide')
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 500))
      this.notifySuccess = true
      this.notifyEmail = ''
      setTimeout(() => {
        this.notifySuccess = false
      }, 3000)
    },
  },
}
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-20px) translateX(-5px);
  }
  75% {
    transform: translateY(-10px) translateX(5px);
  }
}

.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
  position: absolute;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-2000 {
  animation-delay: 2s;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
