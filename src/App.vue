<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      <nav-item />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Kontactic</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavItem from './components/NavItem'
  export default {
    data: () => ({ 
      drawer: null,
    }),
    components:{
      NavItem
    }
  }
</script>