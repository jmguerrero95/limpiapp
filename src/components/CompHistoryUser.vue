<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                   <h2 color="primary" class="text-center primary--text">Historial de servicios</h2>
            </v-col>
              <comphistoryuser/>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
import comphistoryuser from "@/components/history/CompRecordsUser.vue";
export default {
  components: {
    comphistoryuser
  }
};
</script>
