<template>
    <label for="searchbox">Search</label>
    <input v-model="search" placeholder="Search for a pizza" data-testid="search-input" id="searchbox" />
</template>
<script setup>
import { useRouter } from "vue-router";
import { useSearch } from "../composables/useSearch";
import { watch } from "vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: "",
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emits = defineEmits(['update-items']);

// const route: RouteLocationNormalizedLoaded = useRoute();
const router = useRouter();

const { search, searchResults } = useSearch({
  items: props.items,
  defaultSearch: props.searchTerm,
});

watch(search, (value, prevValue) => {
  if (value === prevValue) return;
  router.replace({ query: { search: value } });
  emits('update-items', searchResults.value)
}, {
    immediate: true
});
</script>