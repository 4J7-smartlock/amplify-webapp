<template>
  <v-card
    max-width="400"
    class="mx-auto">
    <v-container fluid > 
      <v-row dense>
        
        <v-col cols="12">
          <v-card
            color="#406882"
            dark>
              <v-card-title>
                My 施錠確認
              </v-card-title>
              <v-card-text>
              </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
       <div v-if="items"> 
        <div v-if= " items[0]['lock_status'] == 'open'">
          <v-card
           color="#00FF7F"
           height="160"
           light> 
           <v-card-title>武道館 </v-card-title>
           <v-card-text>
             <v-icon mx-auto size="50">mdi-lock-open</v-icon>
           </v-card-text>
          </v-card>
        </div>
        <div v-else>
          <v-card
           color="#ff4500"
           height="160"
           dark> 
           <v-card-title>武道館 </v-card-title>
           <v-card-text>
             <v-icon mx-auto size="50">mdi-lock</v-icon>
           </v-card-text>
          </v-card>
        </div>
       </div>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#406882"
            dark>
              <v-card-title>
                ご利用にあたり
              </v-card-title>
              <v-card-text>
              </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            color="#ff4500"
          　dark>
          <v-card-title>武道館</v-card-title>
          <v-card-text>
           
             <v-icon center size="50">mdi-lock</v-icon>
            ※施錠されている。
          </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="6">
          <v-card
           color="#00FF7F"
           light> 
           <v-card-title>武道館 </v-card-title>
           <v-card-text>
             <v-icon mx-auto size="50">mdi-lock-open</v-icon>
              ※開錠されている。
           </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#1A374D"
            dark>
              <v-card-title>
                補足
              </v-card-title>
              <v-card-text>・専攻科棟3F・4F・5Fはクラス教室しかないため<br>表示していない。<v-spacer></v-spacer><br>・スマホ向けのWebアプリである。<v-spacer></v-spacer><br>・設置していない場所は施錠表示。

              </v-card-text>
            </v-card>
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
