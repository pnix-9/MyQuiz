<script setup>
defineProps({
    title: String,
    module: String,
    currentQuestion: Number,
    totalQuestions: Number,
})

</script>

<template>
    <header class="quiz-header">
        <div>
            <p class="eyebros">{{ module }}</p>
            <h1>{{ title }}</h1>
        </div>

        <p class="progress">
            Question <strong>{{ currentQuestion }}</strong> / {{ totalQuestions }}
        </p>
    </header>
</template>

<style scoped>
.quiz-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: clamp(20px, 4vw, 32px);
    color: #333c23;
    background: linear-gradient(315deg, #8a1538, #b52452);
}
.eyebrow {
  margin: 0 0 6px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.8;
}
h1 {
    margin: 0;
    font-size: clamp(1.35rem, 3vw,2rem);
}

.progress {
    flex: none;
    margin:  5px 0 0;
    font-size: 0.85rem;
    white-space: nowrap;
}

@media (max-width: 540px) {
    .quiz-header {
        flex-direction: row;
    }
}
</style>