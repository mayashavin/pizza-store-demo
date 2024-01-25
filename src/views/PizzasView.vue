<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <SearchBox :items="pizzas" @update-items="updateSearchItems" :search-term="searchTerm"/>
    <!-- <input v-model="search" placeholder="Search for a pizza" data-testid="search-input" /> -->
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref} from 'vue'
// import { useRouter } from "vue-router";
import { usePizzas } from "../composables/usePizzas";
import PizzaCard from "../components/PizzaCard.vue";
// import { useSearch } from "@/composables/useSearch";
// import { watch } from "vue";
import SearchBox from "../components/SearchBox.vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: "",
  },
});

// const route: RouteLocationNormalizedLoaded = useRoute();
// const router = useRouter();

const { pizzas } = usePizzas();
const searchResults = ref(pizzas);
const updateSearchItems = (_results) => {
  searchResults.value = _results
}

// const { search, searchResults } = useSearch({
//   items: pizzas,
//   defaultSearch: props.searchTerm,
// });

// watch(search, (value, prevValue) => {
//   if (value === prevValue) return;
//   router.replace({ query: { search: value } });
// });
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
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
