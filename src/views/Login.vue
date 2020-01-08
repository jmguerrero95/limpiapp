<template>
   <div class="login">
      <v-card elevation="7"
         max-width="400"
         class="mx-auto mt-5 mb-5"
         >
         <v-card-title class="justify-center">
            <h1 class="headline">Bienvenidos a</h1>
         </v-card-title>
         <v-img
            :src="require('../assets/MainLogo.png')"
            height="148"
            contain
            ></v-img>
         <v-card-text>
            <form @submit="onSubmit">
               <v-container fluid>
                  <v-row>
                     <v-col cols="12">
                        <v-text-field v-model="form.user_email" :label="label" :hint="hint">  </v-text-field>
                     </v-col>
                     <v-col cols="12">
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
                  </v-row>
               </v-container>
               <div class="text-center">
                  <v-btn class="primary" type="submit"><span>Ingresar</span>
                      <v-icon right>
                          mdi-login-variant
                      </v-icon>
                  </v-btn>
               </div>
            </form>
              <div class="text-center mt-5">
                   <v-btn small text  font-weight-regular color="secondary text-none" to="/recordar-password">
                       "He olvidado mis datos de acceso"</v-btn>
                       <v-btn small text color="secondary text-none" to="/registro">
                       "Registrarme como usuario"</v-btn>
               </div>
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
import VueRouter from '../router.js'
import axios from 'axios'
import swal from 'sweetalert'
import { mapState, mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
      form: {
        user_email: "",
        password: "",
      },
      label: "Usuario",
      hint: "Ingrese su usuario registrado",
      labelPass: "Contraseña",
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

      const path = 'http://localhost:8000/login'
      axios.post(path, this.form).then((response)=> {
        var info = response
        if (info.data == false) {
          swal("Datos incorrectos, intente nuevamente", "", "error")
        }
        else {
          info=JSON.parse(info.data)
          console.log(info)
          sessionStorage.setItem('id', info['id'])
          sessionStorage.setItem('tipo', info['tipo'])
          this.login(
            {
              id: info['id'],
              firs_name: info['firs_name'],
              last_name: info['last_name'],
              user_email: info['user_email'],
              tipo: info['tipo'],
              image: info['image'],
              ident: info['ident'],
              userPhone: info['userPhone'],
              user_Address: info['user_Address'],
              birthDay: info['birthDay'],
              id_modalidad:0
            })
          swal({
            icon: 'success',
            title: 'Bienvenido',
            button: false,
            timer: 2000,
          onAfterClose: pasar()
          })
           function pasar(){
            //console.log("hola")
            VueRouter.push('panel-usuario')
           }
          //swal("Bienvenido", "", "success")
        }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    ...mapMutations(["login"]),
  }
}
</script>

<style scope>
.v-btn {
  text-transform: none;
  font-weight: 300;
}
</style>
