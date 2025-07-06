<template>
  <section
    ref="target"
    :class="isVisible ? 'animate-in' : 'animate-out'"
    class="description-section"
  >
    <div class="description-wrapper">
      <h2>Description</h2>

      <div class="decoration">
        <!-- SVG Blob -->
        <svg
          class="blob-svg"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
        >
          <circle cx="40" cy="40" r="40" fill="#ff97b8" />
        </svg>
        <div class="line-container">
          <div class="growing-line"></div>
        </div>
      </div>

      <div class="description-container">
        <!-- Text Section (Table) -->
        <dl class="description-list">
          <div
            v-for="(item, index) in descriptionData.tableData"
            :key="index"
            class="description-row"
          >
            <dt>{{ item.label }}</dt>
            <dd class="list-text">{{ item.value }}</dd>
          </div>
        </dl>

        <!-- Image Section -->
        <div class="description-image">
          <img
            :src="descriptionData.imageSrc"
            :alt="descriptionData.imageAlt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

export default {
  name: "DescriptionSection",
  setup() {
    const { isVisible, target } = useIntersectionObserver();
    return {
      isVisible,
      target,
    };
  },
  props: {
    descriptionData: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          Object.prototype.hasOwnProperty.call(value, "tableData") &&
          Array.isArray(value.tableData) &&
          Object.prototype.hasOwnProperty.call(value, "imageSrc") &&
          typeof value.imageSrc === "string" &&
          Object.prototype.hasOwnProperty.call(value, "imageAlt") &&
          typeof value.imageAlt === "string"
        );
      },
    },
  },
};
</script>

<style scoped>
.description-section {
  opacity: 0;
  padding: 20px;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;
}
.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.animate-out {
  opacity: 0;
  transform: translateY(40px);
}
.description-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 1.5em;
  font-weight: 700;
  font-family: "Philosopher", sans-serif;
  color: #1e2328;
  text-align: center;
}

.decoration {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 900px;
}
/*Line animation*/
.line-container {
  flex-grow: 1;
  height: 1px;
  overflow: hidden;
  position: relative;
}

.growing-line {
  width: 0;
  height: 100%;
  background-color: rgba(255, 151, 184, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  animation: growLine 1s linear forwards;
  animation-delay: 2s;
}

@keyframes growLine {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

/*Blob animation*/
.blob-svg {
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  z-index: 1;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 2.1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.description-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  font-family: "Nunito Sans", sans-serif;
  line-height: 1.6;
  font-size: 1.1rem;
}

.description-list {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  padding: 25px;
}

.description-row {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 10px;
}

.description-row:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

dt {
  font-weight: bold;
  color: #1e2328;
  flex: 0 0 120px;
  margin-right: 20px;
}

dd {
  flex: 1;
  color: #1e2328;
  line-height: 1.6;
  margin-left: 0;
}

.description-image {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
}

.description-image img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .description-container {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .description-list,
  .description-image {
    width: 90%;
    min-width: unset;
  }
}
</style>
