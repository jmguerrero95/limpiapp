<template>
   <v-row>
      <v-col cols="12">
         <v-toolbar  filled color="secondary" flat>
            <v-toolbar-title>
               <v-text-field
                  class="mt-7"
                  solo
                  label="Buscar usuario ID"
                  prepend-inner-icon="mdi-account-search"
                  ></v-text-field>
                  
            </v-toolbar-title>
              <v-btn color="primary" class="ml-4" @click="ShowFindUser">
               <v-icon left>mdi-account-multiple-plus-outline</v-icon>
               Buscar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="ShowUserCreate">
               <v-icon left>mdi-account-multiple-plus-outline</v-icon>
               Agregar usuario
            </v-btn>
         </v-toolbar>
      </v-col>
      <v-col cols="12">
          <component :is="showpanel"></component>
       
      
          
       
      </v-col>
   </v-row>
</template>
<script>
import axios from 'axios'
import compuserregister from "@/components/managementuser/CompUserRegister.vue";
import compfinduser from "@/components/managementuser/CompFindUser.vue";

export default {
  components: {
    compuserregister,
    compfinduser
  },
  data() {
    return {
      showpanel: "compfinduser"
    };
  },


  methods: {
    ShowUserCreate() {
      this.showpanel = "compuserregister";
    },
    ShowFindUser() {
      this.showpanel = "compfinduser";
    }
  }
};
</script>