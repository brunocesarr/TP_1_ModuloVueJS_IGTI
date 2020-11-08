<template>
  <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="product.urlPhoto"
    >
    </v-img>
    <v-card-title class="pb-0 font-weight-light d-flex flex-row-reverse">
      {{ product.name }}
    </v-card-title>
    <v-divider inset></v-divider>

    <v-card-subtitle class="pb-0 d-flex flex-row-reverse">
      {{ product.price | price }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div style="
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      ">{{ product.description }}</div>
    </v-card-text>

    <v-card-actions class="justify-space-between">
      <v-btn
        color="blue-grey"
        text
        @click="toDetailProduct(product)"
      >
        Detail
        <v-icon
          right
          dark
        >
        mdi-information
        </v-icon>
      </v-btn>

      <v-btn
        color="green"
        text
        @click="addToCart(product)"
      >
        Buy
        <v-icon
          right
          dark
        >
        mdi-cart
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ItemListCard',
  props: [
    'product'
  ],
  methods: {
    toDetailProduct(product) {
      this.$router.push(`/ecommerce/${product.id}`);
    },
    addToCart(product) {
      this.$emit('addToCart', product);
    }
  }
}
</script>

<style>

</style>