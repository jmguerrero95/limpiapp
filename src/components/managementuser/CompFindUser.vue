<template>
  <!-- LIST USERS -->

      <v-row class="justify-center">
          <v-card width="280" class="ma-2" v-for="(userlist, index) of users" :key="index">
               <v-btn
                  color="pink"
                  dark
                  small
                  absolute
                  bottom
                  right
                  v-on:click="update(userlist.id)"
                  >
                  <v-icon>mdi-trash-can-outline</v-icon>
               </v-btn>
               <v-list-item three-line>
                  <v-list-item-content>
                     <div class="overline">Id: {{userlist.ident}}</div>
                     <v-list-item-title class="headline primary--text">{{userlist.firs_name}}</v-list-item-title>
                     <v-list-item-subtitle>Mobil: {{userlist.userPhone}}</v-list-item-subtitle>
                     <v-list-item-subtitle>Rol: {{userlist.tipo}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar
                     size="70"
                     class="mt-7 mb-7"
                     >
                     <img  :src="userlist.image" alt="avatar">
                  </v-list-item-avatar>
               </v-list-item>
               <v-card-actions>
                  <v-btn color="secondary" small outlined rounded class="primary--text mb-4">
                     <v-icon left>mdi-check-decagram</v-icon>
                     Ver Ficha
                  </v-btn>
               </v-card-actions>
            </v-card>
            <!-- LIST USERS END -->
     </v-row>


          
   
</template>
<script>
import { mapState } from "vuex";
import axios from 'axios'
export default {
  data (){
    return{
      users: []
    }
  },
  created(){
    const path = 'http://localhost:8000/api/v1.0/users/'
      axios.get(path).then((response)=> {
        this.users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods:{
    update(id){
      const path = 'http://localhost:8000/api/v1.0/users/'+id+'/'
      axios.delete(path).then((response)=> {
      })
      .catch((error) => {
        console.log(error)
      })  
    }
  },
  computed: {
    ...mapState(["userData", "staffData"])
  }
};

</script>