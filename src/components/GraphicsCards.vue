<template>
  <section class="graphics-cards-container">
    <h2 class="main-heading">{{ heading }}</h2>

    <!-- Section 1: Large Image -->
    <div class="section large-image-section">
      <img
        :src="section1Image.src"
        :alt="section1Image.alt"
        class="large-image"
      />
    </div>

    <!-- Section 2: Four Images -->
    <div class="section four-images-section">
      <div
        v-for="(image, index) in section2Images"
        :key="`sec2-img-${index}`"
        class="image-item"
      >
        <img :src="image.src" :alt="image.alt" class="small-image" />
      </div>
    </div>

    <!-- Section 3: Four Images (Identical to Section 2) -->
    <div class="section four-images-section">
      <div
        v-for="(image, index) in section3Images"
        :key="`sec3-img-${index}`"
        class="image-item"
      >
        <img :src="image.src" :alt="image.alt" class="small-image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GraphicsCards",
  props: {
    heading: {
      type: String,
      default: "Graphics",
    },
    section1Image: {
      type: Object,
      default: () => ({
        src: "https://placehold.co/1200x600/E0F2FE/1F2937?text=Large+Graphic+Design",
        alt: "Large graphic design example",
      }),
    },
    section2Images: {
      type: Array,
      default: () => [
        {
          src: "https://placehold.co/300x200/D1FAE5/1F2937?text=Graphic+1",
          alt: "Graphic design 1",
        },
        {
          src: "https://placehold.co/300x200/D1FAE5/1F2937?text=Graphic+2",
          alt: "Graphic design 2",
        },
        {
          src: "https://placehold.co/300x200/D1FAE5/1F2937?text=Graphic+3",
          alt: "Graphic design 3",
        },
        {
          src: "https://placehold.co/300x200/D1FAE5/1F2937?text=Graphic+4",
          alt: "Graphic design 4",
        },
      ],
    },
    section3Images: {
      type: Array,
      default: () => [
        {
          src: "https://placehold.co/300x200/A7F3D0/1F2937?text=Graphic+5",
          alt: "Graphic design 5",
        },
        {
          src: "https://placehold.co/300x200/A7F3D0/1F2937?text=Graphic+6",
          alt: "Graphic design 6",
        },
        {
          src: "https://placehold.co/300x200/A7F3D0/1F2937?text=Graphic+7",
          alt: "Graphic design 7",
        },
        {
          src: "https://placehold.co/300x200/A7F3D0/1F2937?text=Graphic+8",
          alt: "Graphic design 8",
        },
      ],
    },
  },
};
</script>

<style scoped>
.graphics-cards-container {
  padding: 20px;
  max-width: 1200px;
  color: #1e2328;
  text-align: center;
  font-family: "Inter", sans-serif;
  margin: 0 auto;
}

.main-heading {
  font-size: 1.5em;
  font-weight: 700;
  font-family: "Philosopher", sans-serif;
  color: #1e2328;
  text-align: center;
}

.section {
  margin-bottom: 60px;
  border-radius: 12px;
  overflow: hidden;
}

/* Section 1: Large Image */
.large-image-section {
  max-width: 100%;

  margin: 0 auto;
}

.large-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Sections 2 & 3: Four Images */
.four-images-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 40px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.image-item {
  flex: 1 1 calc(25% - 20px);
  max-width: calc(25% - 20px);
  border-radius: 8px;
  overflow: hidden;
}

.small-image {
  width: 100%;
  height: 250px;
  display: block;
  object-fit: cover;
  border-radius: 8px;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: smooth;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .image-item {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .graphics-cards-container {
    padding: 30px 20px;
    margin: 0 auto;
  }

  .main-heading {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .section {
    margin-bottom: 40px;
    padding: 15px;
  }

  .four-images-section {
    flex-direction: column;
    gap: 15px;
  }

  .image-item {
    flex: 1 1 100%;
    max-width: 100%;
  }

  .small-image {
    height: 230px;
  }
}
@media (min-width: 458px) and (max-width: 767px) {
  .four-images-section {
    align-items: center;
  }
  .small-image {
    height: 250px;
  }
  .image-item {
    max-width: 100%;
  }
}
</style>
