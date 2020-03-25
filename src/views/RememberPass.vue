<template>
   <div class="login">
    <overlayalert/>
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
            <h1 class="headline text-center">Si ha olvidado sus datos de ingreso, envianos un email</h1>
            <form @submit="onSubmit">
               <v-container>
                  <v-row justify="center">
                     <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
                        <v-text-field v-model="form.email" :label="emailLabel" :rules="emailRules" :hint="hint" required>  </v-text-field>
                     </v-col>
                  </v-row>
               </v-container>
                         <div class="text-center mt-5">
               <span>Recuerde guardar su contraseña para futuros eventos.</span>
           
            </div>
               <div class="text-center">
                  <v-btn class="primary mt-5" type="submit">
                     <span>¡Enviar mis datos!</span>
                     <v-icon right>
                        mdi-lead-pencil
                     </v-icon>
                  </v-btn>
               </div>
            </form>
  
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
  import axios from 'axios'
  import VueRouter from '../router.js'
  import { mapState, mapMutations } from "vuex";
export default {
  components: {
    overlayalert,
  },
  name: "login",
  data() {
    return {
      form:{
        email: "",
      },
      firstNames: "",
      firstlabel: "Nombres",
      lastNames: "",
      lastlabel: "Apellidos",
      email: "",
      emailLabel: "Correo Electronico",
      emailRules: [
        v => !!v || "Correo es requerido",
        v => /.+@.+/.test(v) || "Correo no válido"
      ],
      confirmEmail: "",
      confirmEmailLabel: "Confirmar Correo",
      confirmEmailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "Correo no coincide"
      ],
      hint: "Campo obligatorio",
      password: "",
      labelPass: "Contraseña",
      hintPass: "Ingrese 6 digitos mínimo",
        confirmPassword: "",
        confirmLabelPass: "Contraseña",
      hintPass: "Ingrese 6 digitos mínimo",
      show1: false,
      show2: true,
      show3: false,
      show4: false,

      rules: {
        required: value => !!value || "Requerido",
        min: v => v.length >= 6 || "Min 6 caractéres",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()

      const path = 'https://limpi.app:8000/api/v1.0/recuperar/'
              axios.post(path, this.form).then((response)=> {
                this.popup({tipo:29,overlay:true})
                  setTimeout(alertFunc, 2000)
                  function alertFunc(){
                    VueRouter.push('login')
                  }
              })
              .catch((error) => {
                this.popup({tipo:30,overlay:true})
              })
  },
  ...mapMutations(["popup"]),
},
};
</script>
<style scope>
.v-btn {
  text-transform: none;
  font-weight: 300;
}
</style>