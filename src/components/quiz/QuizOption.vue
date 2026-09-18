<script setup>
defineProps({
    option: {
        type: Object,
        required:true
    },
    letter: {
        type: String,
        default: ""
    },
    selected : {
        type : Boolean,
        default: false
    },
});
</script>

<template>
    <label class="option" :class="{ selected }">
        <input
            type="radio"
            :name = "`question-${option.questionId ?? 'current'}`"
            :checked="selected"
            @change="$emit('select')"
        />

        <span class="option-letter">{{ letter }}</span>
        <span class="option-text">{{ option.text }}</span>
    </label>
</template>

<style scoped>
</style>