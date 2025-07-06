<template>
  <section class="case-study-nav-container">
    <div class="nav-content">
      <!-- Previous Case Study Navigation -->
      <div class="nav-column left-column">
        <h3 class="nav-heading">Previous Case Study</h3>
        <router-link
          v-if="prevCaseStudy"
          :to="prevCaseStudy.link"
          class="case-link"
          @mouseenter="
            showThumbnail(prevCaseStudy.thumbnail, prevCaseStudy.name, $event)
          "
          @mouseleave="hideThumbnail"
          @click.prevent="
            // Prevent default navigation on click
            handleLinkClick(
              prevCaseStudy.thumbnail,
              prevCaseStudy.name,
              prevCaseStudy.link,
              $event
            )
          "
          aria-label="Go to previous case study"
        >
          {{ prevCaseStudy.name }}
        </router-link>
        <span v-else class="no-case-link">No Previous Case Study</span>
      </div>

      <!-- Next Case Study Navigation -->
      <div class="nav-column right-column">
        <h3 class="nav-heading">Next Case Study</h3>
        <router-link
          v-if="nextCaseStudy"
          :to="nextCaseStudy.link"
          class="case-link"
          @mouseenter="
            showThumbnail(nextCaseStudy.thumbnail, nextCaseStudy.name, $event)
          "
          @mouseleave="hideThumbnail"
          @click.prevent="
            // Prevent default navigation on click
            handleLinkClick(
              nextCaseStudy.thumbnail,
              nextCaseStudy.name,
              nextCaseStudy.link,
              $event
            )
          "
          aria-label="Go to next case study"
        >
          {{ nextCaseStudy.name }}
        </router-link>
        <span v-else class="no-case-link">No Next Case Study</span>
      </div>
    </div>

    <!-- Project Thumbnail Modal/Overlay -->
    <div
      v-if="isThumbnailVisible && currentThumbnailUrl"
      class="project-thumbnail-overlay"
      :class="{ 'is-visible': isThumbnailVisible }"
      :style="thumbnailStyle"
      role="dialog"
      aria-modal="true"
      :aria-label="currentThumbnailAlt"
      @mouseenter="clearHideTimeout"
      @mouseleave="hideThumbnail"
    >
      <img
        :src="currentThumbnailUrl"
        :alt="currentThumbnailAlt"
        class="thumbnail-image"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "CaseStudyNav",
  props: {
    prevCaseStudy: {
      type: Object,
      default: null,
    },

    nextCaseStudy: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isThumbnailVisible: false,
      currentThumbnailUrl: "",
      currentThumbnailAlt: "",
      thumbnailStyle: {
        top: "0px",
        left: "0px",
      },
      hideTimeout: null,
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      activeLinkElement: null,
    };
  },
  mounted() {
    // Add a global click listener to dismiss the thumbnail when clicking outside
    document.addEventListener("click", this.globalClickListener);
  },
  beforeUnmount() {
    // Remove the global click listener to prevent memory leaks
    document.removeEventListener("click", this.globalClickListener);
  },
  methods: {
    handleLinkClick(url, alt, link, event) {
      // If the same link is clicked again AND the thumbnail is currently visible for this link
      if (
        this.isThumbnailVisible &&
        this.activeLinkElement === event.currentTarget
      ) {
        this.clearHideTimeout();
        this.isThumbnailVisible = false;
        this.currentThumbnailUrl = "";
        this.currentThumbnailAlt = "";
        this.activeLinkElement = null;
        // Navigate to the link using Vue Router's programmatic navigation
        if (this.$router) {
          this.$router.push(link);
        } else {
          console.warn("Vue Router instance not found. Cannot navigate.");
          // Fallback for environments without Vue Router, though not ideal for a router-link
          window.location.href = link;
        }
      } else {
        // If a different link is clicked, or it's the first click on this link
        this.clearHideTimeout();
        this.showThumbnail(url, alt, event);
        this.activeLinkElement = event.currentTarget;
      }
    },

    showThumbnail(url, alt, event) {
      if (!url) return;
      this.clearHideTimeout();

      this.currentThumbnailUrl = url;
      this.currentThumbnailAlt = alt;
      this.isThumbnailVisible = true;

      // Calculate position relative to the hovered/clicked element
      const linkRect = event.target.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      const thumbnailWidth = this.thumbnailWidth;
      const thumbnailHeight = this.thumbnailHeight;

      let top = linkRect.top - thumbnailHeight + 20;
      let left = linkRect.left + linkRect.width / 2 - thumbnailWidth / 2;

      // Ensure thumbnail stays within viewport bounds
      if (top < 10) {
        top = linkRect.bottom + 20;
      }
      if (left < 10) {
        left = 10;
      }
      if (left + thumbnailWidth > viewportWidth - 10) {
        left = viewportWidth - thumbnailWidth - 10;
      }

      this.thumbnailStyle = {
        top: `${top}px`,
        left: `${left}px`,
        width: `${thumbnailWidth}px`,
        height: "auto",
      };
    },

    hideThumbnail() {
      // Set a timeout to hide the thumbnail after a short delay
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.isThumbnailVisible = false;
        this.currentThumbnailUrl = "";
        this.currentThumbnailAlt = "";
        this.activeLinkElement = null;
      }, 100);
    },

    clearHideTimeout() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    },

    globalClickListener(event) {
      if (this.isThumbnailVisible) {
        const thumbnailOverlay = this.$el.querySelector(
          ".project-thumbnail-overlay"
        );
        const clickedInsideThumbnail =
          thumbnailOverlay && thumbnailOverlay.contains(event.target);
        const clickedInsideActiveLink =
          this.activeLinkElement &&
          this.activeLinkElement.contains(event.target);

        // If click is neither inside the thumbnail nor the active link, hide it
        if (!clickedInsideThumbnail && !clickedInsideActiveLink) {
          this.hideThumbnail();
        }
      }
    },
  },
};
</script>

<style scoped>
.case-study-nav-container {
  max-width: 100vw;
  margin: 0px auto;
  padding: 0 30px;
  position: relative;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-column {
  flex: 1;
  min-width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right-column {
  align-items: flex-end;
}
.left-column {
  align-items: flex-start;
}

.nav-heading {
  font-size: 1.2em;
  font-weight: 700;
  font-family: "Philosopher", sans-serif;
  color: #1e2328;
  margin-bottom: 15px;
  text-align: center;
}

.case-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2b6cb0;
  text-decoration: none;
  padding-top: 10px;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  display: inline-block;
  font-family: "Nunito-Sans", sans-serif;
}

.case-link:hover,
.case-link:focus {
  color: #1e2328;
  transform: translateY(-2px);
}

.no-case-link {
  font-size: 1rem;
  color: #1e2328;
  padding: 8px 15px;
  display: inline-block;
}

/* Thumbnail Overlay Styles */
.project-thumbnail-overlay {
  position: fixed;
  width: 200px;
  height: auto;
  padding: 10px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* Class to make the thumbnail visible and trigger the transition */
.project-thumbnail-overlay.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.thumbnail-image {
  max-width: 100%;
  height: 175px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .case-study-nav-container {
    padding-bottom: 20px;
  }

  .nav-content {
    flex-direction: column;
    align-items: center;
  }

  .nav-column {
    min-width: unset;
    width: 100%;
  }

  .nav-heading {
    font-size: 1.1em;
  }

  .right-column {
    align-items: center;
  }
  .left-column {
    align-items: center;
  }
  .case-link,
  .no-case-link {
    font-size: 1rem;
  }
}
</style>
