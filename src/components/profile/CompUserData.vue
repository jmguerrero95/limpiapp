<template>
   <v-col xs="12" sm="12" md="4" lg="5" xl="5" >
     <v-row>
     <overlayalert/>
  </v-row>
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
            <v-avatar v-if='datos.image===null'
               size="100"
               class="mt-7 mb-7"
               >
               <img  :src="require('@/assets/default-avatar.jpg')" alt="avatar">
            </v-avatar>
            <v-avatar v-if='datos.image!==null'
               size="100"
               class="mt-7 mb-7"
               >
               <img  :src="datos.image" alt="avatar">
            </v-avatar>
            <v-file-input
               :rules="userDataFields.rulesUpLoadAvatar"
               color="secondary"
               accept="image/png, image/jpeg, image/bmp"
               placeholder="Actualizar imagen"
               prepend-icon="mdi-camera"
               label="Avatar"
               class="avatar-custom"
               v-model="datos.image2"
               ></v-file-input>
         </div>
              <!-- AVATAR PICTURE END-->
           <v-card-text>
                 <!-- ===== EXPANSION PANEL USER ===== -->
          <v-form v-model="valid" ref="formu" :lazy-validation="true">
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
                     :rules="[rules.texto, rules.required]"  
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
                     :rules="[rules.texto, rules.required]" 
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
                     :readonly="readonly"
                     :rules="[rules.numeros]"
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
            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Password:</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field
                     v-model="datos.pass" 
                     :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                     :type="show1 ? 'text' : 'password'"
                     name="input-10-1"
                     label="Ingrese una nueva contraseña"
                     hint="At least 8 characters"
                     counter
                     @click:append="show1 = !show1"
                    > 
                  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>
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
                     :rules="[rules.numeros]"
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
                     <span  class="primary--text font-weight-medium">Edad:</span><span> {{datos.birthDay2}}</span>
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
                        :picker-date.sync="pickerDate"
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
                     <span  class="primary--text font-weight-medium">Dirección:</span><span> {{datos.user_Address}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
               <v-expansion-panel-content>
                  <v-text-field
                     :rules="[rules.required]"
                     v-model="datos.user_Address" 
                     :label="userDataFields.addressLabel"
                     color="secondary"
                     :hint="userDataFields.addressHint" 
                     :persistent-hint="persistentHint"
                     >  </v-text-field>
               </v-expansion-panel-content>
            </v-expansion-panel>





            <v-expansion-panel>
               <v-expansion-panel-header >
                  <div class="panel-title">
                     <span  class="primary--text font-weight-medium">Roll Actual:</span><span> {{datos.tipo}}</span>
                  </div>
                  <template v-slot:actions>
                     <v-icon color="secondary">mdi-square-edit-outline</v-icon>
                  </template>
               </v-expansion-panel-header>
            </v-expansion-panel>
            <!-- ADDRESS END -->
            <!-- ROLL -->
            <!--<v-expansion-panel>
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
            </v-expansion-panel>-->
            <!-- ROLL END -->
            
         </v-expansion-panels>
         </v-form>
         <!-- ===== EXPANSION PANEL USER END ===== -->


                </v-card-text>
      
    
         <!-- continue btn -->
         <v-card-actions>
            <v-btn color="primary mb-2" v-on:click="actualizar()">Actualizar información</v-btn>
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
import overlayalert from '@/components/popups/CompPopsAlert.vue'
import { mapState,mapMutations } from "vuex";
import axios from 'axios'
export default {
  components: {
    overlayalert,
  },
  data() {
    return {
      readonly: false,
      valid: false,
      rules: {
           ///(?=.*[AZfont>)/.test(v)
           texto: v => /^[A-Z ]+$/i.test(v) || 'Use solo letras',
           required: value => !!value || "Requerido",
           min: v => v.length >= 6 || "Min 6 caractéres",
           emailMatch: () => "The email and password you entered don't match",
           numeros: v => /^\d+$/.test(v) || 'Use solo numeros',
         },
      show1:false,
      datos: {
        firs_name: "",
        last_name: "",
        user_email: "",
        tipo: "",
        image: "",
        image2: null,
        ident: "",
        userPhone: "",
        user_Address: "",
        birthDay: "",
        tipo2:"",
        pass:"",
      },
      birthDay:"",
      listNumber: 1,
      menu: false,
      pickerDate: null,
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
    this.popup({tipo:2,overlay:false})
    var id = sessionStorage.getItem('id')
    const path = 'https://limpi.app:8000/api/v1.0/users/'+id+'/'
      axios.get(path).then((response)=> {
        response = response.data
        this.datos.firs_name = response['firs_name']
        this.datos.last_name = response['last_name']
        this.datos.user_email = response['user_email']
        this.datos.image = response['image']
        if (response['tipo']==1) {
          this.datos.tipo = "Cliente"
          this.datos.tipo2 = 1
        }
        if (response['tipo']==2) {
          this.datos.tipo = "Auxiliar"
          this.datos.tipo2 = 2
        }
        if (response['tipo']==3) {
          this.datos.tipo = "Administrador"
          this.datos.tipo2 = 3
        }
        this.datos.ident = response['ident']
        if (this.datos.ident==""){
          this.readonly = true
        }
        this.datos.userPhone = response['userPhone']
        this.datos.user_Address = response['user_Address']
        this.birthDay = response['birthDay']
      })
      .catch((error) => {
        this.popup({tipo:4,overlay:true})
        console.log(error)
      })
  },
  methods:{
    actualizar(){
      if((this.$refs.formu.validate())){
        var id = sessionStorage.getItem('id')
        const path = 'https://limpi.app:8000/api/v1.0/users/'+id+'/'
          /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
          const formData = new FormData();
          formData.append('firs_name',this.datos.firs_name)
          formData.append('last_name',this.datos.last_name)
          formData.append('user_email',this.datos.user_email)
          if (this.datos.pass==null || this.datos.pass=="") {

          }
          else{
            formData.append('password',this.datos.pass)
          }
          /*formData.append('tipo',this.datos.tipo)*/
           if (this.datos.image2==null) {

          }
          else{
            formData.append('image',this.datos.image2)
          }
          if(this.datos.ident==null){

          }
          else{
            formData.append('ident',this.datos.ident)
          }
          if(this.datos.userPhone==null){

          }else{
            formData.append('userPhone',this.datos.userPhone)
          }
          if (this.birthDay==null) {

          }
          else{
            formData.append('birthDay',this.birthDay)
          }
          if(this.datos.user_Address==null){

          }else{
            formData.append('user_Address',this.datos.user_Address)
          }
          let options = {
            headers: {
              'content-type': 'multipart/form-data'
            }
          }

        axios.patch(path, formData, options).then((response)=> {
          var info = response.data
          this.datos.image = info['image']
          this.user.image = info['image']
          this.popup({tipo:3,overlay:true})
        })
        .catch((error) => {
          this.popup({tipo:4,overlay:true})
          console.log(error)
        })
      }else{
         this.popup({tipo:9,overlay:true})
      }
    },
    ...mapMutations(["popup"]),

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
          this.datos.birthDay2=edad

    },
  },

  computed: {
    ...mapState(["userData", "staffData", "user"])
  }
};
</script>