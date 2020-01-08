<template>
   <v-row align="start" justify="center">
      <v-col cols="12">
         <!-- section title -->
         <v-row>
            <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
               <v-toolbar flat>
                  <v-toolbar-title>
                     <div class="title-section">
                        <div class="only-number accent primary--text">5</div>
                        <h2 class="ml-2 title primary--text">Resumen |</h2>
                        <p class="mt-1 steper-sub-title subtitle-1">Esta es la informacion del servicio a contratar.</p>
                     </div>
                  </v-toolbar-title>
               </v-toolbar>
            </v-col>
         </v-row>
         <!-- section title END -->
         <!-- Resume Panels  -->
         <v-row>
            <v-col cols="12" md="8" lg="8" xl="8">
               <v-row>
                  <!-- ========== panel data user ========== -->
                  <v-col xs="12" sm="12" md="12" lg="6" xl="6">
                     <v-card outlined>
                        <v-list-item>
                           <v-list-item-content>
                              <v-list-item-title class="headline mb-1">Ficha del Servicio</v-list-item-title>
                              <ul class="list-triangle-icon">
                                 <li><span class="subtitle-1 font-weight-black">Cliente: </span> {{user.firs_name}}</li>
                                 <li><span class="subtitle-1 font-weight-black">Plan:</span>  {{step1.tipo}} {{step1.modalidad}}</li>
                                 <li>
                                    <div class="subtitle-1 font-weight-black">Dias del servicio:</div>
                                    <v-chip class="subtitle-1 service-style-date"  color="orange" text-color="white" v-for="(selectday, index) of step2.date" :key="index"> {{selectday}}</v-chip>
                                 </li>
                                 <li><span class="subtitle-1 font-weight-black">Hora:</span>{{step2.picker}}</li>
                              </ul>
                           </v-list-item-content>
                        </v-list-item>
                     </v-card>
                  </v-col>
                  <!-- ========== panel data user END ========== -->
                  <!-- ========== notes ========== -->
                  <v-col xs="12" sm="12" md="12" lg="6" xl="6">
                     <v-card outlined>
                        <v-list-item>
                           <v-list-item-content>
                              <v-list-item-title class="headline mb-1">Observaciones</v-list-item-title>
                              <ul class="list-triangle-icon">
                                 <li><span class="subtitle-1 font-weight-black">Responsable:</span> {{step4.persona}}</li>
                                 <li><span class="subtitle-1 font-weight-black">Dirección:</span>{{step4.lugar}}</li>
                                 <li><span class="subtitle-1 font-weight-black">Ciudad:</span> {{step4.ciudad}}</li>
                                 <li><span class="subtitle-1 font-weight-black">Recomendaciones:</span> {{step4.observaciones}}</li>
                              </ul>
                           </v-list-item-content>
                        </v-list-item>
                     </v-card>
                  </v-col>
                  <!-- ========== notes END ========== -->
                  <!-- ========== Selection staff ========== -->
                  <v-col xs="12" sm="12" md="12" lg="12" xl="12">
                     <v-card outlined>
                        <v-list-item>
                           <v-list-item-content class="">
                              <div class="overline mb-4 ">Auxiliar Disponible</div>
                              <v-list-item-title class="headline mb-1 primary--text">{{step3.firs_name}} {{step3.last_name}}</v-list-item-title>
                           </v-list-item-content>
                           <v-list-item-avatar
                              size="100"
                              class="mt-7 mb-7">
                              <img  :src="'http://localhost:8000'+step3.image" alt="avatar">
                           </v-list-item-avatar>
                        </v-list-item>
                        <v-list>
                           <v-list-item dense>
                              <v-list-item-icon>
                                 <v-icon color="primary">mdi-card-bulleted-outline</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                 <v-list-item-title>{{step3.id}}</v-list-item-title>
                                 <v-list-item-subtitle>ID</v-list-item-subtitle>
                              </v-list-item-content>
                           </v-list-item>
                           <v-list-item dense>
                              <v-list-item-icon>
                                 <v-icon color="primary">mdi-calendar-check</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                 <v-list-item-title>{{user.birthDay}} años</v-list-item-title>
                                 <v-list-item-subtitle>Edad</v-list-item-subtitle>
                              </v-list-item-content>
                           </v-list-item>
                        </v-list>
                        <v-list-item>
                           <v-card outlined class="pa-4 mb-5">
                              <div class="overline secondary--text">Servicios especiales</div>
                              <p><span v-for="specialservices of staffData[staffSelect].userSkills" :key="specialservices.taskid" v-if="specialservices.active" class="font-weight-regular subtitle-2">{{specialservices.skill}}, </span><span>.</span></p>
                           </v-card>
                        </v-list-item>
                     </v-card>
                  </v-col>
                  <!-- ========== Selection staff END ========== -->
               </v-row>
            </v-col>
            <v-col cols="12" md="4" lg="4" xl="4">
               <v-card color="teal lighten-5">
                  <v-card-title>
                     <v-icon large left>mdi-coin</v-icon>
                     <span class="title font-weight-light">Datos de cuenta</span>
                  </v-card-title>
                  <v-list-item-subtitle class="ml-5">
                     Realice su pago o transferencia
                  </v-list-item-subtitle>
                  <!-- account number -->
                  <v-list-item>
                     <v-list-item-icon>
                        <v-icon color="primary">mdi-office-building</v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title>009-848.025-86</v-list-item-title>
                        <v-list-item-subtitle>Cuenta corriente</v-list-item-subtitle>
                     </v-list-item-content>
                     <v-list-item-icon>
                        <a href="https://api.whatsapp.com/send?phone=3234011899&text=Gracias%20por%20comunicarse%20con%20nosotros,%20en%20un%20momento%20le%20atenderemos..." target="_blank" class="btn-whatsap">
                           <v-icon>mdi-whatsapp</v-icon>
                        </a>
                     </v-list-item-icon>
                  </v-list-item>
                  <!-- account number END -->
                  <!-- Company name -->
                  <v-list-item>
                     <v-list-item-icon>
                        <v-icon color="primary">mdi-grease-pencil</v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title>Limpia fácil-Hogar premium</v-list-item-title>
                        <v-list-item-subtitle>Nombre de la empresa</v-list-item-subtitle>
                     </v-list-item-content>
                     <v-list-item-icon>
                        <a href="https://api.whatsapp.com/send?phone=3234011899&text=Gracias%20por%20comunicarse%20con%20nosotros,%20en%20un%20momento%20le%20atenderemos..." target="_blank" class="btn-whatsap">
                           <v-icon>mdi-whatsapp</v-icon>
                        </a>
                     </v-list-item-icon>
                  </v-list-item>
                  <!-- company name END -->
                  <!-- Titular name -->
                  <v-list-item>
                     <v-list-item-icon>
                        <v-icon color="primary">mdi-account-child-circle</v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title>Mariano Ortega</v-list-item-title>
                        <v-list-item-subtitle>Titular de la cuenta</v-list-item-subtitle>
                     </v-list-item-content>
                     <v-list-item-icon>
                        <a href="https://api.whatsapp.com/send?phone=3234011899&text=Gracias%20por%20comunicarse%20con%20nosotros,%20en%20un%20momento%20le%20atenderemos..." target="_blank" class="btn-whatsap">
                           <v-icon>mdi-whatsapp</v-icon>
                        </a>
                     </v-list-item-icon>
                  </v-list-item>
                  <!-- titular name END -->
                  <!-- Documento id -->
                  <v-list-item>
                     <v-list-item-icon>
                        <v-icon color="primary">mdi-account-card-details-outline</v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title>CC.1094925747</v-list-item-title>
                        <v-list-item-subtitle>Documento de identidad</v-list-item-subtitle>
                     </v-list-item-content>
                     <v-list-item-icon>
                        <a href="https://api.whatsapp.com/send?phone=3234011899&text=Gracias%20por%20comunicarse%20con%20nosotros,%20en%20un%20momento%20le%20atenderemos..." target="_blank" class="btn-whatsap">
                           <v-icon>mdi-whatsapp</v-icon>
                        </a>
                     </v-list-item-icon>
                  </v-list-item>
                  <!-- Documento id END -->
                  <!-- continue btn -->
                  <!-- terminos y condiciones -->
                  <v-list-item>
                     <v-list-item-content>
                        <v-checkbox v-model="checkbox">
                           <template v-slot:label>
                              <div>
                                 He leido los 
                                 <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                       <a
                                          target="_blank"
                                          href="https://local.google.com/place?id=4457522596774763770&use=posts&lpsid=1247708782495473677"
                                          @click.stop
                                          v-on="on"
                                          >
                                       Términos y condiciones
                                       </a>
                                    </template>
                                    Las condiones del servicio están reguladas, por favor lea y acepte estos términos
                                 </v-tooltip>
                              </div>
                           </template>
                        </v-checkbox>
                     </v-list-item-content>
                  </v-list-item>
                  <!-- terminos y condiciones END -->
                  <!-- continue btn -->
                  <v-card-actions>
                     <v-btn color="primary" @click="GoNextState(6), resetScrollPage(), agendar()">CONFIRMO EL SERVICIO</v-btn>
                     <v-btn text>Cancelar</v-btn>
                  </v-card-actions>
                  <!-- continue btn END -->
               </v-card>
            </v-col>
         </v-row>
         <!-- Resume Panels END -->
      </v-col>
   </v-row>
</template>
<style scoped>
.btn-whatsap {
  text-decoration: none !important;
}
.service-style-date {
  margin: 5px;
}
.v-application .mb-7 {
  margin-bottom: 0 !important;
}
.list-triangle-icon {
  list-style-image: url("../../assets/icon-list-triangle.png");
}
</style>
<script>
import axios from 'axios'
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      terms: false,
      checkbox:false,

      ageUser: 40,
      staffSelect: 0
    };
  },
  methods: {},
  computed: {
    ...mapState(["userData", "staffData", "step1", "step2", "step3", "step4", "user"])
  },

  methods: {
   agendar(){
      var id = sessionStorage.getItem('id')
      const path = 'http://localhost:8000/api/v1.0/agenda/'
        /*const path2 = 'http://localhost:8000/api/v1.0/auxi/'*/
        const formData = new FormData();
        formData.append('id_user',this.user.id)
        formData.append('modalidad',this.step1.id_modalidad)
        formData.append('tipo_servi',this.step1.id_tipo)
        /*formData.append('tipo',this.datos.tipo)*/
        /*formData.append('image',this.datos.image)*/
        formData.append('hora',this.step2.picker)
        formData.append('id_auxi',this.step3.id)
        formData.append('pers_Acargo',this.step4.persona)
        formData.append('direccion',this.step4.lugar)
        formData.append('observaciones',this.step4.observaciones)
        formData.append('lugar',this.step4.ciudad)
        formData.append('estado',1)
        formData.append('realizado',0)
        let options = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }

      axios.post(path, formData, options).then((response)=> {
         const path = 'http://localhost:8000/api/v1.0/fech_agend/'
         var fechas = this.step2.date
         var i
         for(i in fechas){
            console.log(fechas[i])
            const formData = new FormData();
            id=response.data.id
            formData.append('grupo',id)
            formData.append('fecha',fechas[i])
            let options = {
               headers: {
                  'content-type': 'multipart/form-data'
               }
            }
            axios.post(path, formData, options).then((response)=>{

            })
            .catch((error) => {
               console.log(error)
            })
         }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    ...mapMutations(["GoNextState", "resetScrollPage"])
  }
};
</script>