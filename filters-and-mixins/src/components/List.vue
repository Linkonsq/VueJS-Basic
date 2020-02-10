<template>
    <div>
        <h1>Filters & Mixins</h1>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from "../fruitMixin";

    export default {
        mixins: [fruitMixin]
    }
</script>

<style>
</style>
