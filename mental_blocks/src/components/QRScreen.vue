<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex v-if="host">
        <v-flex>
            <h1>{{code}}</h1>
        </v-flex>
        <v-flex>
        <qrcode value="http://www.google.com/6664" :options="{ width: 200 }"></qrcode>
        </v-flex>
        <v-flex> 1 player</v-flex>
        <v-flex>
        <v-btn v-if="gameReady" large block to="/play"> LET'S PLAY </v-btn>
        </v-flex>
        <v-flex>
        <v-btn to="/" large block> Cancel </v-btn>
        </v-flex>
    </v-flex>
        <v-flex v-else>
            Waiting on host to start the game!
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'QrScreen',

  data: () => ({
    codeInput: false,
    host:true,
    gameReady: true, //computed based on socket server information
    code: 5555, //To be based on info socket server
  }),
};
</script>
