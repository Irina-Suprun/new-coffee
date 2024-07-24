<template>
    <div class="clientInformations">
        <h2>Enter your informations</h2>
        <AppClienForm />
    </div>

</template>

<script>
import AppClienForm from '../components/AppClientForm/index.vue';

export default {
  name: 'Order-page',
  components: {
    AppClienForm,
  },
};
</script>
