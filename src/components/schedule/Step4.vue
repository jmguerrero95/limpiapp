<template>
   <v-row justify="center">
    <overlayalert/>
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
                  <v-btn color="primary" @click="guardar(), resetScrollPage()">Verificar Datos</v-btn>
                  <v-btn @click="GoNextState(1)">Cancelar</v-btn>
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
  import overlayalert from '@/components/popups/CompPopsAlert.vue'
   import { mapState, mapMutations } from "vuex";
   export default {
    components: {
    overlayalert,
  },
      data(){
        return{
          persona: "",
          lugar: "",
          observaciones: "",
          ciudad: "",
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
    created(){
      this.popup({tipo:2,overlay:false})
     },
     methods: {
        guardar(){
          if (this.persona==""||this.persona==null) {
            this.popup({tipo:25,overlay:true})
          }
            else{
              if(this.lugar==""||this.lugar==null){
                this.popup({tipo:26,overlay:true})
              }
              else{
                if(this.observaciones==""||this.observaciones==null){
                  this.popup({tipo:27,overlay:true})
                }
                else{
                  if(this.ciudad==""||this.ciudad==null){
                    this.popup({tipo:28,overlay:true})
                  }
                  else{
                  sessionStorage.setItem('persona', this.persona)
                  sessionStorage.setItem('lugar', this.lugar)
                  sessionStorage.setItem('observaciones', this.observaciones)
                  sessionStorage.setItem('ciudad', this.ciudad)
                  this.step4({persona:this.persona, lugar:this.lugar, observaciones:this.observaciones, ciudad:this.ciudad})
                  this.GoNextState(5)
                  this.resetScrollPage()
                  }
                }
              }
            }
        },
       ...mapMutations(["GoNextState", "resetScrollPage", "step4", "popup"])
     }
   };
</script>