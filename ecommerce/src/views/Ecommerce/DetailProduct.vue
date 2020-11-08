<template>
  <div>
    <div class="my-1 row justify-space-between">
      <router-link
        :to="'/ecommerce'"
        style="text-decoration: none; color: inherit;"
      >
        <h2 class="text--secondary text-start font-weight-thin">
          <v-icon color="green">mdi-arrow-left-thick</v-icon>
          Back to Products
        </h2>
      </router-link>
    </div>

    <v-divider class="pb-2"></v-divider>

    <v-card
      class="mx-auto"
    >
      <v-img
        class="white--text align-end"
        height="400px"
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
        <div>{{ product.description }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Product } from '../../models/product'

  export default {
    name: 'DetailProduct',
    data() {
      return {
        product: {}
      }
    },
    async mounted() {
      const id = this.$route.params.id;
      this.product = await this.getProductById(id);
    },
    methods: {
      async getProductById(id) {
        try {
          const { data } = await axios.get(`http://localhost:3000/produtos/${id}`);
          return new Product(
            data.id,
            data.foto,
            data.nome,
            data.descricao,
            data.preco
          );
        } catch (error) {
          console.error('Error: ', error);          
        }
      }
    }
  }
</script>

<style>

</style>