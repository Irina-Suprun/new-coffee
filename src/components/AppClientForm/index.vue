<template>
    <div class="clientInformations">
        <form class="clientInformations__form">
            <div class="clientInformations__wrapper">
                <label for="first-name">
                    First Name:
                    <input v-model.trim="order.firstName" type="text" id="first-name"
                        placeholder="Enter your First Name" />
                </label>
                <label for="last-name">
                    Last Name:
                    <input v-model.trim="order.lastName" type="text" id="last-name"
                        placeholder="Enter your Last Name" />
                </label>
            </div>
            <div class="clientInformations__wrapper">
                <label for="address">
                    Address:
                    <input v-model.trim="order.address" type="text" id="address" placeholder="Enter your Address" />
                </label>
                <label for="city">
                    City:
                    <input v-model.trim="order.city" type="text" id="city" placeholder="Enter your City" />
                </label>
                <label for="state">
                    State:
                    <select v-model="order.state" id="state">
                        <option disabled value="">State</option>
                        <option v-for="(state, key) in states" :key="key" :value="state">{{ key }}</option>
                    </select>
                </label>
                <label for="postal-code">
                    Postal Code:
                    <input v-model.number="order.postalCode" id="postal-code" type="number"
                        placeholder="Enter your Postal Code" />
                </label>
            </div>
            <div class="clientInformations__wrapper">
                <label for="home">
                    Home
                    <input type="radio" id="home" v-bind:value="order.home" v-model="order.method">
                </label>
                <label for="business">
                    Business
                    <input type="radio" id="business" v-bind:value="order.business" v-model="order.method">
                </label>
            </div>
            <div class="clientInformations__wrapper">
                <label for="gift">
                    Ship As Gift?
                    <input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift"
                        v-bind:false-value="order.dontSendGift" v-model="order.gift">
                </label>
            </div>
            <button type="submit" @click="showText = !showText" class="clientInformations__button">Place Order</button>
        </form>
        <transition name="bounce">
            <div v-if="showText">
                <h1>
                    Submited
                </h1>
            </div>
        </transition>
        <div class="">
            <p v-if="order.firstName && order.lastName">Dear {{ fullName }}, check your informations.</p>
            <pre>
                First Name: {{ order.firstName }}
                Last Name: {{ order.lastName }}
                Address: {{ order.address }}
                City: {{ order.city }}
                State: {{ order.state }}
                Postal Code: {{ order.postalCode }}
                Method: {{ order.method }}
                Gift: {{ order.gift }}
            </pre>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AppClienForm',
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        method: 'Home Address',
        business: 'Business Address',
        home: 'Home Address',
        gift: '',
        sendGift: 'Send As A Gift',
        dontSendGift: 'Do Not Send As A Gift',
      },
      states: {
        AL: 'Alabama',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada',
      },
      showText: false,
    };
  },
  computed: {
    fullName() {
      return [this.order.firstName, this.order.lastName].join(' ');
    },
  },
};
</script>

<style lang="scss" src="../AppClientForm/index.scss" />
