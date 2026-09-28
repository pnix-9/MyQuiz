<script setup>
import QuizOption from "./QuizOption.vue";

defineProps({
    question: {
        type: Object,
        required:true,
    },
    questionNumber: {
        type:Number,
        required: true,
    },
    selectedOptionId: {
        type: String,
        default: null,
    },
    isFlagged: {
        type: Boolean,
        default: false,
    }
});

defineEmits(['select-option', "toggle-flag"]);
</script>

<template>
    <article class="question-card">
        <div class="question-meta">
            <span>Question {{ questionNumber }}</span>
            <span>{{ question.marks ?? 1 }} mark{{ question.marks===1 ? "" : "s" }}</span>
        </div>

        <div class="question-title-row">
            <!-- <h2>{{ question.text }}</h2> -->


            <!-- updating here this block-->
             <div class="space-y-5 text-gray-200">
          <template v-for="(item, index) in question.content" :key="index">
            <p v-if="item.type === 'text'" class="text-base md:text-lg font-medium leading-relaxed text-gray-200">
              {{ item.value }}
            </p>

            <!-- Code Illustration Box with White Border (matching mockup) -->
            <div v-else-if="item.type === 'image'" class="w-full overflow-x-auto my-4 p-3 bg-black/90 rounded-xl border-2 border-white/90 shadow-lg">
              <img 
                :src="item.value" 
                alt="Question illustration" 
                class="rounded max-h-64 object-contain mx-auto"
              />
            </div>
          </template>
        </div>
         <!-- updating here this block-->


            <button
                class="flag-button"
                :class="{flagged: isFlagged}"
                type="button"
                @click="$emit('toggle-flag')"
            >
                {{ isFlagged ? "★ Flagged" : "☆ Flag for review" }}   
            </button>
        </div>

        <fieldset class="options">
            <legend class="sr-only">Select an answer</legend>

            <QuizOption
                v-for="(option, index) in question.options"
                :key="option.id"
                :option="option"
                :type="question.type"
                :letter="String.fromCharCode(65+index)"
                :selected="selectedOptionId === option.id"
                @select="$emit('select-option', option.id)"
            />
        </fieldset>
        <button
            v-if="selectedOptionId"
            type="button"
            class="clear-selection"
            @click="$emit('select-option', null)"
        >Clear selection 
        </button>

    </article>
</template>

<style scoped>
.question-card {
  padding: clamp(20px, 4vw, 36px);
}

.question-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
  color: #627083;
  font-size: 0.9rem;
  font-weight: 700;
}

.question-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

h2 {
  max-width: 720px;
  margin: 0;
  color: #172033;
  font-size: clamp(1.12rem, 2.3vw, 1.42rem);
  line-height: 1.55;
}

.flag-button,
.clear-selection {
  border: 0;
  background: transparent;
  color: #8a1538;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.flag-button {
  flex: none;
  white-space: nowrap;
}

.flag-button.flagged {
  color: #a76708;
}

.options {
  display: grid;
  gap: 12px;
  margin: 28px 0 16px;
  padding: 0;
  border: 0;
}

.clear-selection {
  padding: 0;
  color: #59687a;
  font-size: 0.9rem;
  text-decoration: underline;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 620px) {
  .question-title-row {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
