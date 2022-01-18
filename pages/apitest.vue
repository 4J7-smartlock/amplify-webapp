<template>
<div>
  <ul>
    <li v-for="item in items" :key="item">{{item}}</li>
  </ul>
</div>
</template>
 
<script>
import axios from 'axios';
 
export default {
 
  data() {
    return {
      items: null
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
          },
          ).then(response => this.items = response.data);
    }
  },
}
</script>