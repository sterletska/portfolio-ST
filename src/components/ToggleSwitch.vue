<template>
    <div class="toggle">
      <label>
        <input type="checkbox" v-model="showRecent" />
        Show Recent / Older
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToggleSwitch',
    data() {
      return {
        showRecent: true
      }
    }
  }
  </script>
  
  <style scoped>
  .toggle {
    margin: 1rem 0;
  }
  </style>
  