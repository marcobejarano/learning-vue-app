<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
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

<script lang="ts" setup>
  import { usePizzas } from "@/composables/usePizzas";
  import PizzaCard from "@/components/PizzaCard.vue";
  import { useSearch } from "@/composables/useSearch";
  import type { Ref } from "vue";
  import type { Pizza } from "@/types/Pizza";
  
  type PizzaSearch = {
    search: Ref<string>;
    searchResults: Ref<Pizza[]>;
  };

  const { pizzas } = usePizzas();

  const { search, searchResults }: PizzaSearch = useSearch({
    items: pizzas,
    defaultSearch: '',
  });
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

.slidein-enter-to {
  transform: translateX(0);
}

.slidein-enter-from {
  transform: translateX(-100%);
}

.slidein-leave-to {
  transform: translateX(100%);
}

.slidein-leave-from {
  transform: translateX(0);
}

.slidein-enter-active,
.slidein-leave-active {
  transition: transform 0.5s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(45deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.rotate {
  animation: rotate 0.5s;
}

.fadein-enter-active,
.fadein-leave-active {
  transition: all 2s;
}

.fadein-enter-from,
.fadein-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
