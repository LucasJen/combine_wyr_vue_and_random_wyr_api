<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

import { ref } from 'vue'

const wyrQuestion = ref('Live in a house shaped like a triangle or a house shaped like a circle?')
const wyrAnswer1 = ref('Triangle house')
const wyrAnswer2 = ref('Circle house')

// this will store the user's answer once they made a choice

const userSelection = ref('')

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}`
}


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