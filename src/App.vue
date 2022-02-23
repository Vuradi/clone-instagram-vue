<template>
    <the-nav-bar/>
    <main class="main">
      <router-view></router-view>
    </main>
    <the-footer/>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: { TheNavBar, TheFooter },
};
</script>
