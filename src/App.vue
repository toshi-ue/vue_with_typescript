<template>
  <div class="app">
    <header>
      <p style="text-align: center">
        <a
          id="github-link"
          href="https://github.com/toshi-ue/vue_with_typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          <span class="github-content"> GitHub Repository </span>
          <font-awesome-icon :icon="['fa', 'external-link-alt']" size="xs" />
        </a>
      </p>
      <h1>Hyrule Jobs</h1>
      <button @click="handleClick('title')">order by title</button>
      <button @click="handleClick('salary')">order by salary</button>
      <button @click="handleClick('location')">order by location</button>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import Job from "./types/job";
import OrderTerm from "./types/OrderTerm";
import JobList from "./components/JobList.vue";

export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "farm worker",
        location: "lon lon ranch",
        salary: 30000,
        id: "1",
      },
      {
        title: "quarryman",
        location: "death mountain",
        salary: 40000,
        id: "2",
      },
      {
        title: "flute player",
        location: "the lost woods",
        salary: 35000,
        id: "3",
      },
      { title: "fisherman", location: "lake hylia", salary: 21000, id: "4" },
      {
        title: "prison guard",
        location: "gerudo valley",
        salary: 32000,
        id: "5",
      },
    ]);

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
});
</script>

<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
#github-link {
  color: black;
  text-decoration: none;
}
.github-content {
  font-size: 1.3rem;
}
</style>
