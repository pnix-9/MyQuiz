<script setup>
defineProps({
    isFirstQuetion: Boolean,
    isLastQuestion: Boolean
});

defineEmits(["previous","next", "submit"]);
</script>

<template>
    <footer class="quiz-footer">
    <button
        class="button secondary"
        type="button"
        :disabled="isFirstQuetion"
        @click="$emit('previous')"
    >Previous</button>

     <div class="right-actions">
      <button
        v-if="!isLastQuestion"
        class="button secondary"
        type="button"
        @click="$emit('next')"
      >
        Next
      </button>

      <button class="button primary" type="button" @click="$emit('submit')">
        Submit quiz
      </button>
    </div>
    </footer>
</template>

<style scoped>
.quiz-footer {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 20px clamp(20px, 4vw, 32px);
    border-top: 1px solid #e7ebf0;
    background: #fbfcfe;
}

.right-actions {
    display: flex;
    gap: 12px;
}
.button {
  min-height: 42px;
  padding: 0 18px;
  border-radius: 8px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.primary {
  color: #fff;
  border: 1px solid #8a1538;
  background: #8a1538;
}

.primary:hover {
  background: #6f102d;
}

.secondary {
  color: #344154;
  border: 1px solid #cbd5e1;
  background: #fff;
}

.secondary:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

@media (max-width: 480px) {
  .quiz-footer,
  .right-actions {
    flex-direction: column-reverse;
  }

  .button {
    width: 100%;
  }
}
</style>