<template>
    <div class="pizzas-view--container">
      <input 
        v-model="search" 
        placeholder="Search for a pizza" 
        data-testid="search-input"
      />
      <ul>
        <li v-for="pizza in searchResults" :key="pizza.id">
          <PizzaCard :pizza="pizza" />
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  // import { useRouter } from "vue-router";
  import { usePizzas } from "../composables/usePizzas";
  import PizzaCard from "../components/PizzaCard.vue";
  import { useSearch } from "../composables/useSearch";
  
  const props = defineProps({
    initialSearchTerm: {
      type: String,
      default: "",
    },
  });
  
  
  const { pizzas } = usePizzas();
  
  const { search, searchResults } = useSearch({
    items: pizzas.value,
    defaultSearch: props.initialSearchTerm,
  });
  
  // watch(search, (value, prevValue) => {
  //   if (value === prevValue) return;
  //   router.replace({ query: { search: value } });
  // });
  </script>
  <style scoped>
  ul {
    /* list-style: none; */
    padding: 0;
    /* display: flex; */
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .pizzas-view--container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  </style>
  