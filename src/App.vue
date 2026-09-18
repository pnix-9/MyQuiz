<script setup>
import Quizzer from "./components/quiz/Quizzer.vue";

const questions = [
  {
    id: "q1",
    marks: 2,
    text: "Which declaration supports both hasNext() and hasPrevious()?",
    options: [
      { id: "a", text: "Iterator<String> iter = empList.iterator();" },
      { id: "b", text: "ListIterator<String> iter = empList.listIterator();" },
      { id: "c", text: "Iterator<String> iter = empList.listIterator();" },
      { id: "d", text: "ListIterator<String> iter = empList.iterator();" }
    ]
  },
   {
    id: "q2",
    marks: 2,
    text: "Which declaration supports both hasNext() and hasPrevious()?",
    options: [
      { id: "a", text: "Iterator<String> iter = empList.iterator();" },
      { id: "b", text: "ListIterator<String> iter = empList.listIterator();" },
      { id: "c", text: "Iterator<String> iter = empList.listIterator();" },
      { id: "d", text: "ListIterator<String> iter = empList.iterator();" }
    ]
  },

   {
    id: "q3",
    marks: 2,
    text: "Which declaration supports both hasNext() and hasPrevious()?",
    options: [
      { id: "a", text: "Iterator<String> iter = empList.iterator();" },
      { id: "b", text: "ListIterator<String> iter = empList.listIterator();" },
      { id: "c", text: "Iterator<String> iter = empList.listIterator();" },
      { id: "d", text: "ListIterator<String> iter = empList.iterator();" }
    ]
  },
]

function handleSubmit(result) {
  console.log("Answers:", result.answers);
  console.log("Flagged:", result.flaggedQuestionIds);
  console.log("Unanswered:", result.unansweredQuestionIds);
}
</script>

<template>
  <Quizzer
    :questions="questions"
    title="Practice Assignment 6"
    module="Week 6 · Java"
    @submit="handleSubmit"
  />
</template>

<style scoped></style>
