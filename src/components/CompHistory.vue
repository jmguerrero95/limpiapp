<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                   <h2 color="primary" class="text-center primary--text">Historial de servicios</h2>
            </v-col>
              <comphistory/>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
import comphistory from "@/components/history/CompRecords.vue";
export default {
  components: {
    comphistory
  }
};
</script>
