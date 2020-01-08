<template>
   <v-container>
      <v-row align="start" justify="center">
         <v-col xs="12" sm="12" md="6" lg="4" xl="4" v-for="sheet of staffData[listNumber].AssignedServices" :key="sheet.serviceid">
            <v-card :loading="loading">
               <v-list-item>
                  <v-list-item-avatar>
                     <img v-bind:src="require(`../../assets/${sheet.pictureselect}.jpg`)">
                  </v-list-item-avatar>
                  <v-list-item-content>
                     <v-list-item-title class="headline">
                        <div class="accent--text"> ID. {{sheet.idservice}} </div>
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
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    listNumber: 1,
    hidden: false,
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  },
  computed: {
    ...mapState(["userData", "staffData"])
  }
};
</script>