<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

import { ref, onMounted } from 'vue'
import wyrServices from './services/wyrServices'


const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// this will store the user's answer once they made a choice

const userSelection = ref('')

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}`
}

onMounted( () => {
  wyrServices.getRandomWYR().then( (wyrData) => {
    // expect data to have a question, and 2 answers
    
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2

  })
})

</script>

<template>
  <div id="app-component">
    <h1>Would you Rather?</h1>
    <WouldYouRather 
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1" 
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection"  
    ></WouldYouRather>

    <p>{{ userSelection }}</p>
  </div>
</template>

<style scoped>
/* child components receive parent styles and are able to override them. */
#app-component {
  background-color: aqua;
}

</style>