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
          <v-card
            color="#ff0000"
          　dark>
          <v-card-title>第一体育館</v-card-title>
          <v-card-text>
           <v-icon center size="50">mdi-lock</v-icon>
          </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            color="#ff0000"
          　dark>
          <v-card-title>第二体育館</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock</v-icon>
          </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            color="#ff0000"
          　dark>
          <v-card-title>武道館</v-card-title>
          <v-card-text>
             <v-icon center size="50">mdi-lock</v-icon>
          </v-card-text>
          </v-card>
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
            color="#ff0000"
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
              <v-card-text>・専攻科棟3F・4F・5Fはクラス教室しかないため<br>表示していない。<v-spacer></v-spacer><br>・スマホ向けのWebアプリである。

              </v-card-text>
            </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-card>
</template>

<style>

p.map1 img{
  width: 400px;
}
</style>

<script>
  export default {
  }
  
</script>