<template>
  <footer class="footer">
    <h3 class="footer-heading">
      Let's get in touch &nbsp;
      <a href="mailto:svitlanaterletska15@gmail.com" class="footer-email">
        svitlanaterletska15@gmail.com
      </a>
    </h3>

    <p class="footer-copy">
      &copy; 2025. Svitlana Terletska. All rights reserved
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #1e2328;
  color: #f7f7f7;
  text-align: center;
  padding: 1rem 1.5rem;
  font-family: "Nunito Sans", sans-serif;
}

.footer-heading {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: "Philosopher", sans-serif;
  font-weight: 600;
  color: #f7f7f7;
}

.footer-email {
  display: inline-block;
  font-size: 1rem;
  color: #f7f7f7;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-email:hover {
  color: #66ccff;
  transform: scale(1.03);
}

.footer-copy {
  font-size: 0.7rem;
  color: #ccc;
  margin-top: 1rem;
}
</style>