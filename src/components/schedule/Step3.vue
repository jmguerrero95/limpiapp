<template>
   <v-row justify="center">
      <!-- section title -->
      <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
         <v-toolbar flat>
            <v-toolbar-title>
               <div class="title-section">
                  <div class="only-number accent primary--text">3</div>
                  <h2 class="ml-2 title primary--text">Elegir Auxiliar  |</h2>
                  <p class="mt-1 steper-sub-title subtitle-1">Elija una auxiliar (todas las auxiliares cuentan con habilidades generales en limpieza a profundidad, lavado y planchado de ropa)</p>
               </div>
            </v-toolbar-title>
         </v-toolbar>
      </v-col>
      <!-- section title END -->
      <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
         <v-row>
            <!-- ========== USER DATA ========== -->
            <v-col v-for="userlist of auxi" :key="userlist.id" xs="12" sm="12" md="12" lg="4" xl="4">
               <v-card>
                  <!-- CONTENT CARD-->
                  <v-list-item three-line>
                     <v-list-item-content>
                        <div class="overline mb-4">Auxiliar Disponible</div>
                        <v-list-item-title class="headline mb-1 primary--text">{{userlist.firs_name}} <br> {{userlist.last_name}}</v-list-item-title>
                     </v-list-item-content>
                     <v-list-item-avatar
                        size="80"
                        class="mt-7 mb-7">
                        <img  :src="'http://localhost:8000'+userlist.image" alt="avatar">
                     </v-list-item-avatar>
                  </v-list-item>
                  <v-list>
                     <v-list-item dense>
                        <v-list-item-icon>
                           <v-icon color="primary">mdi-card-bulleted-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                           <v-list-item-title>{{userlist.id}}</v-list-item-title>
                           <v-list-item-subtitle>ID</v-list-item-subtitle>
                        </v-list-item-content>
                     </v-list-item>
                     <v-list-item dense>
                        <v-list-item-icon>
                           <v-icon color="primary">mdi-calendar-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                           <v-list-item-title>{{ageUser}} años</v-list-item-title>
                           <v-list-item-subtitle>Edad</v-list-item-subtitle>
                        </v-list-item-content>
                     </v-list-item>
                  </v-list>
                  <!-- CONTENT CARD END -->
                  <v-list-item>
                    
                    
                           <v-card outlined class="pa-4">
                              <div class="overline">Servicios especiales</div>
                              <p><span v-for="skills of userlist.userSkills" :key="skills.taskid" v-if="skills.active" class="font-weight-regular subtitle-2">{{skills.skill}}, </span><span>.</span></p>
                           </v-card>
                 
                  </v-list-item>
                  <v-card-actions>
                     <v-btn class="ma-2" small color="secondary" light @click="auxiliar(userlist.id, userlist.firs_name, userlist.last_name, userlist.image), resetScrollPage(), GoNextState(4)">
                        Agendar
                        <v-icon dark medium right>mdi-account-arrow-right-outline</v-icon>
                     </v-btn>
                  </v-card-actions>
               </v-card>
            </v-col>
            <!-- ========== USER DATA END ========== -->
         </v-row>
      </v-col>
   </v-row>
</template>
<style>
.avatar-custom {
  margin: auto;
  width: 190px;
}
</style>
<script>
import { mapState, mapMutations } from "vuex";
import axios from 'axios'
export default {
  name: "compuserdata",
  data() {
    return {
      ageUser: 40,
      aux:[],
 
    };
  },
  /*beforeMount(){
    const path = 'http://localhost:8000/api/v1.0/auxi_filter/'
      axios.get(path).then((response)=> {
        var datos = response.data
        datos.forEach(buscar)
        function buscar(elemento,indice){
          console.log(elemento.id)
          const path2 = 'http://localhost:8000/api/v1.0/skills_filter/?id='+elemento.id
          axios.get(path2).then((response2)=> {
            var datos2 = response2.data
            console.log(datos2)
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },*/
  computed: {
    ...mapState(["userData", "staffData", "auxi"]),
  },
  methods: {
    auxiliar(id, firs_name, last_name, image){
      this.step3({id:id, firs_name:firs_name, last_name:last_name, image:image})
      sessionStorage.setItem('auxiliar', id)
    },
    ...mapMutations(["GoNextState", "resetScrollPage", "step3"])
  }
};
</script>