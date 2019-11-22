<template>
  <v-container>
    <v-layout
      text-center
      wrap
      justify-center
      align-center
    >
    <v-flex v-if="!codeInput">
        <v-btn block primary to="/host">Host</v-btn>
        <v-btn block @click="setCode">Input Code</v-btn>
    </v-flex>
    <v-flex v-else>
      <v-text-field></v-text-field>
      <v-alert v-if="alert">Sorry no session with that id</v-alert>
      <v-btn block primary @click="sendCode">Send</v-btn>
      <v-btn block secondary to="/host">Sorry, i meant host!</v-btn>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainMenu',

  data: () => ({
    codeInput: false,
    code: '',
    alert: false,
  }),
  methods: {
    setCode: function(){
      this.codeInput = !this.codeInput
    },
    sendCode:function(){
      this.alert = true;
    }
  }
  //Send Code
  //Websocket server checks if there is a session with that id, if so add player, if not error
};
</script>
