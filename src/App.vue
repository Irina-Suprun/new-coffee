<template>
  <div id="app">
    <AppHeader />
    <SectionNovelty />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/index.vue';
import SectionNovelty from './components/Sections/SectionNovelty/index.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SectionNovelty,
  },
};
</script>

<style lang="scss" src="./styles/index.scss" />
