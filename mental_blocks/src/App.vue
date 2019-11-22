<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
//If state says we're playing, we are playing!
//How do we do the clock thing?
  data: () => ({
    //
  }),
};
</script>
