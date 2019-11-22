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
        <VueP5 v-on="{setup, draw, keypressed}"></VueP5>
    </v-flex>
    <v-flex>
        {{prettyTimer}}
    </v-flex>
    </v-layout>
    <v-layout text-center v-if="gameOver">
    <v-flex>
        <h1>GAME OVER!</h1>
        <p v-if="showSolution">Shows solution</p>
        <v-btn v-if="!showSolution" color="info" large block @click="showSolutionBtn">Show solution</v-btn>
        <v-btn v-if="showSolution" color="info" to="/">New game!</v-btn>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueP5 from 'vue-p5';

export default {
  name: 'QrScreen',
  components: {VueP5},
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
      },
      setup: function(sketch){
         sketch.createCanvas(200, 200, sketch.WEBGL);
      },
      draw: function(sketch){
        sketch.background(200);
        sketch.rotateX(sketch.frameCount * 0.01);
        sketch.rotateY(sketch.frameCount * 0.01);
        sketch.box(50);
      },
      keypressed: function(sketch){
        sketch.background(200);
      }

  },
  computed:{
    prettyTimer:function(){
        let value = Math.floor(this.time/1000)
        return value + " seconds left!"
    }
  },
};
</script>
