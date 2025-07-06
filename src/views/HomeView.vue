<template>
  <div class="layout-home">
    <IntroSection @scrollToCaseStudies="scrollToCaseStudies"/>
    <div class="cases">
        <!-- <ToggleSwitch /> -->
        <CaseStudyCards />
    </div>
     </div>
  </template>
  
  <script>
  import IntroSection from '@/components/IntroSection.vue'
  /* import ToggleSwitch from '@/components/ToggleSwitch.vue' */
  import CaseStudyCards from '@/components/CaseStudyCards.vue'
  
  export default {
    name: 'HomeView',
    components: {
      IntroSection,
      /* ToggleSwitch, */
      CaseStudyCards
    },
    methods: {
    scrollToCaseStudies() {
      const el = document.getElementById('case-studies');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  }
  </script>

  <style scoped>
  .layout-home {
    margin: 0;
    padding: 0;
  }
  .cases {
    background-color: #fff;
  }
  </style>