import { computed, ref, type Ref } from "vue";

type ArrayObject = { [key: string]: string };

export const useFilter = (
  arr: Ref<ArrayObject[]>,
  key: string,
  term: string
) => {
  const filterBy = ref(key);
  const filterTerm = ref(term);
  const order = ref('asc');

  const filteredArray = computed(() => {
    return arr.value.filter((item) =>
      item[filterBy.value]?.toLowerCase().includes(
        filterTerm.value.toLowerCase()
      )
    ).sort((a, b) => {
      if (order.value === 'asc') {
        return a[filterBy.value] > b[filterBy.value] ? 1 : -1
      } else {
        return a[filterBy.value] < b[filterBy.value] ? 1 : -1
      }
    })
  });
  
  return {
    filterBy,
    filterTerm,
    filteredArray,
    order,
  };
};
