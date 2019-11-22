<template>
  <v-container>
    <v-layout
      text-center
      wrap
      column
      v-if="!gameOver"
    >
    <v-flex xs1>
        Minor Glitch/Major Glitch
    </v-flex>
    <v-flex xs1>
        Restriction
    </v-flex>
    <v-flex fill-height>
        Hier komen blokjes!
    </v-flex>
    <v-flex>
        {{prettyTimer}}
    </v-flex>
    </v-layout>
    <v-layout text-center v-if="gameOver">
    <v-flex>
        <h1>GAME OVER!</h1>
        <p v-if="showSolution">Shows solution</p>
        <v-btn v-if="!showSolution" large block @click="showSolutionBtn">Show solution</v-btn>
        <v-btn v-if="showSolution" to="/">New game!</v-btn>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'QrScreen',

  data: () => ({
    codeInput: false,
    time: 5000, //To be decided by difficulty which is going to be put in the Store
    isRunning: true,
    gameOver: false,
    showSolution: false,
  }),
  mounted() {  
        this.isRunning = true    
        this.timer = setInterval( () => {
            if (this.time > 0) {
                    this.time -=1000
            } else {
                    clearInterval(this.timer)
                    this.gameOver = true
            }
        }, 1000 )
  },
  methods: {
      showSolutionBtn: function(){
          this.showSolution = true
      }
  },
  computed:{
    prettyTimer:function(){
        let value = Math.floor(this.time/1000)
        return value + " seconds left!"
    }
  }
};
</script>
