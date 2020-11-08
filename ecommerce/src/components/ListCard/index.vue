<template>
  <div>
    <div class="row">
      <div v-for="(product, index) in products" :key="index" class="mb-6 mx-auto">
        <ItemListCard :product="product" @addToCart="addToCart"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemListCard from './ItemListCard'

export default {
  name: 'ListCard',
  props: [
    'products'
  ],
  components: {
    ItemListCard  
  }, 
  methods: {
    addToCart(product) {
      this.$emit('addToCart', product);
    }
  }
}
</script>

<style>

</style>