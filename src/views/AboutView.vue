<template>
  <section class="about-page">
    <div class="bio-section">
      <div class="bio-image-wrapper">
        <img
          src="@/assets/profile-photo.jpg"
          alt="Portrait"
          class="masked-image"
        />
      </div>
      <div class="bio-text">
        <h2>About Me</h2>
        <p>
          Think about your favorite apps or websites—what makes them genuinely
          great? It's often how seamless and intuitive they are, and the real
          value they bring. That's what I specialize in.
        </p>
        <p>
          I'm Svitlana Terletska, a UI/UX designer dedicated to creating
          intuitive, enjoyable, and valuable digital experiences. What
          fundamentally drives me is solving the right problems for users. I
          achieve this by diving deep into user needs and applying a systems
          thinking approach to understand how interconnected elements affect the
          whole, enabling me to design holistic and appropriate solutions.
        </p>
        <p>
          Through user research, I uncover what people really need, then
          translate those insights into practical designs using tools like Figma
          and Adobe XD. My understanding of HTML, CSS, and JavaScript also
          ensures my designs are feasible for development. I'm passionate about
          contributing to meaningful projects and helping build digital products
          that are truly intuitive, human-centered, and engaging.
        </p>
        <p class="thank-you">
          I appreciate you taking the time to learn more about my work. <br />If
          you’re interested in collaborating or have any questions, I invite you
          to connect with me.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-page {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}
/* Background image with reduced opacity */
.about-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("@/assets/Wave-transparent.png");
  background-size: contain;
  background-position: center;
  opacity: 0.02;
  z-index: 0;
  pointer-events: none;
}
.bio-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
}

.bio-image-wrapper {
  flex: 1;
  max-width: 700px;
  position: relative;
}

.masked-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  clip-path: path(
    "M55.7346 40.2811C229.747 -15.5816 281.104 -11.2284 317.107 40.2812C418.354 168.64 387.743 244.631 305.403 302.819C249.015 342.667 177.788 413.563 110.35 336.832C51.1351 269.458 -71.684 95.7342 55.7346 40.2811Z"
  );
  border: none;
}

.bio-text {
  flex: 2;
  min-width: 300px;
  color: #fff;
}

.bio-text h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Philosopher", sans-serif;
}

.bio-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: "Nunito Sans", sans-serif;
}
.thank-you {
  margin-top: 3rem;

  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
}
@media (max-width: 1250px) {
  .bio-section {
    display: flex;
    flex-direction: column;
  }
  .bio-text p,
  .bio-text h2 {
    padding: 0 5rem;
  }
  .bio-text h2 {
    text-align: center;
  }
  @media (max-width: 550px) {
    .bio-section {
      display: flex;
      flex-direction: column;
    }
    .bio-text p,
    .bio-text h2 {
      padding: 0 1rem;
    }
  }
}
</style>