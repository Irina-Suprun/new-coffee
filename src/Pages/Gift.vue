<template>
  <div class="gift-page container">
    <div class="gift-page__image">
      <img src="../assets/gift-card.jpg" alt="gift-card">
    </div>

    <div class="gift-page__collapse">
      <CollapseComponent collapsed @collapseEvent="collapseEvent">
        <template #activator="{ isCollapsed, toggle }">
          <AppButton @click.native="toggle" :title="title">
            {{ title }}
            <template v-if="isCollapsed">
              +
            </template>
            <template v-else>
              -
            </template>
          </AppButton>
        </template>
        <template #content>
          <transition name="fade" appear>
            <div class="gift-page__collapse-content">
              Shopping for someone else but not sure what to give them?
              Give them the gift of choice with a Ratio Gift
              Card.
              Gift cards are delivered by email and contain instructions
              to redeem them at checkout. Our gift cards have
              no additional processing fees.
            </div>
          </transition>
        </template>
      </CollapseComponent>
    </div>
  </div>
</template>

<script>
import CollapseComponent from '../components/CollapseComponent/index.vue';
import AppButton from '../components/AppButton/index.vue';

export default {
  name: 'Gift-page',
  components: {
    CollapseComponent,
    AppButton,
  },
  data() {
    return {
      title: 'Click here',
    };
  },
  methods: {
    collapseEvent() {
      console.log('here');
    },
  },
};

</script>

<style lang="scss" src="../Pages/gift.scss" />
