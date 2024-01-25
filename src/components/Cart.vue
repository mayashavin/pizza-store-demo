<template>
    <div class="cart">
        <span class="cart__total" @click="toggleCartDetails" role="button">Cart: {{ cart.total }}</span>
        <div class="cart__list" v-show="showCartDetails">
            <p v-if="cart.total.value === 0">No item in cart</p>
            <div v-else>
                <p>In your cart:</p>
                <ul>
                    <li v-for="(item, index) in cart.items" :key="item.id" class="cart__list-item">
                        <span data-testid="title">{{index + 1}}. {{ item.title }}</span>
                        <span data-testid="price">${{ item.price }}</span> x
                        <span data-testid="quantity">{{ item.quantity }}</span>
                        <span data-testid="total">= ${{ (+item.price * item.quantity).toFixed(2) }}</span>
                        <button @click="cart.remove(item.id)">Remove</button>
                    </li>
                </ul>                
                <div class="separator"></div>
                <button @click="cart.clear" data-testid="remove-all">Remove all</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCart } from '../composables/useCart'
import { ref } from 'vue'

const cart = useCart();
const showCartDetails = ref(false);

const toggleCartDetails = () => {
    showCartDetails.value = !showCartDetails.value;
}
</script>
<style scoped>
.separator {
    width: 100%;
    height: 1px;
    background-color: #d1cdcd;
    margin-block: 1rem;
}
.cart__list {
    position: absolute;
    list-style: none;
    box-shadow: 2px 2px 3px #e3e0e0;
    border: 1px solid #e3e0e0;
    padding: 10px;
    inset-inline-end: 0;
    background-color: white;
    min-width: 500px
}

.cart {
    position: relative;
}

.cart__total {
    cursor: pointer;
    text-decoration: underline;
}

.cart__list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
</style>