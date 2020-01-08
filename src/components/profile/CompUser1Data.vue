<template>
   <v-col xs="12" sm="12" md="4" lg="5" xl="5" >
      <v-card>
         <v-card-title class="justify-center">
            <v-icon left color="primary">mdi-tooltip-account</v-icon>
            <div class="title primary--text">
               Datos Personales
            </div>
         </v-card-title>
         <v-divider></v-divider>
       
         
         <!-- AVATAR PICTURE -->
         <div class="text-center">
            <v-avatar
               size="100"
               class="mt-7 mb-7"
               >
               <img  :src="staffData[listNumber].avatarImage" alt="avatar">
            </v-avatar>
            <v-file-input
               :rules="userDataFields.rulesUpLoadAvatar"
               color="secondary"
               accept="image/png, image/jpeg, image/bmp"
               placeholder="Actualizar imagen"
               prepend-icon="mdi-camera"
               label="Avatar"
               class="avatar-custom"
               ></v-file-input>
         </div>
              <!-- AVATAR PICTURE END-->
           <v-card-text>
                 <!-- ===== EXPANSION PANEL USER ===== -->
         <v-expansion-panels  accordion>
            <!-- FIRST NAME -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium ">Nombres:</span><span> {{form.firs_name}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="form.firs_name" 
                     :label="userDataFields.firstNamesLabel"
                     color="secondary"
                     :hint="userDataFields.firstNameHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- FIRST NAME END -->
            <!-- LAST NAME -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Apellidos:</span><span> {{form.last_name}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="form.last_name" 
                     :label="userDataFields.lastNamesLabel"
                     color="secondary"
                     :hint="userDataFields.lastNameHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- LAST NAME END -->
            <!-- EMAIL -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Correo:</span><span> {{form.user_email}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="form.user_email" 
                     :label="userDataFields.emailLabel"
                     color="secondary"
                     :hint="userDataFields.emailHint" 
                     :persistent-hint="persistentHint"
                     :rules="userDataFields.emailRules"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- EMAIL END -->
         </v-expansion-panels>
         <!-- ===== EXPANSION PANEL USER END ===== -->


                </v-card-text>
      
    
      
         <!-- continue btn -->
         <v-card-actions>
            <v-btn color="primary mb-2" v-on:click="update">Actualizar información</v-btn>
         </v-card-actions>
         <!-- continue btn END -->
      </v-card>
   </v-col>
</template>
<style>
.avatar-custom {
  margin: auto;
  width: 190px;
}
</style>
<script>
import axios from 'axios'
import swal from 'sweetalert'
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        firs_name: "",
        last_name: "",
        user_email: "",
      },
       listNumber: 1,
      menu: false,
      modal: false,
      menu2: false,
      locale: "es",
      popout: false,
      inset: false,
      multiple: false,
      disabled: false,
      readonly: false,
      focusable: false,
      persistentHint: true,
      userDataFields: {
        firstNamesLabel: "Nombres",
        firstNameHint: "Edite sus nombres",
        lastNamesLabel: "Apellidos",
        lastNameHint: "Edite sus apellidos",
        emailLabel: "Email",
        emailHint: "Edite su email",
        emailRules: [
          v => !!v || "Correo es requerido",
          v => /.+@.+/.test(v) || "Correo no válido"
        ],
        rulesUpLoadAvatar: [
          value => !value || value.size < 2000000 || "Máximo 2 MB!"
        ],
      }
    };
  },
  created: function(){
    var id = sessionStorage.getItem('id')
    console.log(id)
    const path = 'http://localhost:8000/api/v1.0/users/'+id+'/'
      axios.get(path).then((response)=> {
        response = response.data
        console.log(response['id'])
        this.form.firs_name = response['firs_name']
        this.form.last_name = response['last_name']
        this.form.user_email = response['user_email']
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    update(evt){
      var obj = {'firs_name': this.form.firs_name, 'last_name': this.form.last_name, 'user_email': this.form.user_email}
      var json = JSON.stringify(obj)
      var id = sessionStorage.getItem('id')
      const path = 'http://localhost:8000/api/v1.0/users/'+id+'/'
      axios.patch(path, obj).then((response)=> {
        this.form.firs_name
        this.form.last_name
        this.form.user_email
        swal("usuario registrado exitosamente", "", "success")
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },
  computed: {
    ...mapState(["userData", "staffData"])
  }
};
</script>