<template>
    <section class="order-section section">
        <div class="container">
            <div class="order-section__title-box">
                <strong class="title">Check our sales for popular products</strong>
                <a href="" class="order-section__all-sales link">All sales</a>
            </div>
            <ul class="order-section__list list">
                <li class="order-section__item">
                    <div class="order-section__discount">
                        <span>-30%</span>
                    </div>
                    <img src="../../../assets/product1.png" alt="product1-photo"
                    class="order-section__image">
                    <div>
                        <strong class="order-section__title-product">Coffee Retail Packs</strong>
                        <p>500 g</p>
                        <ul class="order-section__price list">
                            <li class="order-section__price-sale">$ 14.99</li>
                            <li>$ 10.49</li>
                        </ul>
                        <div class="order-section__btn-box">
                            <div class="order-section__counter">
                                <button class="order-section__counter-active">+</button>
                                <span class="order-section__counter-number">1</span>
                                <button class="order-section__counter-active">-</button>
                            </div>
                            <button class="order-section__btn-add button">Add to card</button>
                        </div>
                    </div>
                </li>
                <li class="order-section__item">
                    <div class="order-section__discount">
                        <p>-15%</p>
                    </div>
                    <img src="../../../assets/product2.png" alt="product2-photo"
                    class="order-section__image">
                    <div>
                        <strong class="order-section__title-product">Brazil Blend Arabia</strong>
                        <p>500 g</p>
                        <ul class="order-section__price list">
                            <li class="order-section__price-sale">$ 13.99</li>
                            <li>$ 11.89</li>
                        </ul>
                        <div class="order-section__btn-box">
                            <div class="order-section__counter">
                                <button class="order-section__counter-active">+</button>
                                <span class="order-section__counter-number">1</span>
                                <button class="order-section__counter-active">-</button>
                            </div>
                            <button class="order-section__btn-add button">Add to card</button>
                        </div>
                    </div>
                </li>
                <li class="order-section__item">
                    <div class="order-section__discount">
                        <p>-25%</p>
                    </div>
                    <img src="../../../assets/product3.png" alt="product3-photo"
                    class="order-section__image">
                    <div>
                        <strong class="order-section__title-product">Unicorn Blood Dark</strong>
                        <p>500 g</p>
                        <ul class="order-section__price list">
                            <li class="order-section__price-sale">$ 16.50</li>
                            <li>$ 12.38</li>
                        </ul>
                        <div class="order-section__btn-box">
                            <div class="order-section__counter">
                                <button class="order-section__counter-active">+</button>
                                <span class="order-section__counter-number">1</span>
                                <button class="order-section__counter-active">-</button>
                            </div>
                            <button class="order-section__btn-add button">Add to card</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  name: 'OrderSection',
};
</script>

<style lang="scss" src="./index.scss" />
