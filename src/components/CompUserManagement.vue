<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12">
            <h2 color="primary" class="text-center primary--text">Panel de Usuarios</h2>
         </v-col>
         <v-col cols="12">
            <v-card>
               <compmanagement/>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>
<script>
   import compmanagement from "@/components/managementuser/CompManagement.vue";
   
   export default {
     components: {
       compmanagement,
     },
   };
</script>