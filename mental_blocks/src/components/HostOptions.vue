<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex text-center mb-2 xs12>
        <h1>HOST OPTIONS</h1>
    </v-flex>
    <v-flex>
        <v-select
          :items="puzzletype"
          v-model="chosenPuzzleType"
          box
          label="Puzzle Type"
        ></v-select>
    </v-flex>
    <v-flex>
        <v-select
          :items="difficulty"
          v-model="chosenDifficulty"
          box
          label="Difficulty"
        ></v-select>
    </v-flex>
    <v-flex text-center>
        <v-checkbox v-model="traitor" label="traitor (only >= 5 players)">
        </v-checkbox>
    </v-flex>
     <v-btn block large primary color="info" to="/qr">Start Game</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainMenu',
    
  data: () => ({
    puzzletype:['Family', 'Challenge'],
    difficulty:['New players','Practiced','Expert','Genius'],
    traitor: false,
    chosenPuzzleType: 'Family',
    chosenDifficulty: 'Expert',
  }),
  //Get to socketserver
  //Get unique id from server
  //Generate QR code
  //Set logic for dificulty

};
</script>
