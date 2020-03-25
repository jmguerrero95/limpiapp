<template>
  <!-- CREATE USER -->
  <div>
  <overlayalert/>
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
               <v-form v-model="valid" ref="formu" :lazy-validation="true">
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
                              <span  class="primary--text font-weight-medium ">Nombres:</span><span :rules="[rules.texto, rules.required]"> {{form1.firs_name}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field
                              :rules="[rules.texto, rules.required]" 
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
                              :rules="[rules.texto, rules.required]"
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
                              :rules="[rules.numeros]" 
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
                     <v-expansion-panel>
                        <v-expansion-panel-header >
                           <div class="panel-title">
                              <span  class="primary--text font-weight-medium ">password:</span><span :rules="[rules.texto, rules.required]"> {{form1.password}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-text-field
                              :rules="[rules.required]" 
                              v-model=" form1.password" 
                              :label="userDataFields.password"
                              color="secondary"
                              :hint="userDataFields.passwordhint" 
                              :persistent-hint="persistentHint"
                              >  </v-text-field>
                        </v-expansion-panel-content>
                     </v-expansion-panel>
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
                              :rules="[rules.numeros]" 
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
                              <span  class="primary--text font-weight-medium">Edad:</span><span> {{form1.birthDay2}}</span>
                           </div>
                           <template v-slot:actions>
                              <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                           </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                           <v-dialog
                              ref="dialog"
                              v-model="modal"
                              :return-value.sync="birthDay"
                              persistent
                              width="320px"
                              >
                              <template v-slot:activator="{ on }">
                                 <v-text-field
                                    :rules="[rules.required]"
                                    v-model="birthDay"
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
                                 v-model="birthDay"
                                 :locale="locale" 
                                 scrollable>
                                 <div class="flex-grow-1"></div>
                                 <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                 <v-btn text color="primary" @click="$refs.dialog.save(birthDay)">OK</v-btn>
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
                              :rules="[rules.required]"
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
                              :rules="[rules.required]"
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
                  <v-btn color="primary mb-2" v-if="if1" @click="guardar1()">Crear Usuario</v-btn>
                  <v-btn color="primary mb-2" v-if="if2" @click="actualizar()">Actualizar Usuario</v-btn>
                  <v-btn color="error mb-2" @click="cancel">Atras</v-btn>
               </v-card-actions>
               <!-- continue btn END -->
             </v-form>
         </v-card>
         <!-- continue btn END -->
         <v-col xs="12" sm="12" md="4" lg="4" xl="4" v-if="form1.tipo=='Auxiliar'">
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
               </v-expansion-panel-content>
               
            </v-expansion-panel>
            <!-- SPECIALS SERVICES END -->
            
            
          

         </v-expansion-panels>
         <!-- ===== EXPANSION PANEL USER END ===== -->
                <!-- continue btn -->
         <v-card-actions>
            <v-btn color="primary mb-2" :disabled="if3" v-on:click="guardar2(userInternalSkills,modCheckService)">Guardar skills</v-btn>
         </v-card-actions>
         <!-- continue btn END -->
         </v-card>
     </v-col>
         
            <!-- CREATE USER END -->
               </v-row>
               </div>
  
</template>
<script>
import { mapState,mapMutations } from "vuex";
import overlayalert from '@/components/popups/CompPopsAlert.vue'
import axios from 'axios'
export default {
   components: {
    overlayalert,
  },
  data() {
    return {
      valid: false,
      rules: {
           ///(?=.*[AZfont>)/.test(v)
           texto: v => /^[A-Z ]+$/i.test(v) || 'Use solo letras',
           required: value => !!value || "Requerido",
           min: v => v.length >= 6 || "Min 6 caractéres",
           emailMatch: () => "The email and password you entered don't match",
           numeros: v => /^\d+$/.test(v) || 'Use solo numeros',
         },
      if1:true,
      if2:false,
      if3:true,
      guardar: "guardar1()",
      listNumber: 1,
      boton:false,
      id: null,
      menu: false,
      modal: false,
      menu2: false,
      locale: "es",
      birthDay:"",
      popout: false,
      inset: false,
      multiple: false,
      disabled: false,
      readonly: false,
      focusable: false,
      persistentHint: true,
      userInternalSkills: [],
      modCheckService:[],
      form1:{
        firs_name:"",
        last_name:"",
        user_email:"",
        tipo:"",
        tipo2:"",
        image: null,
        ident:"",
        userPhone:"",
        birthDay:"",
        user_Address:"",
        id:0,
        password:"",
      },
      userDataFields: {
        password: "password",
        passwordhint: "Edite password",
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
    guardar1(){
      if((this.$refs.formu.validate())){
         if(this.form1.firs_name!=""){
            if(this.form1.last_name!=""){
               if(this.form1.ident!=""){
                  if(this.form1.user_email!=""){
                     if(this.form1.password!=""){
                        if(this.form1.userPhone!=""){
                           if(this.birthDay!=""){
                              if(this.form1.user_Address!=""){
                                 if(this.form1.tipo!=""){
                                    if(this.form1.tipo=="Auxiliar"){
                                      this.form1.tipo2=2
                                    /*axios.post(path2, this.form1).then((response)=> {
                                    })
                                    .catch((error) => {
                                      console.log(error)
                                    }),*/

                                    }
                                    if(this.form1.tipo=="SuperAdmin"){
                                      this.form1.tipo2=3
                                    }
                                    if(this.form1.tipo=="Cliente"){
                                      this.form1.tipo2=1
                                    }
                                    const path = 'https://limpi.app:8000/api/v1.0/users/'
                                      /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
                                      const formData = new FormData();
                                      formData.append('firs_name',this.form1.firs_name)
                                      formData.append('last_name',this.form1.last_name)
                                      formData.append('ident',this.form1.ident)
                                      formData.append('user_email',this.form1.user_email)
                                      formData.append('password',this.form1.password)
                                      formData.append('userPhone',this.form1.userPhone)
                                      formData.append('birthDay',this.birthDay)
                                      if (this.form1.image==null) {

                                      }
                                      else{formData.append('image',this.form1.image)}
                                      formData.append('user_Address',this.form1.user_Address)
                                      formData.append('tipo',this.form1.tipo2)
                                      let options = {
                                        headers: {
                                          'content-type': 'multipart/form-data'
                                        }
                                      }

                                    axios.post(path, formData, options).then((response)=> {
                                       this.form1.id = response.data.id
                                       this.popup({tipo:5,overlay:true})
                                       this.if1=false
                                       this.if2=true
                                       this.if3=false
                                      //this.UpdateComponent('find')
                                      
                                    })
                                    .catch((error) => {
                                      this.popup({tipo:4,overlay:true})
                                      console.log(error)
                                    })

                                 }else{
                                    this.popup({tipo:20,overlay:true})
                                 }
                              }else{
                                 this.popup({tipo:19,overlay:true})
                              }
                              //this.popup({tipo:19,overlay:true})
                           }else{
                              this.popup({tipo:18,overlay:true})
                           }
                        }else{
                           this.popup({tipo:17,overlay:true})
                        }
                     }else{
                        this.popup({tipo:16,overlay:true})
                     }
                  }else{
                     this.popup({tipo:15,overlay:true})
                  }
               }else{
                  this.popup({tipo:14,overlay:true})
               }
            }else{
               this.popup({tipo:13,overlay:true})
            }  
         }else{
            this.popup({tipo:12,overlay:true})
         }
         //console.log((this.$refs.formu.validate()))
      }else{
         this.popup({tipo:9,overlay:true})
      }
         

    },
    paso(){
      this.change(
        {
          showpanel: "compfinduser",
        })
    },
    actualizar(){
      if((this.$refs.formu.validate())){
         const path2 = 'https://limpi.app:8000/api/v1.0/users/'+this.form1.id+'/'
         if(this.form1.tipo=="Auxiliar"){
           this.form1.tipo2=2
         /*axios.post(path2, this.form1).then((response)=> {
         })
         .catch((error) => {
           console.log(error)
         }),*/

         }
         if(this.form1.tipo=="SuperAdmin"){
           this.form1.tipo2=3
         }
         if(this.form1.tipo=="Cliente"){
           this.form1.tipo2=1
         }
         const path = 'https://limpi.app:8000/api/v1.0/users/'
           /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
           const formData = new FormData();
           formData.append('firs_name',this.form1.firs_name)
           formData.append('last_name',this.form1.last_name)
           formData.append('user_email',this.form1.user_email)
           formData.append('password',this.form1.password)
           formData.append('tipo',this.form1.tipo2)
           if (this.form1.image==null) {

           }
           else{formData.append('image',this.form1.image)}
           formData.append('ident',this.form1.ident)
           formData.append('userPhone',this.form1.userPhone)
           formData.append('birthDay',this.birthDay)
           formData.append('user_Address',this.form1.user_Address)
           let options = {
             headers: {
               'content-type': 'multipart/form-data'
             }
           }

         axios.patch(path2, formData, options).then((response)=> {
            this.popup({tipo:3,overlay:true})
            })
         .catch((error) => {
           console.log(error)
         })
      }else{
         this.popup({tipo:9,overlay:true})
      }
    },
    guardar2(skills,mod){
      const path2 = 'https://limpi.app:8000/api/v1.0/users/'+this.form1.id+'/'
      if(this.form1.tipo=="Auxiliar"){
        this.form1.tipo2=2
      /*axios.post(path2, this.form1).then((response)=> {
      })
      .catch((error) => {
        console.log(error)
      }),*/

      }
      if(this.form1.tipo=="SuperAdmin"){
        this.form1.tipo2=3
      }
      if(this.form1.tipo=="Cliente"){
        this.form1.tipo2=1
      }
      const path = 'https://limpi.app:8000/api/v1.0/users/'
        /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
        const formData = new FormData();
        formData.append('firs_name',this.form1.firs_name)
        formData.append('last_name',this.form1.last_name)
        formData.append('user_email',this.form1.user_email)
        formData.append('password',this.form1.password)
        formData.append('tipo',this.form1.tipo2)
        if (this.form1.image==null) {

        }
        else{formData.append('image',this.form1.image)}
        formData.append('ident',this.form1.ident)
        formData.append('userPhone',this.form1.userPhone)
        formData.append('birthDay',this.birthDay)
        formData.append('user_Address',this.form1.user_Address)
        let options = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }

      axios.patch(path2, formData, options).then((response)=> {


      	skills.forEach(guardar)
      mod.forEach(guardar_mod)
      function guardar(elemento,indice){
        const formData = new FormData();
        var id_user = response.data.id
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
        var id_user = response.data.id
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





      	/*this.form1.id = response.data.id
      	console.log(this.form1.id)*/
        //this.UpdateComponent('find')
        /*this.change(
        {
          showpanel: "compfinduser",
        })]*/
        this.popup({tipo:3,overlay:true})
      })
      .catch((error) => {
        console.log(error)
      })

    },






    cancel(){
      this.change(
        {
          showpanel: "compfinduser",
        })
    },
    /*skills(skills,mod){
      skills.forEach(guardar)
      mod.forEach(guardar_mod)
      function guardar(elemento,indice){
        const formData = new FormData();
        var id_user = this.response.data.id
        formData.append('id_user',id_user)
        formData.append('skill',elemento)
        var path = 'http://3.15.13.45:8000/api/v1.0/skills/'
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
        var id_user = this.form1.id
        formData.append('id_user',id_user)
        formData.append('modalidad',elemento)
        var path = 'http://3.15.13.45:8000/api/v1.0/tipo_mod/'
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
    },*/
    ...mapMutations(["change","popup"])
  },
  watch: { 
      birthDay(val) {
      var fecha=val;
      //console.log(fecha)
          // Si la fecha es correcta, calculamos la edad
          var values=fecha.split("-");
          var dia = values[2];
          var mes = values[1];
          var ano = values[0];
          // cogemos los valores actuales
          var fecha_hoy = new Date();
          var ahora_ano = fecha_hoy.getYear();
          var ahora_mes = fecha_hoy.getMonth()+1;
          var ahora_dia = fecha_hoy.getDate();
   
          // realizamos el calculo
          var edad = (ahora_ano + 1900) - ano;
          if ( ahora_mes < mes )
          {
              edad--;
          }
          if ((mes == ahora_mes) && (ahora_dia < dia))
          {
              edad--;
          }
          if (edad > 1900)
          {
              edad -= 1900;
          }
   
          // calculamos los meses
          var meses=0;
          if(ahora_mes>mes)
              meses=ahora_mes-mes;
          if(ahora_mes<mes)
              meses=12-(mes-ahora_mes);
          if(ahora_mes==mes && dia>ahora_dia)
              meses=11;
   
          // calculamos los dias
          var dias=0;
          if(ahora_dia>dia)
              dias=ahora_dia-dia;
          if(ahora_dia<dia)
          {
              var ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
              dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
          }
          //console.log(edad)
          this.form1.birthDay2=edad
          console.log(this.birthDay)

    }
  },
    computed: {
    ...mapState(["userData", "staffData","rollType","specialServices","modalServices"])
  }
};
</script>