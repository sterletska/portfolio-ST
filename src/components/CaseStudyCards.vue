<template>
  <section class="parallax-section"><!-- Parallax background block --></section>
  <section class="case-studies-section">
    <h2 class="section-title">Case Studies</h2>

    <!-- Container for Recent Case Studies -->
    <div
      v-if="showRecent"
      ref="recentCardsContainer"
      class="cards-container recent-layout"
    >
      <div
        class="case-card holographic-card"
        v-for="study in allCaseStudies.slice(0, 3)"
        :key="study.link"
        :style="{ backgroundImage: `url(${study.image})` }"
      >
        <div class="card-content">
          <h3 class="card-title">{{ study.title }}</h3>
          <p class="card-description">{{ study.description }}</p>
          <router-link :to="study.link" class="view-btn view-btn-animated"
            >View Case Study</router-link
          >
        </div>
      </div>
    </div>

    <!-- Container for Older Case Studies -->
    <div
      v-if="!showRecent"
      ref="olderCardsContainer"
      class="cards-container older-layout"
    >
      <div
        class="case-card holographic-card"
        v-for="study in allCaseStudies.slice(3, 5)"
        :key="study.link"
        :style="{ backgroundImage: `url(${study.image})` }"
      >
        <div class="card-content">
          <h3 class="card-title">{{ study.title }}</h3>
          <p class="card-description">{{ study.description }}</p>
          <router-link :to="study.link" class="view-btn view-btn-animated"
            >View Case Study</router-link
          >
        </div>
      </div>
    </div>

    <!-- Toggle Switch for Case Studies -->
    <div class="toggle-switch-container">
      <div class="toggle-knob" :style="knobStyle"></div>
      <!-- The moving background element -->
      <button
        @click="toggleStudies"
        class="toggle-button"
        :class="{ active: showRecent }"
        :aria-pressed="showRecent ? 'true' : 'false'"
      >
        Recent Projects
      </button>
      <button
        @click="toggleStudies"
        class="toggle-button"
        :class="{ active: !showRecent }"
        :aria-pressed="!showRecent ? 'true' : 'false'"
      >
        Older Projects
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";

export default {
  name: "CaseStudyCards",
  setup() {
    const recentCardsContainer = ref(null);
    const olderCardsContainer = ref(null);
    const showRecent = ref(true);
    let observer = null;

    // Reactive style for the toggle knob
    const knobStyle = ref({
      left: "0%",
      backgroundColor: "#3e4246",
      borderRadius: "5px 5px 5px 5px",
    });

    const allCaseStudies = [
      {
        title: "Rabbitry Responsive Website",
        description:
          "Designed a user-friendly, responsive website to simplify bunny adoption and educate users on proper care.",
        image: new URL("@/assets/Rabbitry2.png", import.meta.url).href,
        link: "/case-study/rabbitry",
      },
      {
        title: "Budgeting App and Website",
        description:
          "Designed a budgeting tool that integrates with user accounts, supports goal setting, and offers flexible, visual budgeting options for diverse financial needs.",
        image: new URL("@/assets/Budgeting.png", import.meta.url).href,
        link: "/case-study/budgeting",
      },
      {
        title: "Vacation Planner Mobile App",
        description:
          "A vacation planner app that helps users organize trips, save places, and view distances from their hotel or current location for smarter, time-efficient travel decisions.",
        image: new URL("@/assets/Vacation2.png", import.meta.url).href,
        link: "/case-study/vacation",
      },
      {
        title: "Medical Treatment Cost Feature Design",
        description:
          "Redesigned an insurance platform to improve cost transparency, accuracy, and user experience in estimating medical expenses",
        image: new URL("@/assets/medical-caseStudy.png", import.meta.url).href,
        link: "/case-study/medical",
      },
      {
        title: "Real Estate Mobile Application",
        description:
          "A real estate platform that streamlines home search with location insights, commute data, and smart filters for faster, informed decisions.",
        image: new URL("@/assets/realestate-mockup.png", import.meta.url).href,
        link: "/case-study/real-estate",
      },
    ];

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      let currentContainer = showRecent.value
        ? recentCardsContainer.value
        : olderCardsContainer.value;

      if (currentContainer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              } else {
                entry.target.classList.remove("visible");
              }
            });
          },
          { threshold: 0.2 }
        );

        const cards = currentContainer.querySelectorAll(".case-card");
        cards.forEach((card) => observer.observe(card));
      }
    };

    onMounted(() => {
      setupObserver();
    });

    // Watch for changes in showRecent to update knob style and re-setup observer
    watch(showRecent, (newValue) => {
      if (newValue) {
        // Showing Recent
        knobStyle.value.left = "0%";
        knobStyle.value.backgroundColor = "#3e4246"; //  for Recent
        knobStyle.value.borderRadius = "5px 5px 5px 5px";
      } else {
        // Showing Old
        knobStyle.value.left = "50%";
        knobStyle.value.backgroundColor = "#3e4246"; //  for Old
        knobStyle.value.borderRadius = "5px 5px 5px 5px";
      }
      // Re-setup observer after DOM updates due to v-if changing
      setTimeout(() => {
        setupObserver();
      }, 50);
    });

    onBeforeUnmount(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    const toggleStudies = () => {
      showRecent.value = !showRecent.value;
    };

    return {
      recentCardsContainer,
      olderCardsContainer,
      allCaseStudies,
      showRecent,
      toggleStudies,
      knobStyle,
    };
  },
};
</script>

<style scoped>
/* Parallax section styles */
.parallax-section {
  height: 8vh;
  background-image: url("@/assets/parallax-image2.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.parallax-section::after {
  content: "";
  position: absolute;
  inset: 0;
}

/*Case Studies Section*/
.case-studies-section {
  padding: 5rem 4rem;
  background: #f7f8f9;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: "Philosopher", sans-serif;
  text-align: center;
}

/* Toggle Switch Container */
.toggle-switch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 1);
}

.toggle-knob {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;

  transition: left 0.3s ease, background-color 0.3s ease,
    border-radius 0.3s ease;
  z-index: 1;
}

.toggle-button {
  flex: 1;
  padding: 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Nunito Sans", sans-serif;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;
  z-index: 2;
  position: relative;
  color: #1e2328;
}

.toggle-button.active {
  color: #ffffff;
}

/* Base styles for both cards containers */
.cards-container {
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  padding: 20px 0;
}

/* Styles for the Recent Projects Layout (Grid) */
.cards-container.recent-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Styles for the Older Projects Layout (Flexbox) */
.cards-container.older-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  gap: 40px;
}

/*Case Study card styles (general for all cards) */
.case-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Specific styles for cards within the older projects layout */
.cards-container.older-layout .case-card {
  width: 500px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
}

/*holographic effect on hover */
.case-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg,
    transparent,
    transparent 30%,
    rgba(41, 86, 109, 0.2)
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}

.case-card:hover::before,
.case-card:active::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}

/* Animate when visible */
.case-card.visible {
  opacity: 1;
  transform: translateY(0);
}
.case-card:hover,
.case-card:active {
  transform: translateY(-8px) rotateX(2deg) rotateY(2deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.63);
  background-color: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
  color: #1e2328;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 0.5rem;
  text-align: center;
  max-width: 90%;
}

.card-description {
  font-size: 0.95rem;
  font-family: "Nunito Sans", sans-serif;
  color: #1e2328;
  margin-bottom: 1rem;
  max-width: 90%;
}

/* View Case Study Button */
.view-btn {
  display: inline-block;
  margin-top: auto;

  position: relative;
  z-index: 0;
  overflow: hidden;
  border: 3px solid transparent;

  padding: 0.5rem 1rem;
  color: #1e2328;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-family: "Nunito Sans", sans-serif;
  transition: background-color 0.3s ease;
  background: linear-gradient(
    42deg,
    rgba(255, 255, 153, 1) 0%,
    rgba(255, 216, 0, 1) 35%,
    rgba(102, 204, 255, 1) 80%,
    rgba(41, 86, 109, 1) 100%
  );
  background-size: 300% 300%;
  transition: transform 0.5s ease, background-position 0.5s ease,
    color 0.3s ease;
}
.view-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transition: none;
  z-index: 1;
}

.view-btn:hover::before {
  animation: border-trace 1.3s linear;
}

@keyframes border-trace {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Looping animated background */
.view-btn-animated {
  animation: gradientFlow 10s ease infinite;
  transform: scale(1.05);
  background-size: 300% 300%;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .case-studies-section {
    padding: 60px 15px;
  }

  .section-title {
    font-size: 1.8em;
    margin: 10px;
  }

  /* Toggle Switch Responsive adjustments */
  .toggle-switch-container {
    width: 200px;
    height: 40px;
  }

  .toggle-button {
    font-size: 0.9rem;
    word-wrap: break-word;
    padding: 8px 0;
  }

  .cards-container {
    gap: 30px;
    max-width: 100%;
  }

  /* Recent layout on mobile */
  .cards-container.recent-layout {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .case-card {
    height: 450px;
  }

  /* Adjust older projects layout for mobile to stack */
  .cards-container.older-layout {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    gap: 30px;
  }

  /* Specific card styles for older projects on mobile */
  .cards-container.older-layout .case-card {
    width: calc(100% - 30px);
    max-height: 450px;
    background-size: contain;
  }

  .card-title {
    font-size: 1.4em;
  }

  .card-description {
    font-size: 0.9em;
  }

  .view-btn {
    padding: 10px 20px;
    font-size: 0.9em;
  }
}
</style>
