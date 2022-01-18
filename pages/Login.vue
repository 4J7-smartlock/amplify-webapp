<template>
  <v-card
   max-width="400"
   class="mx-auto">
   <v-container fluid > 
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#ffffff"
            light>
            <v-card-title class="text-h5">
              ログイン
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>例）f#####</v-card-subtitle>
            <v-col
            cols="12">
            <v-text-field
            label="学籍番号"
            outlined>
            </v-text-field>
            </v-col>
            <v-card-text>
              <v-btn
              rounded
              dark>
              ログイン
              </v-btn>
            </v-card-text>
            
          </v-card>
        </v-col>
      </v-row> 
   </v-container> 
  </v-card>
</template>
 
<script>
export default {}
</script>
 
<style>

</style>
