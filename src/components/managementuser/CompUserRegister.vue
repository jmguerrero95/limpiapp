<template>
  <!-- CREATE USER -->
     <v-row class="justify-center">
            <v-card width="400">
               <v-card-title class="justify-center">
                  <v-icon left color="primary">mdi-tooltip-account</v-icon>
                  <div class="title primary--text">
                     Agregar un nuevo usuario
                  </div>
               </v-card-title>
               <v-divider></v-divider>
               <!-- AVATAR PICTURE -->
               <form @submit="onSubmit">
               <div class="text-center">
                  <v-avatar
                     size="100"
                     class="mt-7 mb-7"
                     >
                     <img  src="../../assets/default-avatar.jpg" alt="avatar">
                  </v-avatar>
                  <v-file-input
                     :rules="userDataFields.rulesUpLoadAvatar"
                     color="secondary"
                     accept="image/png, image/jpeg, image/bmp"
                     placeholder="Subir Imagen"
                     prepend-icon="mdi-camera"
                     label="Avatar"
                     class="avatar-custom"
                     v-model="form1.image"
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
                              <span  class="primary--text font-weight-medium ">Nombres:</span><span> {{form1.firs_name}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field 
                              v-model=" form1.firs_name" 
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
                              <span  class="primary--text font-weight-medium">Apellidos:</span><span> {{form1.last_name}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field 
                              v-model="form1.last_name" 
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
                              <span  class="primary--text font-weight-medium">Id:</span><span> {{form1.ident}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field 
                              v-model="form1.ident" 
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
                              <span  class="primary--text font-weight-medium">Correo:</span><span> {{form1.user_email}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field 
                              v-model="form1.user_email" 
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
                              <span  class="primary--text font-weight-medium">Teléfono:</span><span> {{form1.userPhone}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field 
                              v-model="form1.userPhone" 
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
                              <span  class="primary--text font-weight-medium">Edad:</span><span> {{form1.birthDay}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-dialog
                              ref="dialog"
                              v-model="modal"
                              :return-value.sync="form1.birthDay"
                              persistent
                              width="320px"
                              >
                              <template v-slot:activator="{ on }">
                                 <v-text-field
                                    v-model="form1.birthDay"
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
                                 v-model="form1.birthDay"
                                 :locale="locale" 
                                 scrollable>
                                 <div class="flex-grow-1"></div>
                                 <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                 <v-btn text color="primary" @click="$refs.dialog.save(form1.birthDay)">OK</v-btn>
                              </v-date-picker>
                           </v-dialog>
                        </v-expansion-panel-content>
                     </v-expansion-panel>
                     <!-- BIRTHDAY END -->
                     <!-- ADDRESS -->
                     <v-expansion-panel>
                        <v-expansion-panel-header >
                           <div class="panel-title">
                              <span  class="primary--text font-weight-medium">Dirección:</span><span> {{form1.user_Address}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field 
                              v-model="form1.user_Address" 
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
                              <span  class="primary--text font-weight-medium">Roll Actual:</span><span> {{form1.tipo}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-overflow-btn
                              v-model="form1.tipo" 
                              class="my-2"
                              :items="rollType"
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
                  <v-btn color="primary mb-2" type="submit">Crear Usuario</v-btn>
               </v-card-actions>
               <!-- continue btn END -->
             </form>
            </v-card>
            <!-- CREATE USER END -->
               </v-row>
  
</template>
<script>
import { mapState } from "vuex";
import axios from 'axios'
export default {
  data() {
    return {
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
      form1:{

      },
      form1:{
        firs_name:"Digite su nombre",
        last_name:"",
        user_email:"",
        tipo:"",
        image: null,
        ident:"",
        userPhone:"",
        birthDay:"",
        user_Address:"",
      },
      userDataFields: {
        firstNamesLabel: "Nombres",//
        firstNameHint: "Edite sus nombres",
        lastNamesLabel: "Apellidos",//
        lastNameHint: "Edite sus apellidos",
        idLabel: "Documento de identidad",
        idHint: "Edite su id",
        emailLabel: "Email",//
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

      }
    };
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()
      if(this.form1.tipo=="Auxiliar"){
        this.form1.tipo=2
      /*axios.post(path2, this.form1).then((response)=> {
      })
      .catch((error) => {
        console.log(error)
      }),*/

      }
      if(this.form1.tipo=="SuperAdmin"){
        this.form1.tipo=3
      }
      if(this.form1.tipo=="Cliente"){
        this.form1.tipo=1
      }
      const path = 'http://localhost:8000/api/v1.0/users/'
        /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
        const formData = new FormData();
        formData.append('firs_name',this.form1.firs_name)
        formData.append('last_name',this.form1.last_name)
        formData.append('user_email',this.form1.user_email)
        formData.append('password',this.form1.ident)
        formData.append('tipo',this.form1.tipo)
        formData.append('image',this.form1.image)
        formData.append('ident',this.form1.ident)
        formData.append('userPhone',this.form1.userPhone)
        formData.append('birthDay',this.form1.birthDay)
        formData.append('user_Address',this.form1.user_Address)
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

    },
  },
    computed: {
    ...mapState(["userData", "staffData","rollType"])
  }
};
</script>