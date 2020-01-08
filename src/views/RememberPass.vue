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
            <h1 class="headline text-center">Si ha olvidado sus datos de ingreso, envianos un email</h1>
            <form action="">
               <v-container>
                  <v-row justify="center">
                     <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8">
                        <v-text-field v-model="email" :label="emailLabel" :rules="emailRules" :hint="hint" required>  </v-text-field>
                     </v-col>
                  </v-row>
               </v-container>
                         <div class="text-center mt-5">
               <span>Recuerde guardar su contraseña para futuros eventos.</span>
           
            </div>
               <div class="text-center">
                  <v-btn class="primary mt-5">
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
export default {
  name: "login",
  data() {
    return {
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
  }
};
</script>
<style scope>
.v-btn {
  text-transform: none;
  font-weight: 300;
}
</style>