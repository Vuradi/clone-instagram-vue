<template>
  <div class="wrapper">
    <the-nav-bar/>
    <main class="main">
      <home></home>
    </main>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import Home from './views/Home.vue';

export default {
  components: { TheNavBar, Home },

};
</script>
