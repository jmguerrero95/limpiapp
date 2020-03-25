<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                   <h2 color="primary" class="text-center primary--text">Servicios Activos</h2>
            </v-col>
              <servicesactiveuser/>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from "vuex";
import servicesactiveuser from "@/components/activeservices/CompActiveServiceUser.vue";
export default {
  components: {
    servicesactiveuser
  }
};
</script>