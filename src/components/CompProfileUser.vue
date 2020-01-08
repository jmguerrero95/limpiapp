<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12">
            <h2 color="primary" class="text-center primary--text">Perfil {{staffData[listNumber].userRoll}}</h2>
         </v-col>
         <compuserdata/>
         
      </v-row>
   </v-container>
</template>
<script>
  import compuserdata from "@/components/profile/CompUserData";
  import { mapState } from "vuex";
//permiso=localStorage.getItem('permiso')
//import { mapState } from "vuex";
//if (permiso == 1) {
  
//} else{
       
        
//}
export default {
   data(){
      return{
         listNumber: 1
      }
   },
  components: {
    compuserdata,
  },
  computed: {
    ...mapState(["layoutUserPanel", "userData","staffData"])
  }
};
</script>