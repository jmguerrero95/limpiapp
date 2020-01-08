<template>
   <v-container>
      <v-row justify="center">
         <v-col xs="12" sm="12" md="6" lg="4" xl="4" v-for="sheet of staffData[listNumber].AssignedServices" :key="sheet.serviceid">
            <v-card>
               <v-list-item>
                  <v-list-item-avatar>
                     <img v-bind:src="require(`../../assets/${sheet.pictureselect}.jpg`)">
                  </v-list-item-avatar>
                  <v-list-item-content>
                     <v-fab-transition>
                        <v-btn
                          
                           color="secondary"
                           dark
                           absolute
                           top
                           right
                           small
                           >
                           <v-icon>mdi-checkbox-multiple-marked-circle-outline</v-icon>
                        </v-btn>
                     </v-fab-transition>
                     <v-list-item-title class="headline">
                        <div class="accent--text"> ID. {{sheet.serviceid}} </div>
                     </v-list-item-title>
                     <v-list-item-subtitle>Asignado a: {{sheet.selectedprofessional}}</v-list-item-subtitle>
                  </v-list-item-content>
               </v-list-item>
               <v-divider class="mx-4"></v-divider>
               <v-expansion-panels>
                  <v-expansion-panel>
                     <v-expansion-panel-header>Ver todos los detalles</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <v-list-item>
                           <v-list-item-content>
                              <ul class="list-triangle-icon">
                                 <li>
                                    <div class="overline">Persona a cargo</div>
                                    <span class="subtitle-1 font-weight-medium"> {{sheet.personinhome}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Tipo de servicio</div>
                                    <span class="subtitle-1 font-weight-medium"> {{sheet.planselect}}</span>
                                 </li>
                          
                         
                                 <li>
                                    <div class="overline">Ciudad</div>
                                    <span class="subtitle-1 font-weight-medium"> {{sheet.cityservice}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Dirección</div>
                                    <span class="subtitle-1 font-weight-medium"> {{sheet.serviceaddres}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Anotaciones</div>
                                    <span class="subtitle-1 font-weight-medium"> {{sheet.notesservice}}</span>
                                 </li>
                              </ul>
                           </v-list-item-content>
                        </v-list-item>
                     </v-expansion-panel-content>
                  </v-expansion-panel>
               </v-expansion-panels>
               <v-list-item>
                  <ul class="list-triangle-icon">
                     <li>
                        <div class="overline">Dias solicitados</div>
                       <v-chip-group
                           v-model="selection"
                           column>
                           <v-chip v-for="(dateservice, index) of sheet.selectedDays" :key="index">
                              {{dateservice}}
                           </v-chip>
                        </v-chip-group>
                     </li>
                             <li>
                        <div class="overline">Hora seleccionada</div>
                        <v-chip-group
                           v-model="selection"
                           column>
                           <v-chip>
                              {{sheet.selectedHour}}
                           </v-chip>
                        </v-chip-group>
                     </li>
                  </ul>
               </v-list-item>
               <v-divider class="mx-4"></v-divider>
               <v-card-actions>
                  <v-btn>
                     Cancelar
                  </v-btn>
                  <v-btn dark>Aprobar</v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
   data(){
      return{
         listNumber: 1,
           selection: 1
      }
   },
   created: function(){
    /*var id = sessionStorage.getItem('id')
    console.log(id)
    const path = 'http://localhost:8000/api/v1.0/agenda'
      axios.get(path).then((response)=> {
        response = response.data
        const path = 'http://localhost:8000/api/v1.0/fech_agend?id_agenda=10'*/
        /*console.log(response['id'])
        this.datos.firs_name = response['firs_name']
        this.datos.last_name = response['last_name']
        this.datos.user_email = response['user_email']
        if (response['tipo']==1) {
          this.datos.tipo = "Cliente"
        }
        if (response['tipo']==2) {
          this.datos.tipo = "Auxiliar"
        }
        if (response['tipo']==3) {
          this.datos.tipo = "Administrador"
        }
        this.datos.image = response['image']
        this.datos.ident = response['ident']
        this.datos.userPhone = response['userPhone']
        this.datos.user_Address = response['user_Address']
        this.datos.birthDay = response['birthDay']*/
      /*})
      .catch((error) => {
        console.log(error)
      })*/
  },
  computed: {
    ...mapState(["userData","staffData"])
  }
};
</script>