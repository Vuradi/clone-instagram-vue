<template>
  <div class="wrapper">
    <the-nav-bar/>
    <main class="main">
      <home></home>
    </main>
    <the-footer/>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import Home from './views/Home.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: { TheNavBar, Home, TheFooter },
};
</script>
