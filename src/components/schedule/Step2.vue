<template>
   <v-row justify="center">
      <v-col cols="12">
         <v-row>
            <!-- section title -->
            <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
               <v-toolbar flat>
                  <v-toolbar-title>
                     <div class="title-section">
                        <div class="only-number accent primary--text">2</div>
                        <h2 class="ml-2 title primary--text">Fecha del Servicio y hora  |</h2>
                        <p class="mt-1 steper-sub-title subtitle-1">Elija los dias que requiere el servicio y el horario.</p>
                     </div>
                  </v-toolbar-title>
               </v-toolbar>
            </v-col>
            <!-- section title END -->
         </v-row>
         <v-row align="center" class="">
            <v-col xs="12" sm="12" md="4" lg="4" xl="4">
               <v-date-picker
                  v-model="dates"
                  multiple
                  full-width
                  reactive
                  header-color="accent"
                  color="accent"
                  :min="currentDate"
                  >
                  <v-menu
                     ref="menu"
                     v-model="menu"
                     :close-on-content-click="false"
                     :return-value.sync="dates"
                     transition="scale-transition"
                     offset-y
                     min-width="300px">
                     <template v-slot:activator="{off }">
                        <v-combobox
                           v-model="dates"
                           multiple
                           chips
                           small-chips
                           label="Fechas seleccionadas"
                           prepend-icon="mdi-calendar-multiselect"
                           readonly
                           ></v-combobox>
                     </template>
                     <v-date-picker v-model="dates" multiple no-title scrollable>
                        <div class="flex-grow-1"></div>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
                     </v-date-picker>
                  </v-menu>
               </v-date-picker>
            </v-col>
            <v-col cols="12" md="4" lg="4" xl="4">
               <v-alert
               color="secondary"
                  dense
                  type="info"
                  class="text--primary"
                  >
                  Despues de seleccionar las fechas, elija la <strong>hora</strong> del servicio
               </v-alert>
            </v-col>
            <v-col  xs="12" sm="12"  md="4" lg="4" xl="4">
               <!-- PICKER TIME -->
               <v-time-picker
               color="accent"
               full-width
                  v-model="picker"
                  ampm-in-title
                  format= "ampm">
                  <div class="title text-center accent--text">Seleccione la hora del servicio</div>
               </v-time-picker>
               <!-- PICKER TIME END -->
               <!-- continue btn -->
               <v-btn class="mt-4 ml-5" color="primary" @click="fecha(dates, picker), resetScrollPage(), GoNextState(3)">
                  Continuar
               </v-btn>
               <v-btn text>Cancelar</v-btn>
               <!-- continue btn END -->
            </v-col>
         </v-row>
      </v-col>
      <!-- calendar selection -->
      <!-- calendar selection END -->
   </v-row>
</template>
<style>
   .steper-sub-title {
   margin-left: 8px;
   }
</style>
<script>
   import { mapMutations, mapActions } from "vuex";
   import axios from 'axios'

   export default {
     data() {
       return {
         picker: null,
         currentDate: new Date().toISOString().substr(0, 10),
         dates: [],
         menu: false
       };
     },
     methods: {
      fecha(date, picker){
        this.step2({date:date, picker:picker})
        sessionStorage.setItem('fechas', JSON.stringify(date))
        var fechas = JSON.stringify(date)
        this.$store.dispatch('loadAuxi', {fechas: fechas})
        /*var path = 'http://localhost:8000/api/v1.0/agenda_filter/?fechas='+fechas
        axios.get(path).then((response)=> {
          this.auxi = response.data
          console.log(this.auxi)
        })
        .catch((error) => {
          console.log(error)
        })*/
        sessionStorage.setItem('hora', picker)
      },
       ...mapMutations(["GoNextState","resetScrollPage", "step2"]),
       allowedDates(val) {
         let totalDays = parseInt(val.split("-")[2], 10);
         let month2019 = parseInt(val.split("-")[1], 10);
         switch (month2019) {
           case 9:
             console.log("Estas en septiembre");
             if (
               totalDays === 1 ||
               totalDays === 7 ||
               totalDays === 8 ||
               totalDays === 14 ||
               totalDays === 15 ||
               totalDays === 21 ||
               totalDays === 22 ||
               totalDays === 28 ||
               totalDays === 29
             ) {
               console.log("Dia festivo: " + totalDays);
             } else {
               return totalDays;
             }
             break;
           case 10:
             console.log("Estas en Octubre");
             if (
               totalDays === 5 ||
               totalDays === 6 ||
               totalDays === 12 ||
               totalDays === 13 ||
               totalDays === 19 ||
               totalDays === 20 ||
               totalDays === 26 ||
               totalDays === 27
             ) {
               console.log("Dia festivo: " + totalDays);
             } else {
               return totalDays;
             }
             break;
           case 11:
             console.log("Estas en Noviembre");
             if (
               totalDays === 2 ||
               totalDays === 3 ||
               totalDays === 9 ||
               totalDays === 10 ||
               totalDays === 16 ||
               totalDays === 17 ||
               totalDays === 23 ||
               totalDays === 24 ||
               totalDays === 30
             ) {
               console.log("Dia festivo: " + totalDays);
             } else {
               return totalDays;
             }
             break;
           case 12:
             console.log("Estas en Diciembre");
             if (
               totalDays === 1 ||
               totalDays === 7 ||
               totalDays === 8 ||
               totalDays === 14 ||
               totalDays === 15 ||
               totalDays === 21 ||
               totalDays === 22 ||
               totalDays === 28 ||
               totalDays === 29
             ) {
               console.log("Dia festivo: " + totalDays);
             } else {
               return totalDays;
             }
             break;
         }
       }
     }
   };
</script>