<template>
    <v-app>
        <v-navigation-drawer v-model="menuVisible" app fixed>
            <v-list dense>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/bands">
                    <v-list-tile-action>
                        <v-icon>group</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Bands</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>person</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Members</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>date_range</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Dates</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="menuVisible = !menuVisible"></v-toolbar-side-icon>
            <v-toolbar-title>Bandapp</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer color="indigo" app class="pa-3">
            <span class="white--text">Created by Felix Schliemann, Github: <a href="https://github.com/eisbr11">https://github.com/eisbr11</a></span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
      name: 'app',
      localStorage: {
          bands: {
              type: Array,
              default: []
          },
          members: {
              type: Array,
              default: []
          }
      },
      data: () => ({
          menuVisible: false
      })
  };
</script>

<style lang="scss">

</style>
