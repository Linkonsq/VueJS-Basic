<template>
  <div class="container">
      <div class="row">
          <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Filters & Mixins</h1>
              <p>{{ text | toUppercase }}</p>
              <p>{{ text2 | to-lowercase }}</p>
              <hr>
              <input v-model="filterText">
              <ul>
                  <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
              </ul>
              <hr>
              <app-list></app-list>
          </div>
      </div>
  </div>
</template>

<script>
    import List from "./components/List";
    export default {
        data() {
            return {
                text: 'To Uppercase!',
                text2: 'To Lowercase!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>
</style>
