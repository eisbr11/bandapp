<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">BandApp</span>
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>
                <md-list>
                    <md-list-item to="/" @click="menuVisible = !menuVisible">
                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">Home</span>
                    </md-list-item>
                    <md-list-item to="/bands" @click="menuVisible = !menuVisible">
                        <md-icon>group</md-icon>
                        <span class="md-list-item-text">Bands</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>person</md-icon>
                        <span class="md-list-item-text">Members</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>date_range</md-icon>
                        <span class="md-list-item-text">Dates</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <router-view/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
      name: 'app',
      localStorage: {
          notes: {
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
    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
        primary: md-get-palette-color(red, A200), // The primary color of your application
        accent: md-get-palette-color(blue, A200), // The accent or secondary color
        //theme: dark
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme

    .md-app {
        height: 100vh;
    }
</style>
