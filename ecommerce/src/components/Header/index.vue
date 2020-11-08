<template>
  <v-app-bar
    app
    color="light-green lighten-1"
  >
    <router-link
      :to="'/ecommerce'"
      style="text-decoration: none; color: inherit;"
    >
      <div class="d-flex justify-content-between">
        <v-icon class="mr-2">mdi-store</v-icon>
        E-commerce
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/brunocesarr/TP_1_ModuloVueJS_IGTI"
      target="_blank"
      text
    >
      <span class="mr-2">Visit GitHub</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>   
</template>

<script>
export default {
  name: 'Header',
}
</script>