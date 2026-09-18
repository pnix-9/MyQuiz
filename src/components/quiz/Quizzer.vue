<script setup>
import {computed, ref, watch } from "vue";
import QuizQuestion from './QuizQuestion.vue';
import QuizHeader from "./QuizHeader.vue";
import QuestionNavigator from "./QuestionNavigator.vue";
import QuizFooter from "./QuizFooter.vue";

const props = defineProps({
    questions : {
        type: Array,
        required: true,
        default: () => []
    },
    title: {
        type: String,
        default: "Practice Quiz"
    },
    module: {
        type: String,
        default: "Assessment"
    },

});

const emit = defineEmits(["submit"]);

const currentIndex = ref(0);
const answers = ref({});
const flaggedQuestionIds = ref([]);

const currentQuestion = computed(() => props.questions[currentIndex.value] ?? null);

const isFirstQuestion = computed(() => currentIndex.value ===0);
const isLastQuestion = computed(
    () => currentIndex.value === props.questions.length -1
);

function chooseAnswer(optionId) {
    if (!currentQuestion.value) return;
    answers.value[currentQuestion.value.id] = optionId;
}

function goToQuestion(index) {
    if (index >= 0 && index<props.questions.length){
        currentIndex.value = index;
    }
}

function goPrevious() {
    goToQuestion(currentIndex.value -1);
}

function goNext() {
    goToQuestion(currentIndex.value+1);
}

function toggleFlag(questionId){
    const index = flaggedQuestionIds.value.indexOf(questionId);
  if (index === -1) {
    flaggedQuestionIds.value.push(questionId);
  } else {
    flaggedQuestionIds.value.splice(index, 1);
  }
}
function submitQuiz() {
    emit("submit", {
        answers: {...answers.value },
        flaggedQuestionIds: [...flaggedQuestionIds.value],
        unansweredQuestionIds: props.questions
            .filter((question) => !answers.value[question.id])
            .map((question) => question.id)
    });
}
watch(
  () => props.questions.length,
  (length) => {
    if (currentIndex.value >= length) {
      currentIndex.value = Math.max(0, length - 1);
    }
  }
);
</script>
<template>

<QuizHeader
        :title="title"
        :module="module"
        :current-question="currentIndex+1"
        :total-questions="questions.length"
        />
<QuestionNavigator
        :questions="questions"
        :current-index="currentIndex"
        :answers="answers"
        :flagged-question-ids="flaggedQuestionIds"
        @select="goToQuestion"
      />
<QuizQuestion
        :question="currentQuestion"
        :question-number="currentIndex + 1"
        :selected-option-id="answers[currentQuestion.id]"
        :is-flagged="flaggedQuestionIds.includes(currentQuestion.id)"
        @select-option="chooseAnswer"
        @toggle-flag="toggleFlag(currentQuestion.id)"
      />
<QuizFooter
        :is-first-question="isFirstQuestion"
        :is-last-question="isLastQuestion"
        @previous="goPrevious"
        @next="goNext"
        @submit="submitQuiz"
/>
</template>
<style scoped>
.quiz-shell {
  min-height: 100vh;
  padding: clamp(16px, 3vw, 40px);
  background: #f2f5f9;
  color: #182230;
}

.quiz-container {
  width: min(100%, 980px);
  margin: 0 auto;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  border-radius: 16px;
  box-shadow: 0 12px 34px rgb(15 23 42 / 8%);
}

.empty-state {
  width: min(100%, 560px);
  margin: 12vh auto;
  padding: 32px;
  text-align: center;
  background: #fff;
  border-radius: 16px;
}
</style>