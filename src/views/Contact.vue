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
            <i class='bx bx-phone-call text-xl'></i>
            <span class="text-sm font-semibold tracking-wide">Prenez contact</span>
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Contactez-
            <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">nous</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-4 font-light">Nous sommes à votre écoute</p>
          <p class="text-lg opacity-90">Une question ? Un besoin ? Notre équipe vous répond dans les meilleurs délais</p>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full">
          <path fill="#f8fafc" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>

    <!-- SECTION CONTACT PRINCIPALE -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-12">

          <!-- FORMULAIRE DE CONTACT -->
          <div class="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div class="mb-8">
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Envoyez-nous un message</h2>
              <p class="text-gray-500">Remplissez le formulaire et nous vous répondrons rapidement</p>
              <div class="w-20 h-1 bg-gradient-to-r from-[#42637a] to-[#346778] mt-4 rounded-full"></div>
            </div>

            <form @submit.prevent="submitContact" class="space-y-5">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Nom complet <span class="text-red-500">*</span></label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                    placeholder="Votre nom"
                  >
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Prénom</label>
                  <input
                    v-model="form.firstname"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                    placeholder="Votre prénom"
                  >
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Email <span class="text-red-500">*</span></label>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                  placeholder="votre@email.com"
                >
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Téléphone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition"
                  placeholder="+225 XX XX XX XX"
                >
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Sujet <span class="text-red-500">*</span></label>
                <select
                  v-model="form.subject"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition bg-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Informations générales">Informations générales</option>
                  <option value="Soins maternels">Soins maternels</option>
                  <option value="Soins infantiles">Soins infantiles</option>
                  <option value="Vaccination">Vaccination</option>
                  <option value="Réclamation">Réclamation</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Message <span class="text-red-500">*</span></label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#346778] focus:ring-2 focus:ring-[#346778]/20 transition resize-none"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-[#42637a] to-[#346778] text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i v-if="!isSubmitting" class='bx bx-send'></i>
                <i v-else class='bx bx-loader-alt bx-spin'></i>
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>

              <div v-if="submitSuccess" class="p-4 bg-green-50 text-green-700 rounded-xl text-center">
                <i class='bx bx-check-circle mr-2'></i>
                Votre message a été envoyé avec succès ! Nous vous répondrons sous 48h.
              </div>

              <div v-if="submitError" class="p-4 bg-red-50 text-red-700 rounded-xl text-center">
                <i class='bx bx-error-circle mr-2'></i>
                Une erreur est survenue. Veuillez réessayer.
              </div>
            </form>
          </div>

          <!-- INFORMATIONS DE CONTACT -->
          <div class="space-y-8">
            <!-- Carte d'adresse -->
            <div class="bg-gradient-to-br from-[#42637a] to-[#346778] rounded-3xl p-8 text-white">
              <div class="flex items-start gap-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i class='bx bx-map text-2xl'></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Notre adresse</h3>
                  <p class="opacity-90">Direction des Soins Infirmiers Maternels et Infantiles</p>
                  <p class="opacity-90">Ministère de la Santé, Plateau</p>
                  <p class="opacity-90">01 BP 1234 Abidjan 01, Côte d'Ivoire</p>
                </div>
              </div>

              <div class="flex items-start gap-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i class='bx bx-phone text-2xl'></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Téléphone</h3>
                  <p class="opacity-90">Standard : <strong>+225 27 20 21 11 11</strong></p>
                  <p class="opacity-90">Numéro vert : <strong>101</strong> (appel gratuit)</p>
                  <p class="opacity-90">Urgences : <strong>+225 27 20 22 33 44</strong></p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i class='bx bx-envelope text-2xl'></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-1">Email</h3>
                  <p class="opacity-90">contact@dsimi.ci</p>
                  <p class="opacity-90">support@dsimi.ci</p>
                  <p class="opacity-90">partenariat@dsimi.ci</p>
                </div>
              </div>
            </div>

            <!-- Horaires d'ouverture -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-[#346778]/10 rounded-xl flex items-center justify-center">
                  <i class='bx bx-time-five text-2xl text-[#346778]'></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800">Horaires d'ouverture</h3>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-600">Lundi - Jeudi</span>
                  <span class="font-semibold text-gray-800">08h00 - 16h30</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-600">Vendredi</span>
                  <span class="font-semibold text-gray-800">08h00 - 15h00</span>
                </div>
                <div class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-gray-600">Samedi - Dimanche</span>
                  <span class="font-semibold text-green-600">Fermé (sauf urgences)</span>
                </div>
                <div class="flex justify-between py-2">
                  <span class="text-gray-600">Permanence maternités</span>
                  <span class="font-semibold text-[#346778]">24h/24 - 7j/7</span>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-[#346778]/10 rounded-xl flex items-center justify-center">
                  <i class='bx bx-share-alt text-2xl text-[#346778]'></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800">Suivez-nous</h3>
              </div>
              <div class="flex gap-4">
                <a href="#" class="w-12 h-12 bg-[#42637a] text-white rounded-xl flex items-center justify-center hover:bg-[#346778] transition-all hover:scale-110">
                  <i class='bx bxl-facebook text-xl'></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#42637a] text-white rounded-xl flex items-center justify-center hover:bg-[#346778] transition-all hover:scale-110">
                  <i class='bx bxl-twitter text-xl'></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#42637a] text-white rounded-xl flex items-center justify-center hover:bg-[#346778] transition-all hover:scale-110">
                  <i class='bx bxl-linkedin text-xl'></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#42637a] text-white rounded-xl flex items-center justify-center hover:bg-[#346778] transition-all hover:scale-110">
                  <i class='bx bxl-youtube text-xl'></i>
                </a>
                <a href="#" class="w-12 h-12 bg-[#42637a] text-white rounded-xl flex items-center justify-center hover:bg-[#346778] transition-all hover:scale-110">
                  <i class='bx bxl-instagram text-xl'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION CARTE GOOGLE MAPS -->
    <section class="py-10 px-6">
      <div class="container mx-auto max-w-7xl">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-6 border-b border-gray-100">
            <h3 class="text-xl font-bold text-gray-800">Localisation de la DSIMI</h3>
            <p class="text-gray-500 text-sm">Ministère de la Santé, Abidjan-Plateau</p>
          </div>
          <div class="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.763385485069!2d-4.014557!3d5.324478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1d8f2d5c3b2a3%3A0x2d5c8f2d5c3b2a3!2sPlateau%2C%20Abidjan%2C%20C%C3%B4te%20d%27Ivoire!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION FAQ RAPIDE / AUTRES CONTACTS -->
    <section class="py-20 px-6 bg-gray-100">
      <div class="container mx-auto max-w-7xl">
        <div class="text-center mb-12">
          <span class="text-[#346778] font-semibold text-sm uppercase tracking-wider bg-[#346778]/10 px-4 py-2 rounded-full inline-block mb-4">
            <i class='bx bx-headphone mr-2'></i> Assistance
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Besoin d'aide <span class="text-[#42637a]">immédiate ?</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#42637a] to-[#346778] mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class='bx bx-phone-call text-2xl text-green-600'></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Numéro vert</h3>
            <p class="text-3xl font-bold text-[#346778] mb-2">101</p>
            <p class="text-gray-500">Appel gratuit 24h/24</p>
          </div>

          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class='bx bx-whatsapp text-2xl text-green-500'></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
            <p class="text-xl font-semibold text-[#346778] mb-2">+225 05 01 02 03 04</p>
            <p class="text-gray-500">Réponse sous 1h</p>
          </div>

          <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class='bx bx-mail-send text-2xl text-purple-600'></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Email prioritaire</h3>
            <p class="text-lg font-semibold text-[#346778] mb-2">urgences@dsimi.ci</p>
            <p class="text-gray-500">Pour les cas urgents</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION NEWSLETTER -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-12 text-center relative overflow-hidden shadow-2xl">
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#42637a]/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-[#346778]/20 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <i class='bx bx-newsletter text-6xl text-[#346778] mb-5'></i>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-3">Restez informés</h3>
            <p class="text-gray-300 mb-8 max-w-lg mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et conseils santé
            </p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="Votre adresse email"
                class="flex-1 px-4 py-3 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#346778]"
              >
              <button
                @click="subscribeNewsletter"
                class="bg-gradient-to-r from-[#42637a] to-[#346778] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                S'abonner
              </button>
            </div>
            <p v-if="newsletterSuccess" class="text-green-400 mt-4 text-sm">
              <i class='bx bx-check-circle'></i> Inscription réussie !
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        firstname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: false,
      newsletterEmail: '',
      newsletterSuccess: false
    }
  },
  methods: {
    async submitContact() {
      // Validation
      if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
        alert('Veuillez remplir tous les champs obligatoires (*)')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.form.email)) {
        alert('Veuillez entrer une adresse email valide')
        return
      }

      this.isSubmitting = true
      this.submitSuccess = false
      this.submitError = false

      // Simulation d'envoi API
      try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        // Ici vous feriez un vrai appel API
        // await axios.post('/api/contact', this.form)

        this.submitSuccess = true
        this.form = {
          name: '',
          firstname: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }

        setTimeout(() => {
          this.submitSuccess = false
        }, 5000)
      } catch (error) {
        this.submitError = true
        setTimeout(() => {
          this.submitError = false
        }, 5000)
      } finally {
        this.isSubmitting = false
      }
    },

    async subscribeNewsletter() {
      if (!this.newsletterEmail) {
        alert('Veuillez entrer votre email')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.newsletterEmail)) {
        alert('Email invalide')
        return
      }

      // Simulation
      await new Promise(resolve => setTimeout(resolve, 500))
      this.newsletterSuccess = true
      this.newsletterEmail = ''
      setTimeout(() => {
        this.newsletterSuccess = false
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

/* Animation pour le spinner Boxicons */
.bx-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
