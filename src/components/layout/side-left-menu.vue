<template>

 <!-- LEFT BAR MENU -->
      <v-navigation-drawer
         v-model="menu"
         :clipped="true"
         :mini-variant.sync="mini"
         app
         permanentz
         >
         <!-- avatar and name profile -->
     
         <v-list-item>
            <v-list-item-avatar v-if='this.user.image===null||this.user.image=="https://limpi.app:8000null"' height="48" min-width="48" width="48">
               <img src="@/assets/default-avatar.jpg"></img>
            </v-list-item-avatar>
            <v-list-item-avatar v-else height="48" min-width="48" width="48">
               <img :src="this.user.image"></img>
            </v-list-item-avatar>
            <v-list-item-title>{{nombre}}</v-list-item-title>
            <v-btn
               icon
               @click.stop="mini = !mini"
               >
               <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
         </v-list-item>
         <!-- avatar and name profile END-->
         <v-divider></v-divider>
         <!-- menu buttons -->
         <v-list v-if='tipo==3' :dense="false">
            <v-list-item 
               v-for="item in menuLeft"
               :key="item.title"
               link @click="UpdateComponent(item.componetlink)"
               >
               <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title> {{ item.title }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
         <v-list v-if='tipo==2' :dense="false">
            <v-list-item 
               v-for="item in menuLeft2"
               :key="item.title"
               link @click="UpdateComponent(item.componetlink)"
               >
               <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title> {{ item.title }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
         <v-list v-if='tipo==1' :dense="false">
            <v-list-item 
               v-for="item in menuLeft3"
               :key="item.title"
               link @click="UpdateComponent(item.componetlink)"
               >
               <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title> {{ item.title }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
         <!-- menu buttons END -->
         <v-divider></v-divider>
         <!-- last menu buttons -->
         <v-list :dense="false">
            <v-list-item link @click="SupportAction(lastButtons.componetlink)">
               <v-list-item-icon>
                  <v-icon>mdi-face-agent</v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title>Soporte</v-list-item-title>
               </v-list-item-content>
              
            </v-list-item>
                  <v-list-item link @click="salir()">
               <v-list-item-icon>
                  <v-icon>mdi-exit-to-app</v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title>Salir</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
         <!-- last menu buttons END -->
      </v-navigation-drawer>
      <!-- LEFT BAR MENU END -->
   
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VueRouter from '../../router.js'
import { link } from "fs";
export default {
  components: {
   
  },
  data() {
    return {
      mini: false,
        tipo: "",
        nombre: "",
        image: "",
        menuLeft: [
          {
            title: "Perfil cliente",
            icon: "mdi-account-outline",
            componetlink: "compprofile"
          },
          {
            title: "Manejo de usuarios",
            icon: "mdi-account-multiple-plus-outline",
            componetlink: "usermanagement"
          },
          {
            title: "Agendar servicio",
            icon: "mdi-calendar-text",
            componetlink: "compshedule"
          },
          {
            title: "Servicios activos",
            icon: "mdi-broom",
            componetlink: "compactiveservices"
          },
          { title: "Historial", icon: "mdi-history", componetlink: "comphistory" }
        ],
        menuLeft2: [
          {
            title: "Perfil cliente",
            icon: "mdi-account-outline",
            componetlink: "compprofile"
          },
          {
            title: "Servicios activos",
            icon: "mdi-broom",
            componetlink: "compactiveservices"
          },
          { title: "Historial", icon: "mdi-history", componetlink: "comphistory" }
        ],
        menuLeft3: [
          {
            title: "Perfil cliente",
            icon: "mdi-account-outline",
            componetlink: "compprofile"
          },
          {
            title: "Agendar servicio",
            icon: "mdi-calendar-text",
            componetlink: "compshedule"
          },
          {
            title: "Servicios activos",
            icon: "mdi-broom",
            componetlink: "compactiveservicesuser"
          },
          { title: "Historial", icon: "mdi-history", componetlink: "comphistoryuser" }
        ],

      lastButtons: [
        {title: "Soporte", icon:"mdi-face-agent", componetlink:"compsupport" , overlaystatus: true },
        { title: "Salir", icon: "mdi-exit-to-app", componetlink: "closebtn"}
      ]
    };
  },
  created: function(){
    this.tipo = this.user.tipo
    this.nombre = this.user.firs_name
    this.image = this.user.image
    this.image2 = this.image
    this.drawer = this.menu
  },
  methods: {
    salir(){
      localStorage.removeItem('vuex');
      location.href ="https://limpi.app";
    },
    ...mapMutations(["UpdateComponent","SupportAction"])
  },
  computed: {
    ...mapState(["user","menu"])
  },

};
</script>