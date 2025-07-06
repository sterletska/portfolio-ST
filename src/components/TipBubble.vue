<template>
  <!-- The main container for the sticky note. 'group' enables hover effects on children. -->
  <div
    class="tip-bubble-container"
    @mouseenter="showTip = true"
    @mouseleave="showTip = false"
    @focusin="showTip = true"
    @focusout="showTip = false"
  >
    <!-- The trigger element: "? Why" text, styled as a sticky note -->
    <button
      @click="toggleTip"
      aria-expanded="false"
      :aria-describedby="tipId"
      class="sticky-note-button"
      :class="{ 'sticky-note-button-active': showTip }"
      style="font-family: 'Inter', sans-serif"
    >
      <span class="question-mark">?</span>

      <span class="why-text">Why</span>
      <span class="sr-only">Hover or click for more information</span>
    </button>

    <!-- The tip content, styled as a tooltip -->
    <div
      :id="tipId"
      role="tooltip"
      :aria-hidden="!showTip"
      class="tooltip-content"
      :class="{ 'tooltip-content-visible': showTip }"
      :style="{ visibility: showTip ? 'visible' : 'hidden' }"
    >
      <div class="tooltip-arrow"></div>

      {{ tipMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TipBubble",
  props: {
    tipMessage: {
      type: String,
      required: true,
      default: "Here is why i decided to add this element.",
    },
  },
  data() {
    return {
      showTip: false,

      tipId: "tip-bubble-content-" + this._uid,
    };
  },
  methods: {
    toggleTip() {
      this.showTip = !this.showTip;
    },
  },
};
</script>

<style scoped>
/* Base container for the tip bubble, acts as the positioning context for the tooltip */
.tip-bubble-container {
  position: relative;
  display: inline-block;
}

/* Styling for the sticky note button */
.sticky-note-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #fdfbda, #fceb9c);
  color: #333;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  transform: rotate(-3deg);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 0;
  position: relative;
  overflow: hidden;
  outline: none;
}

/* Folded corner effect for the sticky note */
.sticky-note-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;

  border-top: 15px solid rgba(0, 0, 0, 0.1);
  border-right: 15px solid transparent;

  z-index: 1;
}

/* Hover and focus styles for the sticky note button for engaging animation */
.sticky-note-button:hover,
.sticky-note-button:focus {
  transform: scale(1.1) rotate(0deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Focus ring for accessibility */
.sticky-note-button:focus {
  box-shadow: 0 0 0 4px rgba(234, 179, 8, 0.75);
}

/* Styles for the '?' text inside the button */
.question-mark {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
}

/* Styles for the 'Why' text inside the button */
.why-text {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Styling for the tooltip content */
.tooltip-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px) scale(0.95);
  margin-top: 8px;
  width: max-content;
  max-width: 280px;
  padding: 12px;
  background-color: #1f2937;
  color: #ffffff;
  font-size: 0.875rem;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 20;
  pointer-events: none;
}

/* Visible state for the tooltip content */
.tooltip-content-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
  pointer-events: auto;
}

/* Arrow for the tooltip */
.tooltip-arrow {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background-color: #1f2937;
  z-index: -1;
}

/* Hide content while keeping it accessible to screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>