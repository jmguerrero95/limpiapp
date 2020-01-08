<template>
   <v-container>
      <v-row>
         <v-col cols="12">
            <h2 color="primary" class="text-center primary--text">Agendar Servicio</h2>
         </v-col>
         <v-col xs="12" sm="12" md="12" lg="12" xl="12" >
            <v-stepper v-model="e1">
               <v-stepper-header>
                  <v-stepper-step color="primary--text secondary" :complete="e1 > 1" step="1">Plan</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step color="primary--text secondary" :complete="e1 > 2" step="2">Reserva</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step color="primary--text secondary" :complete="e1 > 3" step="3">Auxiliar</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step color="primary--text secondary" :complete="e1 > 4" step="4">Observaciones</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step color="primary--text secondary" :complete="e1 > 5"  step="5">Resumen</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step color="primary--text secondary" :complete="e1 > 6"  step="6" >Agendar</v-stepper-step>
               </v-stepper-header>
               <v-stepper-items>
                  <!-- Choose Schedule -->
                  <v-stepper-content step="1">
                     <step1/>
                  </v-stepper-content>
                  <!-- Choose Schedule END -->
                  <!-- Choose Service -->
                  <v-stepper-content step="2">
                     <step2/>
                  </v-stepper-content>
                  <!-- Choose Service END -->
                  <!-- Choose Employee -->
                  <v-stepper-content step="3">
                     <step3/>
                  </v-stepper-content>
                  <!-- Choose Employee END -->
                  <!-- Choose Adress -->
                  <v-stepper-content step="4">
                     <step4/>
                  </v-stepper-content>
                  <!-- Choose Adress END -->
                  <!-- Choose Adress -->
                  <v-stepper-content step="5">
                     <step5/>
                  </v-stepper-content>
                  <!-- Choose Adress END -->
                  <!-- Choose Adress -->
                  <v-stepper-content step="6">
                     <step6/>
                  </v-stepper-content>
                  <!-- Choose Adress END -->
               </v-stepper-items>
            </v-stepper>
         </v-col>
      </v-row>
   </v-container>
</template>
<style>
.title-section {
  display: flex;
  justify-content: left;
  align-items: top;
}
.only-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50%;
}
</style>
<script>
import { mapState } from "vuex";
import step1 from "@/components/schedule/Step1.vue";
import step2 from "@/components/schedule/Step2.vue";
import step3 from "@/components/schedule/Step3.vue";
import step4 from "@/components/schedule/Step4.vue";
import step5 from "@/components/schedule/Step5.vue";
import step6 from "@/components/schedule/Step6.vue";
export default {
  data() {
       return {
         auxi:[],
       };
     },

  components: {
    step1,
    step2,
    step3,
    step4,
    step5,
    step6
  },


  computed: {
    ...mapState(["e1"])
  }
};
</script>