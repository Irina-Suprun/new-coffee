<template>
  <section class="section-novelty section">
    <div class="section-novelty__box container">
      <img
        src="../../../assets/new-coffee.png"
        alt="new-coffee picture"
        class="section-novelty__picture"
      />
      <div class="section-novelty__describe">
        <a href="" class="section-novelty__extra-info link">What’s new?</a>
        <strong class="section-novelty__title title">{{ getHeroData.title }}</strong>
        <p>{{ getHeroData.description }}</p>
        <a href="" class="section-novelty__click link button">Learn more</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SectionNovelty',
  computed: {
    ...mapGetters(['getHeroData']),
  },
  methods: {
    ...mapActions(['fetchHeroData']),
  },
  mounted() {
    this.fetchHeroData();
  },
};
</script>

<style lang="scss" src="./index.scss" />
