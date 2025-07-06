<template>
  <div class="graphics-view-container">
    <GraphicsCards
      :heading="pageHeading"
      :section1Image="heroImage"
      :section2Images="designImages1"
      :section3Images="designImages2"
    />
  </div>
</template>

<script>
import GraphicsCards from "@/components/GraphicsCards.vue";

export default {
  name: "GraphicsView",
  components: {
    GraphicsCards,
  },
  data() {
    return {
      pageHeading: "Graphics",
      heroImage: {
        src: new URL("@/assets/estilo-branding-all.png", import.meta.url).href,
        alt: "Hero shot of a large graphic design project",
      },
      designImages1: [
        {
          src: new URL("@/assets/arbor-homes-logo.png", import.meta.url).href,
          alt: "Branding mockup",
        },
        {
          src: new URL("@/assets/smart-kids-logo.png", import.meta.url).href,
          alt: "Custom icon set",
        },
        {
          src: new URL("@/assets/temaki-logo.png", import.meta.url).href,
          alt: "Digital illustration",
        },
        {
          src: new URL("@/assets/estilo-logo.png", import.meta.url).href,
          alt: "Creative poster design",
        },
      ],
      designImages2: [
        {
          src: new URL("@/assets/card-arbor-homes.png", import.meta.url).href,
          alt: "Web UI element design",
        },
        {
          src: new URL("@/assets/card-smart-kids.png", import.meta.url).href,
          alt: "Mobile app graphic",
        },
        {
          src: new URL("@/assets/card-temaki.png", import.meta.url).href,
          alt: "Informative infographic",
        },
        {
          src: new URL("@/assets/card-estilo.png", import.meta.url).href,
          alt: "Social media graphic",
        },
      ],
    };
  },
};
</script>

<style scoped>
.graphics-view-container {
  background-color: #f7f8f9;
  min-height: 100vh;
}
</style>
