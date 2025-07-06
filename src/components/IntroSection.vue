<template>
  <section class="intro bg-intro">
    <!-- Video Container -->
    <div class="video-wrapper">
      <video
        ref="introVideo"
        autoplay
        muted
        playsinline
        @click="togglePlayback"
        class="intro-video"
        @canplay="handleCanPlay"
        @play="updatePlayButton"
        @pause="updatePlayButton"
      >
        <source src="/UXDesignerAtWork.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Always Visible Play/Pause Button -->
      <button
        @click.stop="togglePlayback"
        class="play-btn"
        aria-label="Toggle video"
      >
        {{ isPaused ? "▶" : "⏸" }}
      </button>
    </div>

    <!-- Text + Button Section -->
    <div class="intro-text">
      <p class="fade-in-delay1">
        "Designing thoughtful solutions with strategy and soul".
      </p>

      <h1 class="intro-heading">
        <span
          v-for="(char, index) in headingChars"
          :key="index"
          class="char"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          {{ char }}
        </span>
      </h1>
      <h2 class="myname">
        I’m Svitlana Terletska, <br />
        UX Designer
      </h2>
      <p class="fade-in-delay2">Explore my thought process through design.</p>

      <!--Case Studies Button-->
      <button
        class="case-studies-btn"
        :class="{ 'button-animated': animateButton }"
      >
        Case Studies <br /><span class="scroll">Scroll</span> <br /><img
          src="@/assets/down-arrow.gif"
          class="arrow"
          alt="Animated Down Arrow Icon"
        />
      </button>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "IntroSection",
  computed: {
    headingChars() {
      return "Welcome".split("");
    },
  },
  data() {
    return {
      isPaused: false,
      animateButton: false,
    };
  },
  methods: {
    togglePlayback() {
      const video = this.$refs.introVideo;
      if (!video) return;

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }

      this.updatePlayButton();
    },
    updatePlayButton() {
      const video = this.$refs.introVideo;
      if (!video) return;
      this.isPaused = video.paused;
    },
    handleCanPlay() {
      const video = this.$refs.introVideo;
      video.classList.add("fade-in");
      this.updatePlayButton();

      video.onended = () => {
        this.isPaused = true;
        this.animateButton = true;
      };
    },
  },
};
</script>
  
  <style scoped>
.intro {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100vh;
}

.bg-intro {
  background-color: #1e2328;
}

.video-wrapper {
  position: relative;
  max-width: 40vw;
  width: 100%;
  flex: 1 1 300px;
}

.intro-video {
  width: 100%;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.fade-in {
  opacity: 1;
}

.play-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.3px);
  -webkit-backdrop-filter: blur(3.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.play-btn:hover {
  background-color: rgba(18, 18, 18, 0.9);
  transform: scale(1.1);
}

.intro-text {
  flex: 1 1 300px;
  text-align: center;
  color: #fff;
  font-family: "Nunito Sans", sans-serif;
  position: relative;
  overflow: hidden;
}

.intro-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/Wave.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.04;
  z-index: 0;
}
/* Ensure text content stays on top */
.intro-text > * {
  position: relative;
  z-index: 1;
}
/*my name animation*/
.myname {
  font-family: "Philosopher";
  opacity: 0;
  transform: translateY(30px);
  animation: slideFadeUp 0.8s ease-out forwards;
  animation-delay: 0.8s;
  line-height: 1.5;
}

@keyframes slideFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Heading animation*/
.intro-heading {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: center;
}

.char {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.4s ease-out forwards;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* End of Heading animation*/

.fade-in-delay1 {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 2.5s;
  font-family: "Philosopher";
  font-style: italic;
  margin-bottom: 5em;
}
.fade-in-delay2 {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 1.5s;

  margin: 2em;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/*Case Studies button*/
.case-studies-btn {
  padding: 0.75rem 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #1e2328;
  border: 1px solid white;
  border-radius: 8px;
  cursor: default;
  font-weight: 700;
  transition: background-color 0.3s ease;
  font-family: "Nunito Sans", sans-serif;
  background: linear-gradient(
    42deg,
    rgba(255, 255, 153, 1) 0%,
    rgba(255, 216, 0, 1) 35%,
    rgba(102, 204, 255, 1) 80%,
    rgba(41, 86, 109, 1) 100%
  );

  background-size: 300% 300%;
  transition: transform 0.8s ease, background-position 0.5s ease,
    color 0.3s ease;
}

.case-studies-btn:hover {
  background-position: right center;
  transform: scale(1.05);
  color: #1e2328;
}
.arrow {
  width: 80px;
}
.scroll {
  font-style: italic;
  font-size: 0.9rem;
}
/* Animation triggered after video ends */
.button-animated {
  animation: popAndPulse 0.5s ease-out forwards, gradientFlow 3s ease infinite;
  transform: scale(1);
  background-size: 300% 300%;
}
/* Looping animated background */
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
/* Pop animation */
@keyframes popAndPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.03);
  }
}

/* Responsive stacking on smaller screens */
@media (max-width: 768px) {
  .intro {
    flex-direction: column;
  }

  .video-wrapper {
    max-width: 50vw;
  }

  .intro-text {
    text-align: center;
  }
}
</style>
  
   
  