<template>
   <v-col xs="12" sm="12" md="4" lg="4" xl="4">
           <v-card>
         <v-card-title class="justify-center">
            <v-icon left color="primary">mdi-hail</v-icon>
            <div class="title primary--text">
               Competencias del {{staffData[listNumber].userRoll}}
            </div>
         </v-card-title>
         <v-divider></v-divider>
         <!-- ===== EXPANSION PANEL USER ===== -->
         <v-expansion-panels accordion>
            <!-- SPECIALS SERVICES -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                      <v-icon left color="primary">mdi-broom</v-icon>
                     <span  class="primary--text font-weight-medium ">Servicios especiales</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-checkbox v-for="specialservice of specialServices" :key="specialservice.taskid"  v-model="userInternalSkills" :label="specialservice.skill" :value="specialservice.skill" :disabled="specialservice.edit"></v-checkbox>
                  {{userInternalSkills}}
               </v-expansion-panel-content>
               
            </v-expansion-panel>
            <!-- SPECIALS SERVICES END -->
              <!-- SPECIALS SERVICES -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                      <v-icon left color="primary">mdi-account-check</v-icon>
                     <span  class="primary--text font-weight-medium ">Aplicar modalidad</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-checkbox v-for="modservice of modalServices" :key="modservice.taskid"  v-model="modCheckService" :label="modservice.servicename"
                  :value="modservice.servicename" :disabled="modservice.edit"
                  ></v-checkbox>
                  {{modCheckService}}
               </v-expansion-panel-content>
               
            </v-expansion-panel>
            <!-- SPECIALS SERVICES END -->
            
            
          

         </v-expansion-panels>
         <!-- ===== EXPANSION PANEL USER END ===== -->
                <!-- continue btn -->
         <v-card-actions>
            <v-btn color="primary mb-2" v-on:click="skills(userInternalSkills,modCheckService)">Actualizar información</v-btn>
         </v-card-actions>
         <!-- continue btn END -->
      </v-card>
 
   </v-col>
</template>
<style scoped>
.avatar-custom {
  margin: auto;
  width: 190px;
}
.v-input--selection-controls{
       margin-top: 0 !important;
    padding-top: 0 !important;

}
</style>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import { mapState } from "vuex";
export default {
  data() {
    return {
       listNumber: 1,
      menu: false,
      modal: false,
      menu2: false,
      locale: "es",
      accordion: true,
      popout: false,
      inset: false,
      multiple: false,
      disabled: false,
      readonly: false,
      focusable: false,
      persistentHint: true,
      userInternalSkills: [],
      modCheckService:[],
      
    };
  },
  methods: {
    skills(skills,mod){
      skills.forEach(guardar)
      mod.forEach(guardar_mod)
      function guardar(elemento,indice){
        const formData = new FormData();
        var id_user = sessionStorage.getItem('id')
        formData.append('id_user',id_user)
        formData.append('skill',elemento)
        var path = 'http://localhost:8000/api/v1.0/skills/'
        let options = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        axios.post(path, formData, options).then((response)=> {
        })
        .catch((error) => {
          console.log(error)
        })
      }
      function guardar_mod(elemento,indice){
        const formData = new FormData();
        var id_user = sessionStorage.getItem('id')
        formData.append('id_user',id_user)
        formData.append('modalidad',elemento)
        var path = 'http://localhost:8000/api/v1.0/tipo_mod/'
        let options = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        axios.post(path, formData, options).then((response)=> {
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  },
  computed: {

    ...mapState([
      "userData",
      "staffData",
      "specialServices",
      "modalServices",
   
    ])
  },

};
</script>