import Vue from 'vue'
import App from './App.vue'

// Using event bus for communication
export const eventBus = new Vue({
  // Centralizing code in event
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
