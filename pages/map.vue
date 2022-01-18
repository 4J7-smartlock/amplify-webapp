<template>
  <v-card 
    max-width="400"
    class="mx-auto">
    <v-container fluid>   
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#406882"
            dark>
            <v-card-title class="text-h5">
              校舎外施設
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card 
          color="#E4F9F5">
               <v-img :src="require('@/assets/ichinoseki-kosen.jpg')"
               height="auto"
               width="auto">
               </v-img>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#406882"
            dark>
            <v-card-title class="text-h5">
              管理・教育棟1F
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>

     </v-row>
    </v-container>
  </v-card>
</template>

