<template>
  <v-app>
    <!--タブ-->
    <v-navigation-drawer app v-model="drawer" color="dark">
      <v-list-item>
        <v-list-item-title class="title">
          施錠確認
        </v-list-item-title>
        <v-btn icon>
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-list-item-icon>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>    
    </v-navigation-drawer>
    <!--ヘッダーー-->
    <v-app-bar app color="dark">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>施錠確認</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-menu offset-y>
      </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
　　<!--フッター-->
    <v-footer app color="dark">
      <div class="flex-grow-1"></div>
      <div>2021/4J-7group</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menus: [
      { title: 'トップ', icon: 'mdi-home', url: '/Top' },
      { title: 'マップ', icon: 'mdi-map-search-outline', url: '/map' },
      { title: '校舎外施設', icon: 'mdi-run', url: '/Outside' },
      { title: '管理・教育棟1F', icon: 'mdi-numeric-1-box-outline', url: '/K1F' },
      { title: '管理・教育棟2F', icon: 'mdi-numeric-2-box-outline', url: '/K2F' },
      { title: '管理・教育棟3F', icon: 'mdi-numeric-3-box-outline', url: '/K3F' },
      { title: '管理・教育棟4F', icon: 'mdi-numeric-4-box-outline', url: '/K4F' },
      { title: '専攻科棟1F', icon: 'mdi-numeric-1-box-multiple-outline', url: '/S1F' },
      { title: '専攻科棟2F', icon: 'mdi-numeric-2-box-multiple-outline', url: '/S2F' },
    ]
  })
}
</script>


<style>
div{
  white-space: pre-line;
}
.bg{
  background-image: url("~@/assets/email-pattern.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
}
.grey{
  color:dimgrey;
}
.text{
  margin:0 0 0 10px;
  padding:0;
  line-height: 5em;
}



</style>