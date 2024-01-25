import { computed, ref } from "vue";

export const useSearch = ({
  items,
  filter = "title",
  defaultSearch = "",
}) => {
  const search = ref(defaultSearch);
  const searchResults = computed(() => {
    return search.value
      ? items.filter((item) => {
          return item[filter]
            ?.toLowerCase()
            .includes(search.value.toLowerCase());
        })
      : items;
  });

  return { search, searchResults };
};
