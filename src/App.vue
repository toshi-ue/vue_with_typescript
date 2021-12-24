<template>
  <div class="app">
    <p>{{ name }}: {{ age }}</p>
    <button @click="changeName('45')">change name</button>
    <button @click="changeAge('45')">change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    // const state = reactive({
    //   name: "Link",
    //   age: 25 as number | string,
    // });
    // state.name = ref("Link"); // cannot change type
    // state.age = "26";
    // return { ...toRefs(state) };
    // const name = ref("Link");
    // const age = ref(25) as number | string; // cannot write like this
    // const age = ref<number | string>(25);
    // return { name, age };
  },
  // data() {
  //   return {
  //     name: "hello, Vue With Typescript",
  //     age: 25 as number | string,
  //   };
  // },
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
