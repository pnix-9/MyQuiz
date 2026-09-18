<script setup>
defineProps({
  questions: {
    type: Array,
    required: true
  },
  currentIndex: {
    type: Number,
    required: true
  },
  answers: {
    type: Object,
    required: true
  },
  flaggedQuestionIds: {
    type: Array,
    required: true
  }
});

defineEmits(["select"]);
</script>

<template>
  <nav class="question-nav" aria-label="Question navigation">
    <span class="nav-label">Questions</span>

    <div class="question-pills">
      <button
        v-for="(question, index) in questions"
        :key="question.id"
        class="question-pill"
        :class="{
          active: index === currentIndex,
          answered: answers[question.id],
          flagged: flaggedQuestionIds.includes(question.id)
        }"
        :aria-label="`Go to question ${index + 1}`"
        :aria-current="index === currentIndex ? 'step' : undefined"
        @click="$emit('select', index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.question-nav {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px clamp(20px, 4vw, 32px);
  border-bottom: 1px solid #e7ebf0;
}

.nav-label {
  flex: none;
  font-size: 0.88rem;
  font-weight: 700;
  color: #526071;
}

.question-pills {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 3px;
  scrollbar-width: thin;
}

.question-pill {
  position: relative;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #334155;
  background: #fff;
  font-weight: 700;
  cursor: pointer;
}

.question-pill:hover {
  border-color: #8a1538;
  color: #8a1538;
}

.question-pill.active {
  color: #fff;
  background: #8a1538;
  border-color: #8a1538;
}

.question-pill.answered:not(.active) {
  background: #ecfdf3;
  border-color: #6cc58a;
  color: #176b36;
}

.question-pill.flagged::after {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e9a23b;
  content: "";
}
</style>