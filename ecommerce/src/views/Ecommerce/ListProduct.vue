<template>
  <div>
    <div class="my-1 float-right">
      <v-menu
        transition="slide-y-transition"
        class="float-right mx-auto px-2"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            bordered
            overlap
            color="red"
            :content="cartProducts.length"
            :value="cartProducts.length"
          >
            <v-btn
              class="white--text"
              icon
              outlined
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="green">mdi-cart</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-list class="p-2">
          <v-list-item v-if="cartProducts.length === 0">
            <v-list-item-title>
              No product in Cart
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="(cartProduct, i) in cartProducts"
            :key="i"
          >
            <v-list-item-title
              class="row justify-space-between align-center"
            >
              <v-avatar
                left
                class="mx-1"
                size="25"
              >
                {{ cartProduct.count }}
              </v-avatar>
              {{ cartProduct.name }}
              <v-btn 
                icon
                small
                @click="removeInCart(cartProduct.id)" 
                class="mx-1 red"
              >
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item class="mx-2 mb-0">
            <v-list-item-title
              class="row justify-space-between"
            >
              <p>Price Total</p>
              <p>{{ priceTotal | price }}</p>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <h1 class="text--secondary text-center">
      Products
    </h1>

    <v-divider class="py-2"></v-divider>

    <ListCard :products="products" @addToCart="addToCart"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import { convertProductsApiToProduct } from '../../helpers/Converts'

  import ListCard from '../../components/ListCard'

  export default {
    name: 'ListProduct',
    components: {
      ListCard
    },
    data() {
      return {
        products: [],
        cartProducts: [],
        priceTotal: 0
      }
    },
    async created() {
      this.products = await this.getAllProducts();
    },
    methods: {
      async getAllProducts() {
        try {
          const { data } = await axios.get('http://localhost:3000/produtos');
          return convertProductsApiToProduct(data);
        } catch (error) {
          console.error('Error: ', error);          
        }
      },
      addToCart(product) {
        if (this.existInCart(product.id)) {
          this.cartProducts
            .find((cartProduct) => cartProduct.id === product.id).count++;
        } else {
          this.cartProducts
            .push({
              ...product,
              count: 1
            });
        }
        this.priceTotal = this.cartProducts
          .reduce(function(acumulador, valorAtual) {
            return acumulador + valorAtual.price;
          }, 0);
      },
      removeInCart(id) {
        this.cartProducts = this.cartProducts
          .filter((cartProduct) => cartProduct.id !== id);
      },
      existInCart(id) {
        return this.cartProducts
          .find((cartProduct) => cartProduct.id === id);
      },
    }
  }
</script>
