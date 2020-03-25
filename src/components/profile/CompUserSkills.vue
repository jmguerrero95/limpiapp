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
                  <v-checkbox disabled v-for="specialservice of specialServices" :key="specialservice.taskid"  v-model="userInternalSkills" :label="specialservice.skill" :value="specialservice.skill"></v-checkbox>
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
                  <v-checkbox disabled v-for="modservice of modalServices" :key="modservice.taskid"  v-model="modCheckService" :label="modservice.servicename"
                  :value="modservice.servicename"
                  ></v-checkbox>
               </v-expansion-panel-content>
               
            </v-expansion-panel>
            <!-- SPECIALS SERVICES END -->
            
            
          

         </v-expansion-panels>
         <!-- ===== EXPANSION PANEL USER END ===== -->
                <!-- continue btn -->
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
  created: function(){
    var id = sessionStorage.getItem('id')
    const path = 'https://limpi.app:8000/api/v1.0/users/'+id+'/'
      axios.get(path).then((response)=> {
        response = response.data
        var skill2=response['this_skills']
        for (var skill in skill2){
          if (skill2[skill].skill=="Cuidado de menores"){
            this.userInternalSkills.push("Cuidado de menores")
          }
          if (skill2[skill].skill=="Cuidado de adulto mayor"){
            this.userInternalSkills.push("Cuidado de adulto mayor")
          }
          if (skill2[skill].skill=="Atencion a mascotas"){
            this.userInternalSkills.push("Atencion a mascotas")
          }
          if (skill2[skill].skill=="Limpieza zonas comunes"){
            this.userInternalSkills.push("Limpieza zonas comunes")
          }
          if (skill2[skill].skill=="Diligencias y compras"){
            this.userInternalSkills.push("Diligencias y compras")
          }
          if (skill2[skill].skill=="Servicio de cafeteria"){
            this.userInternalSkills.push("Servicio de cafeteria")
          }
          if (skill2[skill].skill=="Preparacion de alimentos"){
            this.userInternalSkills.push("Preparacion de alimentos")
          }
        }

        var mod2=response['this_mod']
        for (var mod in mod2){
          if (mod2[mod].modalidad=="Hogar"){
            this.modCheckService.push("Hogar")
          }
          if (mod2[mod].modalidad=="Pymes"){
            this.modCheckService.push("Pymes")
          }
        }
      })
      .catch((error) => {
        this.popup({tipo:4,overlay:true})
      })},
  methods: {
    skills(skills,mod){
      skills.forEach(guardar)
      mod.forEach(guardar_mod)
      function guardar(elemento,indice){
        const formData = new FormData();
        var id_user = sessionStorage.getItem('id')
        formData.append('id_user',id_user)
        formData.append('skill',elemento)
        var path = 'https://limpi.app:8000/api/v1.0/skills/'
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
        var path = 'https://limpi.app:8000/api/v1.0/tipo_mod/'
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