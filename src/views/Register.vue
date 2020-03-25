<template>
   <div class="login">
    <v-row>
     <overlayalert/>
  </v-row>
      <v-card elevation="7"
         max-width="600"
         class="mx-auto mt-5 mb-5"
         >
         <v-card-title class="justify-center">
            <v-img
               :src="require('../assets/MainLogo.png')"
               height="148"
               contain
               ></v-img>
         </v-card-title>
         <v-card-text>
            <h1 class="headline text-center">Registrese gratis</h1>
            <v-form v-model="valid" @submit="onSubmit" ref="formu">
               <v-container fluid>
                  <v-row>
                     <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field v-model="form.firs_name" :rules="[rules.texto]" :label="firstlabel" :hint="hint">  </v-text-field>
                     </v-col>
                     <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field v-model="form.last_name" :rules="[rules.texto]" :label="lastlabel" :hint="hint">  </v-text-field>
                     </v-col>
                     <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field v-model="form.user_email" :label="emailLabel" :rules="emailRules" :hint="hint">  </v-text-field>
                     </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field v-model="form.confirmEmail" :label="confirmEmailLabel" :rules="confirmEmailRules" :hint="hint">  </v-text-field>
                     </v-col>
                     <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field v-model="form.password" 
                           :label="labelPass" 
                           :hint="hintPass"
                           :rules="[rules.required, rules.min]"
                           :type="show1 ? 'text' : 'password'"
                           name="input-10-1"
                           counter
                           @click:append="show1 = !show1"
                           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                           >  
                        </v-text-field>
                     </v-col>
                           <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field v-model="form.confirmPassword" 
                           :label="confirmLabelPass" 
                           :hint="hintPass"
                           :rules="[rules.required, rules.min]"
                           :type="show1 ? 'text' : 'password'"
                           name="input-10-1"
                           counter
                           @click:append="show1 = !show1"
                           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                           >  
                        </v-text-field>
                     </v-col>
                  </v-row>
               </v-container>
                         <div class="text-center mt-5">
               <span>Al aceptar este documento confirmo que estoy deacuerdo con las politicas de privacidad expuestas aqui</span><v-btn small text  font-weight-regular color="secondary text-none">
                  "Politicas de privacidad y tratamiento de datos"
               </v-btn>
           
            </div>
               <div class="text-center">
                  <v-btn class="primary mt-5" type="submit">
                     <span>¡Registrarme ahora!</span>
                     <v-icon right>
                        mdi-lead-pencil
                     </v-icon>
                  </v-btn>
               </div>
            </v-form>
  
         </v-card-text>
      </v-card>
   </div>
</template>
<style scoped>
.v-input__slider {
  width: 100%;
}
.bg-corp {
  background: rgb(162, 212, 25);
  background: linear-gradient(
    38deg,
    rgba(162, 212, 25, 1) 0%,
    rgba(94, 191, 217, 1) 100%
  );
}
</style>
<script>
  import overlayalert from '@/components/popups/CompPopsAlert.vue'
  import VueRouter from '../router.js'
  import axios from 'axios'
  import swal from 'sweetalert'
  import { mapState, mapMutations } from "vuex";
export default {
  components: {
    overlayalert,
  },
  name: "login",
  data() {
    return {
      valid: true,
      form: {
        firs_name: "",
        last_name: "",
        user_email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
        tipo: 1,
      },
      firstlabel: "Nombres",
      lastlabel: "Apellidos",
      emailLabel: "Correo Electronico",
      emailRules: [
        v => !!v || "Correo es requerido",
        v => /.+@.+/.test(v) || "Correo no válido"
      ],
      confirmEmailLabel: "Confirmar Correo",
      confirmEmailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "Correo no coincide"
      ],
      hint: "Campo obligatorio",
      labelPass: "Contraseña",
      hintPass: "Ingrese 6 digitos mínimo",
        
        confirmLabelPass: "Contraseña",
      hintPass: "Ingrese 6 digitos mínimo",
      show1: false,
      show2: true,
      show3: false,
      show4: false,

      rules: {
        ///(?=.*[AZfont>)/.test(v)
        texto: v => /^[A-Z ]+$/i.test(v) || 'Use solo letras',
        required: value => !!value || "Requerido",
        min: v => v.length >= 6 || "Min 6 caractéres",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()
      if (this.$refs.formu.validate()) {
        if (this.form.password!=this.form.confirmPassword){
          this.popup({tipo:11,overlay:true})
          }else{
            if(this.form.user_email!=this.form.confirmEmail){
              this.popup({tipo:10,overlay:true})
            }else{
              const path = 'https://limpi.app:8000/api/v1.0/users/'
              axios.post(path, this.form).then((response)=> {
                this.form.firs_name
                this.form.last_name
                this.form.user_email
                this.form.password
                this.form.tipo
                this.popup({tipo:3,overlay:true})
                  setTimeout(alertFunc, 2000)
                  function alertFunc(){
                    VueRouter.push('login')
                  }
              })
              .catch((error) => {
                this.popup({tipo:4,overlay:true})
              })
        }
      }
    }
  },
    ...mapMutations(["popup"]),
}
}
</script>
<style scope>
.v-btn {
  text-transform: none;
  font-weight: 300;
}
</style>