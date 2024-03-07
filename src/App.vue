<template>
  <div id="app">
    <AppHeader />
    <SectionNovelty />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/index.vue';
import SectionNovelty from './components/Sections/SectionNovelty/index.vue';
import AppFooter from './components/AppFooter/index.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SectionNovelty,
    AppFooter,
  },
};
</script>

<style lang="scss" src="./styles/index.scss" />
