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
                     <span  class="primary--text font-weight-medium ">Nombres:</span><span> {{datos.firs_name}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="datos.firs_name" 
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
                     <span  class="primary--text font-weight-medium">Apellidos:</span><span> {{datos.last_name}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="datos.last_name" 
                     :label="userDataFields.lastNamesLabel"
                     color="secondary"
                     :hint="userDataFields.lastNameHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- LAST NAME END -->
            <!-- DOCUMENT ID -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Id:</span><span> {{datos.ident}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="datos.ident" 
                     :label="userDataFields.idLabel"
                     color="secondary"
                     :hint="userDataFields.idHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- DOCUMENT END -->
            <!-- EMAIL -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Correo:</span><span> {{datos.user_email}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="datos.user_email" 
                     :label="userDataFields.emailLabel"
                     color="secondary"
                     :hint="userDataFields.emailHint" 
                     :persistent-hint="persistentHint"
                     :rules="userDataFields.emailRules"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- EMAIL END -->
            <!-- PHONE -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Teléfono:</span><span> {{datos.userPhone}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="datos.userPhone" 
                     :label="userDataFields.phoneLabel"
                     color="secondary"
                     :hint="userDataFields.phoneHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- PHONE END -->
            <!-- BIRTHDAY -->
            <v-expansion-panel>
               <v-expansion-panel-header>
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Edad:</span><span> {{datos.birthDay}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-dialog
                     ref="dialog"
                     v-model="modal"
                     :return-value.sync="datos.birthDay"
                     persistent
                     width="320px"
                     >
                     <template v-slot:activator="{ on }">
                        <v-text-field
                           v-model="datos.birthDay"
                           prepend-icon="mdi-calendar-multiple"
                           :label="userDataFields.birthDayLabel"
                           color="secondary"
                           :hint="userDataFields.birthDayHint" 
                           :persistent-hint="persistentHint"
                           readonly
                           v-on="on"
                           ></v-text-field>
                     </template>
                     <v-date-picker 
                        v-model="datos.birthDay"
                        :locale="locale" 
                        scrollable>
                        <div class="flex-grow-1"></div>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(datos.birthDay)">OK</v-btn>
                     </v-date-picker>
                  </v-dialog>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- BIRTHDAY END -->
            <!-- ADDRESS -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Dirección:</span><span> {{datos.user_Address}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field 
                     v-model="datos.user_Address" 
                     :label="userDataFields.addressLabel"
                     color="secondary"
                     :hint="userDataFields.addressHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- ADDRESS END -->
            <!-- ROLL -->
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Roll Actual:</span><span> {{datos.tipo}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-overflow-btn
                     v-model="datos.tipo" 
                     class="my-2"
                     :items="userDataFields.rollEdit"
                     color="secondary"
                     label="Nuevo Roll"
                     editable
                     item-value="text"
                     :hint="userDataFields.rollHint" 
                     :persistent-hint="persistentHint"
                     ></v-overflow-btn>
               </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- ROLL END -->
         </v-expansion-panels>
         <!-- ===== EXPANSION PANEL USER END ===== -->


                </v-card-text>
      
    
      
         <!-- continue btn -->
         <v-card-actions>
            <v-btn color="primary mb-2" v-on:click="actualizar()">Actualizar informació</v-btn>
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
import { mapState } from "vuex";
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data() {
    return {
      datos: {
        firs_name: "",
        last_name: "",
        user_email: "",
        tipo: "",
        image: null,
        ident: "",
        userPhone: "",
        user_Address: "",
        birthDay: "",
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
        idLabel: "Documento de identidad",
        idHint: "Edite su id",
        emailLabel: "Email",
        emailHint: "Edite su email",
        phoneLabel: "Teléfono",
        phoneHint: "Edite su teléfono",
        birthDayLabel: "Fecha de cumpleaños",
        birthDayHint: "Edite su cumpleaños",
        emailRules: [
          v => !!v || "Correo es requerido",
          v => /.+@.+/.test(v) || "Correo no válido"
        ],
        rulesUpLoadAvatar: [
          value => !value || value.size < 2000000 || "Máximo 2 MB!"
        ],
        addressLabel: "Dirección",
        addressHint: "Edite la dirección",
        rollLabel: "Su rol es:",
        rollsHint: "Cambiar de Rol",
        rollEdit: [{ text: "Admin" }, { text: "Auxiliar" }, { text: "Cliente" }]
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
        this.datos.firs_name = response['firs_name']
        this.datos.last_name = response['last_name']
        this.datos.user_email = response['user_email']
        if (response['tipo']==1) {
          this.datos.tipo = "Cliente"
        }
        if (response['tipo']==2) {
          this.datos.tipo = "Auxiliar"
        }
        if (response['tipo']==3) {
          this.datos.tipo = "Administrador"
        }
        this.datos.image = response['image']
        this.datos.ident = response['ident']
        this.datos.userPhone = response['userPhone']
        this.datos.user_Address = response['user_Address']
        this.datos.birthDay = response['birthDay']
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods:{
    actualizar(){
      console.log("hola")
      var id = sessionStorage.getItem('id')
      const path = 'http://localhost:8000/api/v1.0/users/'+id+'/'
        /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
        const formData = new FormData();
        formData.append('firs_name',this.datos.firs_name)
        formData.append('last_name',this.datos.last_name)
        formData.append('user_email',this.datos.user_email)
        /*formData.append('tipo',this.datos.tipo)*/
        /*formData.append('image',this.datos.image)*/
        formData.append('ident',this.datos.ident)
        formData.append('userPhone',this.datos.userPhone)
        formData.append('birthDay',this.datos.birthDay)
        formData.append('user_Address',this.datos.user_Address)
        let options = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }

      axios.patch(path, formData, options).then((response)=> {
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  computed: {
    ...mapState(["userData", "staffData"])
  }
};
</script>