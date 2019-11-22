<template>
  <v-container fill-height>
    <v-layout
      text-center
      wrap
      justify-center
      align-center
      column
    >
    <v-flex>
      <h1>Mental Blocks!</h1>
      <h2>Companion app</h2>
    </v-flex>
    <v-flex v-if="!codeInput">
        <v-layout column>
          <v-flex my-2>
            <v-btn block large color="info" to="/host">Host</v-btn>
          </v-flex>
          <v-flex my-2>
            <v-btn block large color="warning" @click="setCode">Input Code</v-btn>
          </v-flex>
        </v-layout>
    </v-flex>
    <v-flex v-else>
      <v-layout column>
        <v-flex xs12>
          Enter code:
        </v-flex>
        <v-flex xs12>
          <v-text-field></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-alert v-if="alert">Sorry no session with that id</v-alert>
        </v-flex>
        <v-flex xs12 my-2 >
          <v-btn block primary color="info" @click="sendCode">Send</v-btn>
        </v-flex>
        <v-flex xs12 my-2>
          <v-btn block secondary color="warning" to="/host">Sorry, i meant host!</v-btn>
        </v-flex>
      </v-layout>
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
