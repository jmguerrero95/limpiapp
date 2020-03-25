<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                   <h2 color="primary" class="text-center primary--text">Servicios Activos</h2>
            </v-col>
              <servicesactive/>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
import servicesactive from "@/components/activeservices/CompActiveService.vue";
export default {
  components: {
    servicesactive
  }
};
</script>