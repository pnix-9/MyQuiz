<script setup>
import Quizzer from "./components/quiz/Quizzer.vue";

const Newquestions = [
  {
    id: 1,
    type: 'single',
    content: [
      { type: 'text', value: 'Consider the following JavaScript program, and predict the output after 10 seconds, if executed.' },
      { type: 'image', value: 'https://placeholdit.com/600x400/dddddd/999999' }
    ],
    options: [
      { id: 'a', content: [{type: 'text', value: "Option1"}]},
      { id: 'b', content: [{type: 'text', value: "Option1"}]},
      { id: 'c', content: [{type: 'text', value: "Option1"}]},
      { id: 'd', content: [{type: 'text', value: "Option1"}]},
    ],
    correct_answer_id: ['a']
  },
  {
    id: 2,
    type: 'multiple',
    content: [
      { type: 'text', value: 'Select all frontend frameworks from the list below:' }
    ],
    options: [
      { id: 'a', content: [{type: "text", content: 'Vue.js' },]},
      { id: 'b', content: [{type: "text", content: 'Node.js' },]},
      { id: 'c', content: [{type: "text", content: 'React' },]},
      { id: 'd', content: [{type: "text", content: 'PostgreSQL' }]},
    ],
    correct_answer_id: ['a', 'c']
  },
]
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
    :questions="Newquestions"
    title="Practice Assignment 6"
    module="Week 6 · Java"
    @submit="handleSubmit"
  />
  <router-view></router-view>
</template>

<style scoped></style>
