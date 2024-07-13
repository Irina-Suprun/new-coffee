<template>
  <div class="gift-page container">
    <div class="gift-page__image">
      <img src="../assets/gift-card.jpg" alt="gift-card">
    </div>
    <div class="gift-page__collapse">
      <CollapseComponent>
        <template #activator>
          Click here
        </template>
        <template #content>
          <div :Collapse="Collapse" @collapseEvent="event">
            Shopping for someone else but not sure what to give them?
            Give them the gift of choice with a Ratio Gift
            Card.
            Gift cards are delivered by email and contain instructions
            to redeem them at checkout. Our gift cards have
            no additional processing fees.
          </div>
        </template>
      </CollapseComponent>
    </div>
  </div>
</template>

<script>
import CollapseComponent from '../components/CollapseComponent/index.vue';

export default {
  name: 'Gift-page',

  components: {
    CollapseComponent,
  },
  data() {
    return {

    };
  },
  methods: {
    event() {
      console.log('abracadabra');
    },
  },

};
</script>

<style lang="scss" src="../Pages/gift.scss" />
