<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }} --- <span
          @click="onClickRemove(product)"
          style="color: red;cursor: pointer;"
        >删除</span>
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button
        :disabled="!products.length"
        @click="checkout(products)"
      >Checkout</button></p>
    <p><button
        :disabled="!products.length"
        @click="clearShoppingCart(products)"
      >清空购物车</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    },
    clearShoppingCart () {
      this.$store.dispatch('cart/clearShoppingCart', [])
    },
    onClickRemove (item) {
      this.$store.dispatch('cart/onClickRemove', item)
    }
  }
}
</script>
