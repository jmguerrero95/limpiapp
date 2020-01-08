<template>
   <v-row justify="center">
      <v-col cols="12">
         <v-row align="center">
            <v-overlay :absolute="overlayAlertGlobal[0].absolute" :opacity="overlayAlertGlobal[0].opacity" :value="overlayAlertGlobal[0].overlay" :z-index="overlayAlertGlobal[0].zIndex">
               <!-- content overlay -->
               <v-card
                  class="mx-auto"
                  :color="warningMessagesAlert[warningMessageType].warningColor"
                  dark
                  max-width="700"
                  >
                  <v-card-title>
                     <v-icon
                        large
                        left
                        >
                        {{warningMessagesAlert[warningMessageType].iconWarning}}
                     </v-icon>
                     <span class="title font-weight-light">{{warningMessagesAlert[warningMessageType].warningTitle}}</span>
                  </v-card-title>
                  <v-card-text class="headline font-weight-bold">
                      {{warningMessagesAlert[warningMessageType].warningMessage}}
                  </v-card-text>
                  <v-card-actions>
                     <v-list-item class="grow">
                        <v-row align="center" justify="start">
                           <v-btn large text @click="overlayAlertGlobal[0].overlay = false">
                              <v-icon class="mr-1">mdi-close-circle-outline</v-icon>
                              <span class="subheading mr-2">Cerrar</span>
                           </v-btn>
                        </v-row>
                     </v-list-item>
                  </v-card-actions>
               </v-card>
               <!-- content overlay END -->
            </v-overlay>
         </v-row>
      </v-col>
   </v-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({

  }),
  computed: {
    ...mapState(["warningMessagesAlert", "warningMessageType", "overlayAlertGlobal"])
  }
};
</script>