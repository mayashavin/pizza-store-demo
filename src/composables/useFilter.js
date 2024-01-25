import { ref, computed } from 'vue'

export function useFilter(arr, key, term) {
  const filterBy = ref(key)
  const filterTerm = ref(term)
  const order = ref('asc')

  const filteredArray = computed(() =>
    arr.value.filter((item) =>
      item[filterBy.value]?.toString().toLowerCase().includes(filterTerm.value.toLowerCase())
    ).sort((a, b) => {
      if (order.value === 'asc') {
        return a[filterBy.value] > b[filterBy.value] ? 1 : -1
      } else {
        return a[filterBy.value] < b[filterBy.value] ? 1 : -1
      }
    })
  );

  return {
    filterBy,
    filterTerm,
    filteredArray,
    order,
  }
}