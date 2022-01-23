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
              専攻科棟1F
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="6">
        <div v-if= " items[1]['lock_status'] == 'open'">
          <v-card
            color="#00FF7F"
            height="160"
          　light>
          <v-card-title>講義室1</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock-open</v-icon>
          </v-card-text>
          </v-card>
        </div>
        <div v-else>
          <v-card
            color="#ff4500"
            height="160"
          　dark>
          <v-card-title>講義室1</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock</v-icon>
          </v-card-text>
          </v-card>
        </div>
        </v-col>

        <v-col cols="6">
        <div v-if= " items[1]['lock_status'] == 'open'">
          <v-card
            color="#00FF7F"
            height="160"
          　light>
          <v-card-title>講義室2</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock-open</v-icon>
          </v-card-text>
          </v-card>
        </div>
        <div v-else>
          <v-card
            color="#ff4500"
            height="160"
          　dark>
          <v-card-title>講義室2</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock</v-icon>
          </v-card-text>
          </v-card>
        </div>
        </v-col>

        <v-col cols="6">
        <div v-if= " items[1]['lock_status'] == 'open'">
          <v-card
            color="#00FF7F"
            height="160"
          　light>
          <v-card-title>コンピューター室</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock-open</v-icon>
          </v-card-text>
          </v-card>
        </div>
        <div v-else>
          <v-card
            color="#ff4500"
            height="160"
          　dark>
          <v-card-title>コンピューター室</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock</v-icon>
          </v-card-text>
          </v-card>
        </div>
        </v-col>

        

      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';
 
export default {
 
  data() {
    return {
      items:null,
    }
  },
 
  async mounted() {
    await this.getData();
  },
 
  methods:{
    getData: async function(){
      const result = await axios(
          {
          method:'GET',// GET,POSTなど
          url:'https://b2q74etkx0.execute-api.us-east-2.amazonaws.com/slfuncapi/dynamodbctrl',// APIのURL
          headers:{
            'X-Api-Key':'hx8xubEGea1RYMPawUvfC5pfMgNUefRaaUgVPoym'
          }
          },
          ).then(response => this.items = response.data);
    }
  },
  
}
</script>
