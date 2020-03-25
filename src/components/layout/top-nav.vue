<template>
         <!-- TOP BAR MENU -->
      <v-app-bar   :clipped-left="$vuetify.breakpoint.lgAndUp" app>
         <v-toolbar-title>
            <v-img :src="require('@/assets/PanelUserLogo.png')"  contain height="50"></v-img>
         </v-toolbar-title>
         <v-app-bar-nav-icon @click="drawer2()"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
 
       <template v-if="$vuetify.breakpoint.smAndUp">
         <v-btn text v-on:click="UpdateComponent(notificationsLink)">

          <v-badge  color="green" overlap>
               <span>Notificaciones</span>
            <template v-slot:badge>
              <span v-if="layoutUserPanel.notifications > 0">{{notificacion}}</span>
              </template>
            
                  <v-icon large>mdi-alert-circle-outline</v-icon>
            
              </v-badge>
              </v-btn>

              <v-btn icon @click="salir()">
                <v-icon>mdi-exit-to-app</v-icon>
                </v-btn>

      </template>
      </v-app-bar>
      <!-- TOP BAR MENU END -->
</template>


<script>
import { mapState, mapMutations } from "vuex";
import axios from 'axios'
export default {
  data(){
    return{
      drawer: false,
    };
  },



  computed: {
    ...mapState(["layoutUserPanel", "user", "notificacion","menu"]),
  },
  methods: {
    drawer2(){
      var dat = this.menu
      if(dat==true){
        this.bar(false)
      }
      else{
        if(dat==false){
          this.bar(true)
        }
      }
    },
    salir(){
      localStorage.removeItem('vuex');
      location.href ="https://limpi.app";
    },
    ...mapMutations(["UpdateComponent","notificaciones","bar"])
  },
  data() {
    return {
      show: false,
      notificationsLink:"compactiveservices",
      tamaño_total: 0,
    };
  },
  created: function(){
    var id = this.user.id
    this.tipo = this.user.tipo
    if(this.tipo==3){
      const path = 'https://limpi.app:8000/api/v1.0/agend_full/?estado=1'
      axios.get(path).then((response)=> {
        this.notificaciones(response.data.count)
        //this.$store.commit('notificaciones', )
      })
      .catch((error) => {
        console.log(error)
      })
    }
    if(this.tipo==2){
      const path = 'https://limpi.app:8000/api/v1.0/agend_full/?id='+id
      axios.get(path).then((response)=> {
        this.notificaciones(response.data.count)
        //this.$store.commit('notificaciones', response.data.count)
      })
      .catch((error) => {
        console.log(error)
      })  
    }
  },
};
</script>