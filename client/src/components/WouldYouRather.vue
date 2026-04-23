<script setup>
import { ref, watch } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
  'answer-selected'
])

const choice = ref(null)

// function choiceMade() {
//   // emit envet to tell parent that a user has made a choice
//   emit('answer-selected', choice.value)
// }

// watches for change in v-models
watch(choice, () => { // will watch for v-models with the "choice flag"
  emit('answer-selected', choice.value)
})
</script>

<template>
  <div id="wyr">
    <h2>Make your choice</h2>

    <h3>{{ question }}</h3>
    <div>
      <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1">
      <label for="answer-1">{{ answer1 }}</label>
      
      <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2">
      <label for="answer-2">{{ answer2 }}</label>
    </div>
  </div>
</template>

<style scoped> 
/* applies styles only to this component */
#wyr {
  background-color: green;
}

h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>
