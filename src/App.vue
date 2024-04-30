<template>
  <section class="wrapper">
    <div>
      <header>
        <div>Pizzas House</div>
        <Cart />
      </header>
      <RouterView v-slot="{ Component }">
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          :css="false"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </section>
</template>

<script setup lang="ts">
import Cart from './components/Cart.vue'
import { gsap } from 'gsap'

const beforeEnter = (el: HTMLElement) => {
  el.style.transform = "translateX(20px)";
  el.style.opacity = "0";
};

const enter = (el: HTMLElement, done: gsap.Callback) => {
  gsap.to(el, {
    duration: 1,
    x: 0,
    opacity: 1,
    onComplete: done,
  });
};

const afterEnter = (el: HTMLElement) => {
  el.style.transform = "";
  el.style.opacity = "";
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

header {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}
.view {
  margin-block-start: 20px;
  text-align: center;
}
</style>
