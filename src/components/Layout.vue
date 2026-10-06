<template>
  <div class="font-sans text-gray-800">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-100"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3 group">
          <img :src="logo" alt="BoursePay Logo" class="h-22 w-auto" />
        </RouterLink>

        <!-- Menu desktop -->
        <ul class="hidden md:flex space-x-8 font-semibold">
          <li>
            <RouterLink to="/" class="nav-link text-lg md:text-xl">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/a-propos" class="nav-link text-lg md:text-xl">À propos</RouterLink>
          </li>
          <li>
            <RouterLink to="/features" class="nav-link text-lg md:text-xl"
              >Fonctionnalités</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/usagers" class="nav-link text-lg md:text-xl">Usagers</RouterLink>
          </li>
        </ul>

        <div class="hidden md:flex items-center space-x-4">
          <!-- Sélecteur de langue -->
          <div class="relative">
            <button
              @click="showLang = !showLang"
              class="flex items-center space-x-2 border border-gray-300 px-3 py-2 rounded-xl hover:border-[#19965C] transition"
            >
              <span class="font-semibold">{{ selectedLang }}</span>
              <i class="bx bx-chevron-down text-gray-500 text-lg"></i>
            </button>

            <div
              v-if="showLang"
              class="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden w-28 z-50"
            >
              <button
                v-for="lang in ['FR', 'EN']"
                :key="lang"
                @click="selectLang(lang)"
                class="block w-full text-left px-4 py-2 hover:bg-[#e8f5ee] text-gray-700 font-medium transition"
              >
                {{ lang }}
              </button>
            </div>
          </div>

          <!-- ✅ Bouton Connexion → redirige vers le lien externe -->
          <a
            href="https://boursepay.diplomatie.gouv.ci/connexion"
            target="_blank"
            rel="noopener"
          >
            <button
              class="bg-[#19965C] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#FA8002] hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#19965C] focus:ring-offset-2"
            >
              <span>Connexion</span>
              <i class="bx bx-chevron-right text-lg"></i>
            </button>
          </a>
        </div>

        <!-- Menu mobile -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#19965C] focus:ring-offset-2"
        >
          <i v-if="!isOpen" class="bx bx-menu text-2xl text-gray-700"></i>
          <i v-else class="bx bx-x text-2xl text-gray-700"></i>
        </button>
      </div>

      <!-- Menu mobile déroulant -->
      <div
        v-if="isOpen"
        class="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-100 px-6 py-4"
      >
        <ul class="space-y-4 font-semibold">
          <li><RouterLink to="/" class="mobile-link">Accueil</RouterLink></li>
          <li><RouterLink to="/a-propos" class="mobile-link">À propos</RouterLink></li>
          <li>
            <RouterLink to="/fonctionnalites" class="mobile-link">Fonctionnalités</RouterLink>
          </li>
          <li><RouterLink to="/usagers" class="mobile-link">Usagers</RouterLink></li>

          <!-- Sélecteur langue mobile -->
          <li class="pt-3 border-t border-gray-200 flex space-x-3 items-center">
            <span class="text-gray-700 font-medium">Langue :</span>
            <button
              v-for="lang in ['FR', 'EN']"
              :key="lang"
              @click="selectLang(lang)"
              class="px-3 py-1 border rounded-lg font-semibold"
              :class="
                selectedLang === lang
                  ? 'bg-[#19965C] text-white border-[#19965C]'
                  : 'bg-gray-100 text-gray-700 border-gray-200'
              "
            >
              {{ lang }}
            </button>
          </li>

          <!-- ✅ Bouton Connexion mobile → redirige vers le lien externe -->
          <li class="pt-3">
            <a
              href="https://boursepay.diplomatie.gouv.ci/connexion"
              target="_blank"
              rel="noopener"
              @click="isOpen = false"
            >
              <button
                class="w-full bg-[#19965C] text-white text-base font-bold px-4 py-3 rounded-xl hover:bg-[#FA8002] hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
              >
                <i class="bx bx-log-in text-lg"></i>
                <span>Connexion</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Espace pour la navbar -->
    <div></div>

    <main class="min-h-screen">
      <RouterView />
    </main>

    <!-- Footer BoursePay -->
    <footer class="bg-[#19965C] text-white relative overflow-hidden mt-20">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <!-- Section principale du footer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- Colonne 1 - Logo et description -->
          <div class="animate-fade-in-up">
            <div
              class="flex items-center space-x-3 mb-4 transform transition-transform hover:scale-105 duration-300"
            >
              <img :src="logo" alt="BoursePay Logo" class="h-10 w-auto bg-white shadow-2xl rounded-3xl" />
              <div>
                <h2 class="text-xl font-bold text-white">BoursePay</h2>
                <p class="text-[#FA8002] text-xs font-semibold">Paiements & Bourses Simplifiés</p>
              </div>
            </div>
            <p class="text-white/90 mb-4 leading-relaxed text-sm">
              BoursePay est votre partenaire de confiance pour la gestion des paiements, bourses et
              aides financières. Nous simplifions vos transactions en toute sécurité.
            </p>
            <!-- ✅ Icônes sociales → RouterLink vers /construction -->
            <div class="flex space-x-3">
              <RouterLink
                to="/construction"
                class="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center hover:bg-[#FA8002] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-linkedin text-sm text-white"></i>
              </RouterLink>
              <RouterLink
                to="/construction"
                class="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center hover:bg-[#FA8002] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-github text-sm text-white"></i>
              </RouterLink>
              <RouterLink
                to="/construction"
                class="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center hover:bg-[#FA8002] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-twitter text-sm text-white"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Colonne 2 - Services -->
          <div class="animate-fade-in-up" style="animation-delay: 0.1s">
            <h3 class="font-bold text-lg mb-4 text-white border-l-4 border-[#FA8002] pl-3">
              Nos Services
            </h3>
            <!-- ✅ Liens services → RouterLink vers /construction -->
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/construction"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                >
                  <i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Paiements en ligne
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/construction"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                >
                  <i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Gestion des bourses
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/construction"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                >
                  <i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Transferts sécurisés
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/construction"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                >
                  <i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Aides financières
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 3 - Liens utiles -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h3 class="font-bold text-lg mb-4 text-white border-l-4 border-[#FA8002] pl-3">
              Liens utiles
            </h3>
            <ul class="space-y-2">
              <li>
                <RouterLink
                  to="/"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                  ><i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i
                  >Accueil</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/a-propos"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                  ><i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i
                  >À propos</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/fonctionnalites"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                  ><i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i
                  >Fonctionnalités</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/usagers"
                  class="text-white/90 hover:text-[#FA8002] transition-all duration-300 flex items-center group text-sm"
                  ><i
                    class="bx bx-chevron-right text-[#FA8002] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i
                  >Usagers</RouterLink
                >
              </li>
            </ul>
          </div>

          <!-- Colonne 4 - Contact -->
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <h3 class="font-bold text-lg mb-4 text-white border-l-4 border-[#FA8002] pl-3">
              Contactez-nous
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3 text-white/90 text-sm">
                <i class="bx bx-envelope text-[#FA8002] text-lg mt-0.5"></i>
                <span>contact@boursepay.com</span>
              </li>
              <li class="flex items-start space-x-3 text-white/90 text-sm">
                <i class="bx bx-phone text-[#FA8002] text-lg mt-0.5"></i>
                <span>+225 XX XX XX XX XX</span>
              </li>
              <li class="flex items-start space-x-3 text-white/90 text-sm">
                <i class="bx bx-map text-[#FA8002] text-lg mt-0.5"></i>
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div
          class="bg-[#FA8002] rounded-xl p-6 mb-8 shadow-2xl transform transition-all duration-500 hover:scale-105"
        >
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="mb-4 lg:mb-0 lg:mr-6 text-center lg:text-left">
              <h3 class="text-xl font-bold text-white mb-1">Restez informé</h3>
              <p class="text-white/90 text-sm">Recevez nos dernières actualités et conseils</p>
            </div>
            <div class="flex-1 max-w-md w-full">
              <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  class="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-sm"
                />
                <button
                  class="bg-white text-[#19965C] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm"
                >
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-white/20 pt-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-white/80 text-sm mb-3 md:mb-0 text-center md:text-left">
              <p>&copy; 2026 BoursePay. Tous droits réservés.</p>
            </div>
            <!-- ✅ Liens légaux → RouterLink vers /construction -->
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <RouterLink
                to="/construction/mentions-legales"
                class="text-white/80 hover:text-[#FA8002] transition-all duration-300"
              >
                Mentions légales
              </RouterLink>
              <RouterLink
                to="/construction/confidentialite"
                class="text-white/80 hover:text-[#FA8002] transition-all duration-300"
              >
                Confidentialité
              </RouterLink>
              <RouterLink
                to="/construction/cgu"
                class="text-white/80 hover:text-[#FA8002] transition-all duration-300"
              >
                CGU
              </RouterLink>
              <RouterLink
                to="/construction/cookies"
                class="text-white/80 hover:text-[#FA8002] transition-all duration-300"
              >
                Cookies
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import logo from '../assets/images/logoboursepay.png'

const isOpen = ref(false)
const showLang = ref(false)
const selectedLang = ref('FR')

const selectLang = (lang: string) => {
  selectedLang.value = lang
  showLang.value = false
  console.log(`Langue changée en : ${lang}`)
}
</script>

<style scoped>
.nav-link {
  color: #4a5568;
  transition: all 0.3s;
  position: relative;
}
.nav-link:hover {
  color: #19965c;
  transform: scale(1.05);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #fa8002;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-link {
  display: block;
  text-align: left;
  color: #4a5568;
  transition: 0.3s;
  padding: 0.5rem 0;
}

.mobile-link:hover {
  color: #19965c;
  transform: translateX(5px);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
