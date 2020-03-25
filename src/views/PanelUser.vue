<template>
   <v-app id="menu-user">
<!--<v-row v-if="showoverlay">
     <overlayalert/>
</v-row>-->


      <!-- LAYOUT MENU -->
      <sideleftmenu/>
      <topnav/>
      <!-- LAYOUT MENU END -->
      <!-- CALL COMPONENTS -->
      <v-content>
         <v-container>
            <v-row align="start"
               justify="center">
               <!-- active component  --> 
               <!-- popup -->
               <compsupport/>
                     <component :is="layoutUserPanel.supportPanel"></component>
               <!-- popup end --> 
               <!-- panel 1 --> 
               <component :is="layoutUserPanel.activeComponent"></component>
               <!-- panel 2 --> 
               <!-- active component END --> 
            </v-row>
         </v-container>
      </v-content>
      <!-- CALL COMPONENTS END -->
   </v-app>
</template>
<style>
.bg-corp {
  background: #eeeeee !important;
}
.theme--light.v-select .v-chip--disabled,
.theme--light.v-select .v-select__selection--disabled {
  color: #091f54 !important;
  opacity: 1 !important;
}
</style>
<script>
import { mapMutations, mapState } from "vuex";
import compsupport from "@/components/support/CompSupport.vue";
import sideleftmenu from "@/components/layout/side-left-menu.vue";
import topnav from "@/components/layout/top-nav.vue";
import usermanagement from "@/components/CompUserManagement.vue";
import compprofile from "@/components/CompProfile.vue";
import compprofileuser from "@/components/CompProfileUser.vue";
import compshedule from "@/components/CompSchedule";
import compactiveservices from "@/components/CompActiveServices.vue";
import compactiveservicesuser from "@/components/CompActiveServicesUser.vue";
import comphistory from "@/components/CompHistory.vue";
import comphistoryuser from "@/components/CompHistoryUser.vue";
import overlayalert from '@/components/popups/CompPopsAlert.vue';
import editUser from "@/components/managementuser/editUser.vue";
import find from "@/components/managementuser/CompFindUser.vue";


export default {
  data() {
       return {
         componentKey: 0,
         auxi:[],
         drawer: false,
       };
     },
  components: {
    comphistoryuser,
    compactiveservicesuser,
    find,
    editUser,
    overlayalert,
    compsupport,
    sideleftmenu,
    topnav,
    usermanagement,
    compprofile,
    compprofileuser,
    compshedule,
    compactiveservices,
    comphistory
  },
  computed: {
    ...mapState(["layoutUserPanel"])
  },
  created(){
    if(localStorage.getItem('vuex')){

    }else{
      location.href ="https://limpi.app:8080/login";
    }
  },
  methods:{

  }
};
</script>