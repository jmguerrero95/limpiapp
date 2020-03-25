<template>
   <v-container>
      <v-row justify="center">
         <v-col cols="12">
            <h2 color="primary" class="text-center primary--text" v-if='tipo==1'>Perfil Cliente</h2>
            <h2 color="primary" class="text-center primary--text" v-if='tipo==2'>Perfil Auxiliar</h2>
            <h2 color="primary" class="text-center primary--text" v-if='tipo==3'>Perfil Administrador</h2>
         </v-col>
         <compuserdata/>
         <compuserskills v-if='tipo==2'/>
         
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
   created: function(){
    this.tipo = this.user.tipo
  },
  components: {
    compuserdata,
    compuserskills
  },
  computed: {
    ...mapState(["layoutUserPanel", "userData","staffData","user"])
  }
};
</script>