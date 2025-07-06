<template>
  <section
    ref="target"
    :class="isVisible ? 'animate-in' : 'animate-out'"
    class="prototype-link-container"
    style="font-family: 'Philosopher', sans-serif"
  >
    <h2 class="section-title">
      {{ linkContent.sectionTitle || "Lo-fidelity prototype" }}
    </h2>

    <div class="prototype-content-wrapper">
      <div class="text-content">
        <div
          v-for="(block, index) in linkContent.linkBlocks"
          :key="index"
          class="link-block"
        >
          <h4 class="link-heading">{{ block.heading }}</h4>
          <a
            :href="block.url"
            target="_blank"
            rel="noopener noreferrer"
            class="prototype-link"
          >
            {{ block.linkText || "View Prototype" }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="link-icon"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      <div class="image-half">
        <div v-if="linkContent.imageUrl" class="image-wrapper">
          <img
            :src="linkContent.imageUrl"
            :alt="linkContent.imageAlt || 'Prototype screenshot'"
            class="prototype-image"
          />
          <p v-if="linkContent.imageCaption" class="image-caption">
            {{ linkContent.imageCaption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

export default {
  name: "PrototypeLink",
  setup() {
    const { isVisible, target } = useIntersectionObserver();
    return {
      isVisible,
      target,
    };
  },
  props: {
    linkContent: {
      type: Object,
      required: true,
      default: () => ({
        sectionTitle: "Lo-fidelity prototype",
        linkBlocks: [],
        imageUrl: "",
        imageAlt: "",
        imageCaption: "",
      }),
    },
  },
};
</script>

<style scoped>
.prototype-link-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  color: #1e2328;
  text-align: center;
  /*for animation on scroll*/
  opacity: 0;
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

.section-title {
  font-size: 1.5em;
  font-weight: 700;
  font-family: "Philosopher", sans-serif;
  color: #1e2328;
}

.prototype-content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 20px;
}

.text-content {
  flex: 1;
  width: 100%;
  text-align: left;
}

.link-block {
  margin-bottom: 25px;
}

.link-block:last-child {
  margin-bottom: 0;
}

.link-heading {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e2328;
  margin-bottom: 15px;
}

.prototype-link {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(
    42deg,
    rgba(255, 255, 153, 1) 0%,
    rgba(255, 216, 0, 1) 35%,
    rgba(102, 204, 255, 1) 80%,
    rgba(41, 86, 109, 1) 100%
  );
  background-size: 300% 300%;
  color: #1e2328;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.5s ease, background-position 0.5s ease,
    box-shadow 0.3s ease;
  animation: gradientFlow 10s ease infinite;
  transform: scale(1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Nunito Sans", sans-serif;
}

.prototype-link:hover {
  transform: translateY(-3px) scale(1.02);
  background-position: 100% 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.link-icon {
  stroke: #2b6cb0;
  transition: stroke 0.3s ease;
}

.image-half {
  flex: 1;
  width: 100%;
}

.image-wrapper {
  border-radius: 10px;
  overflow: hidden;
}

.prototype-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.image-caption {
  font-size: 0.9rem;
  color: #1e2328;
  text-align: center;
  padding: 10px;
}

/* Desktop layout */
@media (min-width: 769px) {
  .prototype-content-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .text-content,
  .image-half {
    flex: 1;
    max-width: 48%;
  }
}

/* Responsive adjustments for overall container */
@media (max-width: 768px) {
  .prototype-link-container {
    padding: 20px;
  }

  .section-title {
    margin-bottom: 10px;
  }

  .prototype-content-wrapper {
    gap: 20px;
    padding: 15px;
  }

  .link-heading {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .prototype-link {
    font-size: 1rem;
    padding: 8px 12px;
  }

  .image-caption {
    font-size: 0.85rem;
    padding: 8px;
  }
}
</style>