<template>
  <div class="about-page">
    <div id="container">
      <h1 class="">{{ title }}</h1>
      <div class="row">
        <div class="">
          <myComp1 class="comp1"></myComp1>
        </div>
        <div class="">
          <h2 class="">Or</h2>
        </div>
        <div class="">
          <myComp2 class="comp2"></myComp2>
        </div>
      </div>
    </div>
    <div class="about-page__image">
      <img src="../assets/about.jpg" alt="picture_about-us" width="100%" />
    </div>
  </div>
</template>

<script>

import myComp1 from '../components/testComponent/comp1.vue';
import myComp2 from '../components/testComponent/comp2.vue';

export default {
  name: 'About-page',
  data() {
    return {
      title: 'Mixin in example using two components',
    };
  },
  components: {
    myComp1,
    myComp2,
  },
};

</script>
