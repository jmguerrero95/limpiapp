<template>
   <v-row justify="center">
      <!-- section title -->
      <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
         <v-toolbar flat>
            <v-toolbar-title>
               <div class="title-section">
                  <div class="only-number accent primary--text">4</div>
                  <h2 class="ml-2 title primary--text">Observaciones del servicio |</h2>
                  <p class="mt-1 steper-sub-title subtitle-1">Para un óptimo resultado, brindenos mas información</p>
               </div>
            </v-toolbar-title>
         </v-toolbar>
      </v-col>
      <!-- section title END -->
      <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
         <!-- ========== USER DATA ========== -->
       
            <v-container>
                      <v-row>
                     <v-col cols="12" md="6" lg="6" xl="6">
                        <v-text-field 
                           v-model="persona" 
                           label="Persona a cargo"
                           color="secondary"
                           persistent-hint
                           hint="Responsable del servicio">
                        </v-text-field>
                     </v-col>
                     <v-col cols="12" md="6" lg="6" xl="6">
                        <v-text-field 
                           v-model="lugar" 
                           label="Dirección"
                           color="secondary"
                           persistent-hint
                           hint="Donde se realiza el servicio">
                        </v-text-field>
                     </v-col>
                     <v-col cols="12" md="6" lg="6" xl="6">
                        <v-text-field 
                           v-model="observaciones" 
                           label="Observaciones del servicio"
                           color="secondary"
                           persistent-hint
                           hint="Información adicional">
                        </v-text-field>
                     </v-col>
                     <v-col cols="12" md="6" lg="6" xl="6">
                        <v-select
                           v-model="ciudad"
                           :items="citiesAntioquia"
                           menu-props="auto"
                           color="secondary"
                           hide-details
                           label="Selecionar Ciudad"
                           single-line
                           ></v-select>
                        <p> El servicio se realizara en: {{ciudad}} </p>
                     </v-col>
               
            </v-row>

            </v-container>
           
           
            <v-card-actions>
               <!-- continue btn -->
               <v-row align="center" justify="center" class="mb-3">
                  <v-btn color="primary" @click="guardar(), GoNextState(5), resetScrollPage()">Verificar Datos</v-btn>
                  <v-btn text>Cancelar</v-btn>
               </v-row>
               <!-- continue btn END -->
            </v-card-actions>
             <!-- ========== USER DATA END ========== -->
      </v-col>
   </v-row>
</template>
<style>
   .v-picker__title{
   padding: 16px 16px 5px;
   }
   .v-picker__title.primary {
   height: 70px;
   }
   .v-picker__body > div {
   width: 80%;
   }
   .v-time-picker-title__time .v-picker__title__btn, .v-time-picker-title__time span {
   height: 40px;
   font-size: 40px;
   }
</style>
<script>
   import { mapState, mapMutations } from "vuex";
   export default {
      data(){
        return{
          persona: null,
          lugar: null,
          observaciones: null,
          ciudad: null,
          picker: null,
          disabled: false,
          readonly: false,
          landscape: false,
          ampmInTitle: false,
          useSeconds: false,
          format: 'ampm',
          fullWidth: false,
          noTitle: false,
          scrollable: false
        }
   
      },
     computed: {
       ...mapState([
         "servicePoint",
         "departmentsColombia",
         "citiesAntioquia",
         "servicesComp"
       ])
     },
   
     methods: {
        guardar(){
          sessionStorage.setItem('persona', this.persona)
          sessionStorage.setItem('lugar', this.lugar)
          sessionStorage.setItem('observaciones', this.observaciones)
          sessionStorage.setItem('ciudad', this.ciudad)
          this.step4({persona:this.persona, lugar:this.lugar, observaciones:this.observaciones, ciudad:this.ciudad})
        },
       ...mapMutations(["GoNextState", "resetScrollPage", "step4"])
     }
   };
</script>