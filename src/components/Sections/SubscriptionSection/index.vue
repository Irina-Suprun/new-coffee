<template>
    <section  class="subscription-section container">
        <div class="subscription-section__box">
            <form>
                <label for="email" class="subscription-section__title">
                    Subscribe to get emails about our new products and sales
                    <input type="text" id="email" placeholder="Enter your email"
                    class="subscription-section__input"/>
                </label>
                <button class="subscription-section__button">Subscribe</button>
            </form>
        </div>
        <div class="subscription-section__box">
            <p class="subscription-section__text">We have a passion for coffee and people.
                Make sure you always have your favorite cup of coffee around to
                start your day off right.</p>
            <img src="../../../assets/logo.svg" alt="logo" class="subscription-section__logo">
        </div>
    </section>
</template>

<script>
export default {
  name: 'SubscriptionSection',
};
</script>

<style lang="scss" src="./index.scss" />
