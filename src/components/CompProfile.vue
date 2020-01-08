<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12">
            <h2 color="primary" class="text-center primary--text">Perfil {{staffData[listNumber].userRoll}}</h2>
         </v-col>
         <compuserdata/>
         <compuserskills v-if="staffData[listNumber].userRoll == 'Auxiliar'"/>
         
      </v-row>
   </v-container>
</template>
<script>
  import compuserdata from "@/components/profile/CompUserData";
  import compuserskills from "@/components/profile/CompUserSkills";
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
    compuserskills
  },
  computed: {
    ...mapState(["layoutUserPanel", "userData","staffData"])
  }
};
</script>