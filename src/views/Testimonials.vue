<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

    <!-- SECTION HÉRO -->
    <section class="relative overflow-hidden bg-gradient-to-br from-[#42637a] via-[#346778] to-[#2a5a6b] text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div class="relative container mx-auto px-6 py-20 lg:py-28">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mt-6 animate-bounce">
            <i class='bx bx-star text-xl'></i>
            <span class="text-sm font-semibold tracking-wide">Ils nous font confiance</span>
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Avis et
            <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Témoignages</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-4 font-light">Ce que nos bénéficiaires disent de nous</p>
          <p class="text-lg opacity-90">Des milliers de mères et d'enfants accompagnés chaque année</p>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full">
          <path fill="#f8fafc" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>

    <!-- SECTION STATISTIQUES DE SATISFACTION -->
    <section class="py-16 px-6 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in satisfactionStats" :key="index" class="text-center">
            <div class="text-3xl lg:text-4xl font-bold text-[#346778] mb-2">{{ stat.number }}</div>
            <div class="text-gray-500 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION AVIS NOTÉS -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <span class="text-[#346778] font-semibold text-sm uppercase tracking-wider bg-[#346778]/10 px-4 py-2 rounded-full inline-block mb-4">
            <i class='bx bx-chalkboard mr-2'></i> Notre réputation
          </span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ils <span class="text-[#42637a]">recommandent</span> DSIMI
          </h2>
          <div class="flex justify-center gap-1 my-4">
            <i class='bx bxs-star text-yellow-400 text-2xl'></i>
            <i class='bx bxs-star text-yellow-400 text-2xl'></i>
            <i class='bx bxs-star text-yellow-400 text-2xl'></i>
            <i class='bx bxs-star text-yellow-400 text-2xl'></i>
            <i class='bx bxs-star text-yellow-400 text-2xl'></i>
          </div>
          <p class="text-gray-600 text-lg">4.8/5 sur plus de 1500 avis vérifiés</p>
          <div class="w-24 h-1 bg-gradient-to-r from-[#42637a] to-[#346778] mx-auto mt-6 rounded-full"></div>
        </div>

        <!-- Filtres -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-5 py-2 rounded-full font-semibold transition-all duration-300',
              activeFilter === filter
                ? 'bg-gradient-to-r from-[#42637a] to-[#346778] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Grille des avis -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in filteredTestimonials"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="flex items-center gap-2 mb-4">
              <div class="flex text-yellow-400">
                <i v-for="star in 5" :key="star" :class="star <= testimonial.rating ? 'bx bxs-star' : 'bx bx-star'"></i>
              </div>
              <span class="text-gray-400 text-sm">{{ testimonial.date }}</span>
            </div>
            <p class="text-gray-600 leading-relaxed mb-5 italic">"{{ testimonial.message }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#42637a] to-[#346778] flex items-center justify-center text-white font-bold text-lg">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-gray-800">{{ testimonial.name }}</h4>
                <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
              </div>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <i class='bx bxs-quote-right text-3xl text-[#346778]/20'></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION AVIS EN VIDÉO / MISE EN AVANT -->
    <section class="py-20 px-6 bg-gray-100">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-[#346778] font-semibold text-sm uppercase tracking-wider bg-[#346778]/10 px-4 py-2 rounded-full inline-block mb-4">
              <i class='bx bx-video-recording mr-2'></i> Témoignage vidéo
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Découvrez le parcours de <span class="text-[#42637a]">Fatima</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              "Grâce à la DSIMI, j'ai pu bénéficier d'un suivi de grossesse exceptionnel et d'un accouchement sécurisé. Je recommande vivement leurs services à toutes les futures mamans."
            </p>
            <div class="flex items-center gap-3 mt-6">
              <div class="flex -space-x-2">
                <div class="w-10 h-10 rounded-full bg-[#42637a] flex items-center justify-center text-white text-xs border-2 border-white">F</div>
                <div class="w-10 h-10 rounded-full bg-[#346778] flex items-center justify-center text-white text-xs border-2 border-white">A</div>
                <div class="w-10 h-10 rounded-full bg-[#2a5a6b] flex items-center justify-center text-white text-xs border-2 border-white">+</div>
              </div>
              <span class="text-gray-500">+500 mamans accompagnées</span>
            </div>
          </div>
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer" @click="playVideo = true">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" alt="Témoignage vidéo" class="w-full h-80 object-cover">
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <i class='bx bx-play text-[#346778] text-3xl'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION FORMULAIRE D'AVIS -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div class="text-center mb-10">
            <i class='bx bx-edit-alt text-5xl text-[#346778] mb-4'></i>
            <h2 class="text-3xl font-bold text-gray-800 mb-3">Partagez votre expérience</h2>
            <p class="text-gray-600">Votre avis nous aide à nous améliorer et à mieux vous servir</p>
          </div>

          <form @submit.prevent="submitReview" class="space-y-6">
            <div class="text-center mb-4">
              <label class="block text-gray-700 font-semibold mb-3">Votre note</label>
              <div class="flex justify-center gap-2">
                <i
                  v-for="star in 5"
                  :key="star"
                  @click="form.rating = star"
                  :class="[
                    'text-3xl cursor-pointer transition-transform hover:scale-110',
                    star <= form.rating ? 'text-yellow-400 bx bxs-star' : 'text-gray-300 bx bx-star'
                  ]"
                ></i>
              </div>
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">Votre avis</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                placeholder="Partagez votre expérience avec nos services..."
              ></textarea>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Nom complet</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                  placeholder="Votre nom"
                >
              </div>
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Votre rôle</label>
                <input
                  v-model="form.role"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                  placeholder="Ex: Jeune maman, Agent de santé..."
                >
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-[#42637a] to-[#346778] text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i class='bx bx-send'></i>
              Envoyer mon avis
            </button>
          </form>

          <div v-if="reviewSubmitted" class="mt-6 p-4 bg-green-50 text-green-700 rounded-xl text-center">
            <i class='bx bx-check-circle mr-2'></i>
            Merci pour votre avis ! Il sera publié après modération.
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION PARTENAIRES -->
    <section class="py-16 px-6 bg-gray-100">
      <div class="container mx-auto max-w-7xl text-center">
        <span class="text-[#346778] font-semibold text-sm uppercase tracking-wider bg-[#346778]/10 px-4 py-2 rounded-full inline-block mb-6">
          <i class='bx bx-building mr-2'></i> Ils nous soutiennent
        </span>
        <h3 class="text-2xl font-bold text-gray-800 mb-10">Nos partenaires de confiance</h3>
        <div class="flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div v-for="partner in partners" :key="partner" class="text-gray-500 text-xl font-semibold">
            {{ partner }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ReviewsPage',
  data() {
    return {
      activeFilter: 'Tous',
      filters: ['Tous', 'Mamans', 'Agents de santé', 'Partenaires'],
      playVideo: false,
      reviewSubmitted: false,
      form: {
        rating: 0,
        message: '',
        name: '',
        role: ''
      },
      satisfactionStats: [
        { number: '98%', label: 'Satisfaction globale' },
        { number: '94%', label: 'Recommanderaient DSIMI' },
        { number: '1500+', label: 'Avis vérifiés' },
        { number: '4.8/5', label: 'Note moyenne' }
      ],
      testimonials: [
        {
          name: 'Aminata Koné',
          role: 'Jeune maman',
          message: 'Un suivi exceptionnel pendant ma grossesse. Les sages-femmes sont à l\'écoute et très professionnelles. Mon bébé est né en pleine santé grâce à leurs conseils.',
          rating: 5,
          date: '15 mars 2024',
          category: 'Mamans'
        },
        {
          name: 'Dr. Kouadio Jean',
          role: 'Agent de santé',
          message: 'Travailler avec la DSIMI a été une expérience enrichissante. Leurs formations sont de qualité et leur engagement pour la santé maternelle est exemplaire.',
          rating: 5,
          date: '02 avril 2024',
          category: 'Agents de santé'
        },
        {
          name: 'Fatou Diomandé',
          role: 'Maman de 2 enfants',
          message: 'Les consultations postnatal sont vraiment bien organisées. Je me sens en confiance à chaque visite. Merci à toute l\'équipe !',
          rating: 4,
          date: '20 mars 2024',
          category: 'Mamans'
        },
        {
          name: 'Ministère de la Santé',
          role: 'Partenaire institutionnel',
          message: 'La DSIMI est un partenaire clé dans la mise en œuvre de la politique nationale de santé maternelle et infantile.',
          rating: 5,
          date: '10 janvier 2024',
          category: 'Partenaires'
        },
        {
          name: 'Christelle Yao',
          role: 'Future maman',
          message: 'Les cours de préparation à l\'accouchement m\'ont beaucoup aidée. Je me sens prête et sereine pour l\'arrivée de mon bébé.',
          rating: 5,
          date: '25 mars 2024',
          category: 'Mamans'
        },
        {
          name: 'Dr. N\'Guessan Paul',
          role: 'Pédiatre',
          message: 'Les protocoles de soins infantiles de la DSIMI sont parmi les meilleurs. Une référence en Côte d\'Ivoire.',
          rating: 4,
          date: '05 février 2024',
          category: 'Agents de santé'
        }
      ],
      partners: ['UNICEF', 'OMS', 'Banque Mondiale', 'Croix-Rouge', 'USAID', 'UNFPA']
    }
  },
  computed: {
    filteredTestimonials() {
      if (this.activeFilter === 'Tous') {
        return this.testimonials
      }
      return this.testimonials.filter(t => t.category === this.activeFilter)
    }
  },
  methods: {
    submitReview() {
      if (this.form.rating === 0) {
        alert('Veuillez donner une note')
        return
      }
      if (!this.form.message || !this.form.name) {
        alert('Veuillez remplir tous les champs')
        return
      }

      // Simulation d'envoi
      this.reviewSubmitted = true
      setTimeout(() => {
        this.reviewSubmitted = false
        this.form = { rating: 0, message: '', name: '', role: '' }
      }, 3000)
    }
  }
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
