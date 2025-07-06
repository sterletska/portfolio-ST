<template>
  <div class="layout-home">
    <IntroSection />
    <div class="cases">
      <CaseStudyCards />
    </div>
  </div>
</template>
  
  <script>
import IntroSection from "@/components/IntroSection.vue";

import CaseStudyCards from "@/components/CaseStudyCards.vue";

export default {
  name: "HomeView",
  components: {
    IntroSection,
    CaseStudyCards,
  },
};
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