<template>
  <!-- LIST USERS -->
    <v-container>
      <v-row>
     <overlayalert/>
  </v-row>
      <v-row class="justify-center">
          <v-card width="280" class="ma-2" v-for="(userlist, index) of users" :key="index" :id="index" >
               <v-btn v-if="id!=userlist.id"
                  color="pink"
                  dark
                  small
                  absolute
                  bottom
                  right
                  v-on:click="update(userlist.id, index)"
                  >
                  <v-icon>mdi-trash-can-outline</v-icon>
               </v-btn>
               <v-list-item three-line>
                  <v-list-item-content>
                     <div class="overline">Id: {{userlist.ident}}</div>
                     <v-list-item-title class="headline primary--text">{{userlist.firs_name}}</v-list-item-title>
                     <v-list-item-subtitle>Mobil: {{userlist.userPhone}}</v-list-item-subtitle>
                     <v-list-item-subtitle v-if="userlist.tipo== 1">Rol: Cliente</v-list-item-subtitle>
                     <v-list-item-subtitle v-if="userlist.tipo== 2">Rol: Auxiliar</v-list-item-subtitle>
                     <v-list-item-subtitle v-if="userlist.tipo== 3">Rol: Administrador</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar
                     size="70"
                     class="mt-7 mb-7"
                     >
                     <img v-if="userlist.image!==null"  :src="userlist.image" alt="avatar">
                     <img v-if="userlist.image===null"  src="@/assets/default-avatar.jpg" alt="avatar">
                  </v-list-item-avatar>
               </v-list-item>
               <v-card-actions>
                  <v-btn color="secondary" small outlined rounded class="primary--text mb-4" @click="change(userlist.id), UpdateComponent('editUser')">
                     <v-icon left>mdi-check-decagram</v-icon>
                     Ver Ficha
                  </v-btn>
               </v-card-actions>
            </v-card>
            <!-- LIST USERS END -->
       <div class="text-center">
  </div>
  <v-pagination
      v-model="page"
      :length="cantidad"
      @input="next"
    ></v-pagination>

     </v-row>
   </v-container>
</template>
<script>
import editUser from "@/components/managementuser/editUser.vue";
import overlayalert from '@/components/popups/CompPopsAlert.vue'
import { mapMutations,mapState } from "vuex";
import axios from 'axios'
export default {
  components: {
    overlayalert,
  },
  data (){
    return{
      users: [],
      id: "",
      page: 1,
      tamaño_total: 0,
      cantidad: 0,
      control: 0,
      preDatos:[],
      id_actu:"",
      element:"",
    }
  },
  created(){
    this.popup({tipo:2,overlay:false})
    this.id = sessionStorage.getItem('id')
    const path = 'https://limpi.app:8000/api/v1.0/users/'
      axios.get(path).then((response)=> {
        this.preDatos = response.data
        this.tamaño_total = this.preDatos.count
        this.users = this.preDatos.results.slice(0,10)
        if (this.tamaño_total > 10) {
          var cantidad = this.tamaño_total/10
          this.cantidad = Math.ceil(cantidad)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods:{
    prueba(){
    },
    update(id, element){
      this.id_actu=id
      this.element=element
      this.popup({tipo:6,overlay:true,boton:true})
      /*swal({
        title: "Esta seguro que desea eliminar el usuario?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })*/
      /*.then((willDelete) => {
        if (willDelete) {
          axios.delete(path).then((response)=> {
            document.getElementById(index).style.display = 'none';
            this.$forceUpdate();
          })
          .catch((error) => {
            swal({
              title: "El usuario que buscas no existe",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            console.log(error)
          }) 
        } else {
        }
      });*/


      /*swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        buttons: ('closeModal','closeModal'),
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value==null) {
          axios.delete(path).then((response)=> {
          })
          .catch((error) => {
            console.log(error)
          }) 
        }*/






    },
    change(id){
      sessionStorage.setItem('id_edit', id)
    },
    next(page){
      var max = (this.page*10)
      var min = max-10
      this.users = this.preDatos.results.slice(min,max)
    },
    ...mapMutations(["UpdateComponent","SupportAction","popup","elimi"])
  },
  computed: {
    ...mapState(["userData", "staffData", "eliminar"])
  },
  watch:{
    eliminar(newValue){
      if(newValue==true){
        const path = 'https://limpi.app:8000/api/v1.0/users/'+this.id_actu+'/'
        axios.delete(path).then((response)=> {
            document.getElementById(this.element).style.display = 'none';
            this.$forceUpdate();
          })
          .catch((error) => {
            this.popup({tipo:6,overlay:false,boton:false})
            this.popup({tipo:0,overlay:true,boton:false})
            console.log(error)
          })
          this.elimi({eliminar: false})
          this.popup({tipo:6,overlay:false,boton:false})
      }
    }
  },
};

</script>