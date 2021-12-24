<template>
  <div class="app">
    <p>{{ name }}: {{ age }}</p>
    <button @click="changeName('45')">change name</button>
    <button @click="changeAge('45')">change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      name: "hello, Vue With Typescript",
      age: 25 as number | string,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: string | number) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style>
</style>
