import { createRouter, createWebHistory } from "vue-router";

//  Pages publiques
import Layout from "@/components/Layout.vue";
import Home from "@/views/Home.vue";
import Features from "@/views/Features.vue";
import Apropos from "@/views/Apropos.vue";
import Testimonials from "@/views/Testimonials.vue";
import Usagers from "@/views/Usagers.vue";
import Faq from "@/views/Faq.vue";
import Contact from "@/views/Contact.vue";
import Construction from "@/views/Construction.vue";




const routes = [
  // Site public
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", name: "Home", component: Home },
      { path: "features", name: "Features", component: Features },
      { path: "a-propos", name: "Apropos", component: Apropos },
      { path: "testimonials", name: "Testimonials", component: Testimonials },
      { path: "faq", name: "Faq", component: Faq },
      { path : "contact", name: "Contact", component: Contact},
      { path : "construction", name: "Construction", component: Construction},
      { path : "usagers", name: "Usagers", component: Usagers}
    ],
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
