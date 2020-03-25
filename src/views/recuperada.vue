<template>
   <div class="login">
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
            <h1 class="headline text-center">A su correo llegara la nueva contraseña, verifica tu bandeja de entrada</h1>
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
  import axios from 'axios'
export default {
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

      const path = 'http://3.15.13.45:8000/api/v1.0/recuperar/'
              axios.post(path, this.form).then((response)=> {
                this.popup({tipo:3,overlay:true})
                  setTimeout(alertFunc, 2000)
                  function alertFunc(){
                    VueRouter.push('login')
                  }
              })
              .catch((error) => {
                this.popup({tipo:4,overlay:true})
              })
  },
},
};
</script>
<style scope>
.v-btn {
  text-transform: none;
  font-weight: 300;
}
</style>