<template>
  <!-- Modal Overlay -->
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <!-- Modal Content -->
    <div class="modal-content">
      <button
        class="modal-close-button"
        @click="closeModal"
        aria-label="Close modal"
      >
        &times;
      </button>
      <img :src="imageUrl" :alt="altText" class="modal-image" />
      <p v-if="altText" class="modal-image-caption">{{ altText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },

    imageUrl: {
      type: String,
      default: "",
    },

    altText: {
      type: String,
      default: "Image in modal",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Modal Overlay Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: opacity 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

/* Modal Content Container */
.modal-content {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.9);
  animation: scaleIn 0.3s forwards;
}

/* Close Button Styles */
.modal-close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #1e2328;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.modal-close-button:hover {
  background-color: #f0f0f0;
  color: #1e2328;
}

/* Image Styles within Modal */
.modal-image {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Image Caption Styles */
.modal-image-caption {
  font-size: 0.9rem;
  color: #1e2328;
  text-align: center;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal-content {
    width: 100vw;
    max-width: 100vw;
    height: auto;
    max-height: 100vh;
    padding: 1rem;
    border-radius: 0;
  }

  .modal-close-button {
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
  }

  .modal-image {
    width: 100%;
    height: auto;
    max-height: 70vh;
  }

  .modal-image-caption {
    font-size: 0.8rem;
  }
}
</style>
