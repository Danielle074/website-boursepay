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
            <i class='bx bx-question-mark text-xl'></i>
            <span class="text-sm font-semibold tracking-wide ">Questions fréquentes</span>
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Foire Aux
            <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-4 font-light">Tout ce que vous devez savoir sur la DSIMI</p>
          <p class="text-lg opacity-90">Trouvez rapidement des réponses à vos préoccupations</p>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full">
          <path fill="#f8fafc" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>

    <!-- SECTION BARRE DE RECHERCHE -->
    <section class="py-10 px-6 -mt-8 relative z-20">
      <div class="container mx-auto max-w-3xl">
        <div class="relative">
          <i class='bx bx-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher une question..."
            class="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-[#346778] text-gray-700"
          >
        </div>
      </div>
    </section>

    <!-- SECTION CATÉGORIES RAPIDES -->
    <section class="py-8 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2',
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#42637a] to-[#346778] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
            ]"
          >
            <i :class="getCategoryIcon(cat)"></i>
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION FAQ ACCORDÉON -->
    <section class="py-12 px-6">
      <div class="container mx-auto max-w-4xl">
        <div class="space-y-4">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#346778]/10 flex items-center justify-center mt-0.5">
                  <i class='bx bx-help-circle text-[#346778]'></i>
                </div>
                <span class="text-lg font-semibold text-gray-800">{{ faq.question }}</span>
              </div>
              <i
                :class="[
                  'bx text-2xl text-[#346778] transition-transform duration-300',
                  openFaqs.includes(index) ? 'bx-chevron-up' : 'bx-chevron-down'
                ]"
              ></i>
            </button>

            <div
              v-show="openFaqs.includes(index)"
              class="px-6 pb-5 pt-2 border-t border-gray-100"
            >
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <i class='bx bx-check-circle text-green-600'></i>
                </div>
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Message si aucun résultat -->
        <div v-if="filteredFaqs.length === 0" class="text-center py-16">
          <i class='bx bx-search-alt text-6xl text-gray-300 mb-4'></i>
          <p class="text-gray-500 text-lg">Aucune question trouvée pour "{{ searchQuery }}"</p>
          <button @click="resetSearch" class="mt-4 text-[#346778] font-semibold hover:underline">Voir toutes les questions</button>
        </div>
      </div>
    </section>

    <!-- SECTION QUESTIONS FRÉQUENTES PAR CATÉGORIE (AUTRE FORMAT) -->
    <section class="py-16 px-6 bg-gray-100">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">Questions par catégorie</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#42637a] to-[#346778] mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="cat in categories" :key="cat" class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#42637a] to-[#346778] flex items-center justify-center">
                <i :class="getCategoryIcon(cat)" class="text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800">{{ cat }}</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="(faq, idx) in getFaqsByCategory(cat).slice(0, 3)" :key="idx">
                <button @click="scrollToQuestion(faq)" class="text-gray-600 hover:text-[#346778] text-sm text-left flex items-start gap-2 group">
                  <i class='bx bx-right-arrow-alt text-[#346778] mt-0.5 opacity-0 group-hover:opacity-100 transition'></i>
                  <span class="group-hover:underline">{{ faq.question }}</span>
                </button>
              </li>
            </ul>
            <button
              @click="activeCategory = cat; scrollToCategory()"
              class="mt-4 text-[#346778] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
            >
              Voir toutes <i class='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION CONTACT SI NON TROUVÉ -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-12 text-center relative overflow-hidden shadow-2xl">
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#42637a]/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-[#346778]/20 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <i class='bx bx-headphone text-6xl text-[#346778] mb-5'></i>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3">Vous n'avez pas trouvé votre réponse ?</h3>
            <p class="text-gray-300 mb-8 max-w-lg mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-gradient-to-r from-[#42637a] to-[#346778] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
                <i class='bx bx-envelope'></i>
                Nous contacter
              </button>
              <button class="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center">
                <i class='bx bx-phone-call'></i>
                Appeler le 101
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION STATISTIQUES FAQ -->
    <section class="py-12 px-6 bg-gray-100">
      <div class="container mx-auto max-w-6xl text-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div class="text-3xl font-bold text-[#346778]">24/7</div>
            <div class="text-gray-500 text-sm">Support disponible</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#346778]">50+</div>
            <div class="text-gray-500 text-sm">Questions fréquentes</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#346778]">6</div>
            <div class="text-gray-500 text-sm">Catégories</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[#346778]">98%</div>
            <div class="text-gray-500 text-sm">Taux de satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqPage',
  data() {
    return {
      searchQuery: '',
      activeCategory: 'Toutes',
      openFaqs: [],
      categories: ['Toutes', 'Soins maternels', 'Soins infantiles', 'Vaccination', 'Planning familial', 'Formation', 'Administratif'],
      faqs: [
        // Soins maternels
        {
          question: 'Comment bénéficier des soins maternels gratuits ?',
          answer: 'Pour bénéficier des soins maternels gratuits, vous devez vous rendre dans un centre de santé public ou partenaire muni(e) de votre carte d\'identité nationale ou de votre carnet de santé. La DSIMI a mis en place un programme de couverture pour toutes les femmes enceintes en Côte d\'Ivoire.',
          category: 'Soins maternels'
        },
        {
          question: 'Quels sont les soins inclus dans le suivi de grossesse ?',
          answer: 'Le suivi de grossesse comprend : les consultations prénatales (CPN), les échographies, la vaccination antitétanique, la supplémentation en fer et acide folique, les analyses de laboratoire de base, et la préparation à l\'accouchement.',
          category: 'Soins maternels'
        },
        {
          question: 'Où puis-je accoucher gratuitement ?',
          answer: 'Vous pouvez accoucher gratuitement dans tous les centres de santé publics, les hôpitaux généraux, les maternités rurales et les centres de santé partenaires agréés par la DSIMI. La liste complète est disponible dans les directions régionales de la santé.',
          category: 'Soins maternels'
        },
        {
          question: 'Que faire en cas de complications pendant la grossesse ?',
          answer: 'En cas de complications, rendez-vous immédiatement aux urgences de l\'hôpital le plus proche. La DSIMI dispose d\'un système de référence gratuit pour les cas urgents. Vous pouvez également appeler le numéro vert 101 pour une orientation rapide.',
          category: 'Soins maternels'
        },
        // Soins infantiles
        {
          question: 'Comment inscrire mon enfant au programme de suivi infantile ?',
          answer: 'L\'inscription se fait automatiquement à la naissance dans le centre de santé où l\'accouchement a eu lieu. Pour les nouveaux-nés non encore inscrits, présentez-vous dans le centre de santé le plus proche avec le carnet de santé de l\'enfant.',
          category: 'Soins infantiles'
        },
        {
          question: 'Quel est le calendrier des consultations pour les enfants ?',
          answer: 'Le calendrier recommandé est : 1ère semaine (consultation postnatale précoce), 1 mois, 2 mois, 3 mois, 4 mois, 6 mois, 9 mois, 12 mois, 18 mois, 24 mois. Les consultations sont gratuites dans tous les centres publics.',
          category: 'Soins infantiles'
        },
        {
          question: 'Que faire si mon enfant a de la fièvre ?',
          answer: 'En cas de fièvre chez l\'enfant (température > 38°C), consultez immédiatement un centre de santé. Ne donnez pas de médicaments sans avis médical. La DSIMI a formé des agents pour la prise en charge rapide du paludisme et autres maladies fébriles.',
          category: 'Soins infantiles'
        },
        // Vaccination
        {
          question: 'Quel est le calendrier vaccinal des enfants en Côte d\'Ivoire ?',
          answer: 'Le calendrier vaccinal inclut : BCG et Penta (0 mois), Penta 2 et Rota (6 semaines), Penta 3 (10 semaines), Rota 2 (14 semaines), VAR et FHV (9 mois), et vaccins de rappel à 18 mois. La vaccination est entièrement gratuite.',
          category: 'Vaccination'
        },
        {
          question: 'Les vaccins sont-ils gratuits ?',
          answer: 'Oui, tous les vaccins du calendrier élargi de vaccination sont gratuits pour tous les enfants de 0 à 5 ans dans tous les centres de santé publics et les sites de vaccination mobiles.',
          category: 'Vaccination'
        },
        {
          question: 'Où trouver les sites de vaccination mobile ?',
          answer: 'Les sites de vaccination mobile sont annoncés par les relais communautaires et les radios locales. Vous pouvez également contacter le centre de santé de votre quartier ou appeler le 101 pour connaître les prochains sites près de chez vous.',
          category: 'Vaccination'
        },
        // Planning familial
        {
          question: 'Quelles méthodes de contraception sont disponibles ?',
          answer: 'Nous proposons toutes les méthodes modernes : pilules, implants, stérilet, injectables, préservatifs masculins et féminins, méthodes naturelles. La consultation et les méthodes sont gratuites dans les centres publics.',
          category: 'Planning familial'
        },
        {
          question: 'La consultation de planning familial est-elle confidentielle ?',
          answer: 'Oui, la consultation de planning familial est entièrement confidentielle. Vos informations personnelles sont protégées par le secret médical. Vous pouvez consulter en tout anonymat.',
          category: 'Planning familial'
        },
        // Formation
        {
          question: 'Comment devenir agent de santé DSIMI ?',
          answer: 'Pour devenir agent de santé DSIMI, vous devez postuler aux concours de la fonction publique de santé ou suivre les programmes de formation continue organisés par la direction. Les informations sont publiées sur le site du ministère et dans les directions régionales.',
          category: 'Formation'
        },
        {
          question: 'Proposez-vous des formations pour les sages-femmes ?',
          answer: 'Oui, la DSIMI organise régulièrement des formations continues pour les sages-femmes sur les nouvelles techniques d\'accouchement, la réanimation néonatale et la prise en charge des urgences obstétricales.',
          category: 'Formation'
        },
        // Administratif
        {
          question: 'Comment obtenir un certificat de naissance pour mon enfant ?',
          answer: 'Les certificats de naissance sont délivrés par le centre de santé où l\'accouchement a eu lieu, ou par l\'état civil de votre commune. Nous vous conseillons de faire la déclaration dans les 30 jours suivant la naissance.',
          category: 'Administratif'
        },
        {
          question: 'Comment contacter la DSIMI pour une réclamation ?',
          answer: 'Vous pouvez contacter la DSIMI via le numéro vert 101, par email à contact@dsimi.ci, ou en vous rendant dans les bureaux de la direction à Abidjan-Plateau. Un service dédié traite les réclamations sous 48h.',
          category: 'Administratif'
        },
        {
          question: 'Quels sont les horaires d\'ouverture des centres ?',
          answer: 'Les centres de santé sont ouverts de 8h à 16h30 du lundi au vendredi. Les maternités et urgences sont accessibles 24h/24 et 7j/7. Les services de vaccination sont ouverts tous les jours de 8h à 14h.',
          category: 'Administratif'
        }
      ]
    }
  },
  computed: {
    filteredFaqs() {
      let result = this.faqs

      // Filtrer par catégorie
      if (this.activeCategory !== 'Toutes') {
        result = result.filter(f => f.category === this.activeCategory)
      }

      // Filtrer par recherche
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(f =>
          f.question.toLowerCase().includes(query) ||
          f.answer.toLowerCase().includes(query)
        )
      }

      return result
    }
  },
  methods: {
    toggleFaq(index) {
      const position = this.openFaqs.indexOf(index)
      if (position === -1) {
        this.openFaqs.push(index)
      } else {
        this.openFaqs.splice(position, 1)
      }
    },
    getCategoryIcon(category) {
      const icons = {
        'Toutes': 'bx-grid-alt',
        'Soins maternels': 'bx-female-sign',
        'Soins infantiles': 'bx-baby-carriage',
        'Vaccination': 'bx-syringe',
        'Planning familial': 'bx-group',
        'Formation': 'bx-chalkboard',
        'Administratif': 'bx-folder-open'
      }
      return icons[category] || 'bx-question-mark'
    },
    getFaqsByCategory(category) {
      if (category === 'Toutes') return this.faqs
      return this.faqs.filter(f => f.category === category)
    },
    scrollToQuestion(faq) {
      this.activeCategory = faq.category
      this.searchQuery = ''
      this.$nextTick(() => {
        const index = this.filteredFaqs.findIndex(f => f.question === faq.question)
        if (index !== -1 && !this.openFaqs.includes(index)) {
          this.toggleFaq(index)
        }
        window.scrollTo({ top: 400, behavior: 'smooth' })
      })
    },
    scrollToCategory() {
      window.scrollTo({ top: 450, behavior: 'smooth' })
    },
    resetSearch() {
      this.searchQuery = ''
      this.activeCategory = 'Toutes'
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
