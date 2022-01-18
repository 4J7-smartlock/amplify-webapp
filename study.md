npm run dev 起動
PS C:\Users\ja317\github\Sezyoukannri\SEZYOU> cd SEZYOU
https://b2q74etkx0.execute-api.us-east-2.amazonaws.com/slfuncapi/dynamodbctrl

C:\Users\ja317\github\Sezyoukannri\SEZYOU\pages\4F.vue


<template>
<div>
  <p>{{filterlist}}</p>
  <p>{{filterlist2}}</p>
</div>
</template>
 
<script>
import axios from 'axios';
 
export default {
 
  data() {
    return {
      items: null,
      filterlist
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
  computed:{
    filterlist:function(){
      return this.items[1]["lock_status"] == "open"?"open":"close";
    },
    filterlist2:function(){
      return this.items[0]["lock_status"] == "open"?"open":"close";
    }  
  }
}
</script>
