<template>
  <div class="layout">
    <main>
      <NavBar />
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
  
  <script>
import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "MainLayout",
  components: {
    NavBar,
    AppFooter,
  },
};
</script>
  
  <style scoped>
.layout {
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1e2328;
}

main {
  flex: 1;
  padding: 2rem;
  margin: 83px 0 0;
  padding: 0;
  background-color: #1e2328;
}
</style>