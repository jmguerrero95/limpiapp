<template>
         <!-- TOP BAR MENU -->
      <v-app-bar   :clipped-left="$vuetify.breakpoint.lgAndUp" app>
         <v-toolbar-title>
            <v-img :src="require('@/assets/PanelUserLogo.png')"  contain height="50"></v-img>
         </v-toolbar-title>
          <v-spacer></v-spacer>
 
       <template v-if="$vuetify.breakpoint.smAndUp">
         <v-btn text v-on:click="UpdateComponent(notificationsLink)">

          <v-badge  color="green" overlap>
               <span>Notificaciones</span>
            <template v-slot:badge>
              <span v-if="layoutUserPanel.notifications > 0">{{ layoutUserPanel.notifications }}</span>
              </template>
            
                  <v-icon large>mdi-alert-circle-outline</v-icon>
            
              </v-badge>
              </v-btn>

              <v-btn icon to="/cerrar">
                <v-icon>mdi-exit-to-app</v-icon>
                </v-btn>

      </template>
      </v-app-bar>
      <!-- TOP BAR MENU END -->
</template>


<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["layoutUserPanel"]),
  },
  methods: {
    ...mapMutations(["UpdateComponent"])
  },
  data() {
    return {
      show: false,
      notificationsLink:"compactiveservices"
    };
  }
};
</script>