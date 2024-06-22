<template>
  <div class="catalogue-page">
    <SectionNovelty />
    <OrderSection />
    <SubscriptionSection />
  </div>
</template>

<script>
import SectionNovelty from '../components/Sections/SectionNovelty/index.vue';
import OrderSection from '../components/Sections/OrderSection/index.vue';
import SubscriptionSection from '../components/Sections/SubscriptionSection/index.vue';

export default {
  name: 'Catalogue-page',
  components: {
    SectionNovelty,
    OrderSection,
    SubscriptionSection,
  },
};
</script>
