<template>
   <v-container>
    <overlayalert/>
      <v-row justify="center">
        <div xs="12" sm="12" md="6" lg="4" xl="4" v-for="(agenda, index) of agenda" :key="index">
         <v-col>
            <v-card :id="index">
               <v-list-item>
                  <v-list-item-avatar v-if='agenda.id_auxi.image===null||agenda.id_auxi.image=="https://limpi.app:8000null"'>
                     <img src="@/assets/default-avatar.jpg">
                  </v-list-item-avatar>
                  <v-list-item-avatar v-else>
                     <img v-bind:src="'https://limpi.app:8000' + agenda.id_auxi.image">
                  </v-list-item-avatar>
                  <v-list-item-content>
                     <v-list-item-title class="headline">
                        <div class="accent--text"> ID. {{agenda.id}} </div>
                     </v-list-item-title>
                     <v-list-item-subtitle>Asignado a: {{agenda.id_auxi.firs_name}}</v-list-item-subtitle>
                  </v-list-item-content>
               </v-list-item>
               <v-divider class="mx-4"></v-divider>
               <v-expansion-panels>
                  <v-expansion-panel>
                     <v-expansion-panel-header>Ver todos los detalles</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <v-list-item>
                           <v-list-item-content>
                              <ul class="list-triangle-icon">
                                 <li>
                                    <div class="overline">Persona a cargo</div>
                                    <span class="subtitle-1 font-weight-medium"> {{agenda.pers_Acargo}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Tipo de servicio</div>
                                    <span class="subtitle-1 font-weight-medium"> {{agenda.modalidad.nombre}} {{agenda.tipo_servi.nombre}}</span>
                                 </li>
                          
                         
                                 <li>
                                    <div class="overline">Ciudad</div>
                                    <span class="subtitle-1 font-weight-medium"> {{agenda.lugar}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Dirección</div>
                                    <span class="subtitle-1 font-weight-medium"> {{agenda.direccion}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Anotaciones</div>
                                    <span class="subtitle-1 font-weight-medium"> {{agenda.observaciones}}</span>
                                 </li>
                                 <li>
                                    <div class="overline">Estado</div>
                                    <span v-if="agenda.estado==0" class="subtitle-1 font-weight-medium">Rechazado</span>
                                    <span v-if="agenda.estado==1" class="subtitle-1 font-weight-medium">En espera</span>
                                    <span v-if="agenda.estado==2" class="subtitle-1 font-weight-medium">Aprobado</span>
                                 </li>
                              </ul>
                           </v-list-item-content>
                        </v-list-item>
                     </v-expansion-panel-content>
                  </v-expansion-panel>
               </v-expansion-panels>
               <v-list-item>
                  <ul class="list-triangle-icon">
                     <li>
                        <div class="overline">Dias solicitados</div>
                       <v-chip-group
                           v-model="selection"
                           column>
                           <v-chip v-for="(dateservice, index) of agenda.this_agenda" :key="index">
                              {{dateservice.fecha}}
                           </v-chip>
                        </v-chip-group>
                     </li>
                             <li>
                        <div class="overline">Hora seleccionada</div>
                        <v-chip-group
                           v-model="selection"
                           column>
                           <v-chip>
                              {{agenda.hora}}
                           </v-chip>
                        </v-chip-group>
                     </li>
                  </ul>
               </v-list-item>
               <v-divider class="mx-4"></v-divider>
               <v-card-actions>
                  <v-btn v-if="tipo==3" dark @click="aprobar(agenda.id, index)">Aprobar</v-btn>
                  <v-btn v-if="tipo==2" dark @click="aprobar(agenda.id, index)">Terminada</v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
         </div>
      </v-row>
      <div class="text-center">
    <v-pagination
      v-model="page"
      :length="cantidad"
      @input="next"
    ></v-pagination>
  </div>
   </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import axios from 'axios'
import overlayalert from '@/components/popups/CompPopsAlert.vue'
export default {
  components: {
    overlayalert,
  },
   data(){
      return{
        listNumber: 1,
        selection: 1,
        preDatos:[],
        agenda: [],
        tipo: "",
        page: 1,
        tamaño_total: 0,
        cantidad: 0,
        control: 0,
      }
   },
   created: function(){
    this.popup({tipo:2,overlay:false})
    var id = this.user.id
    const path = 'https://limpi.app:8000/api/v1.0/agend_clien/?id='+id
      axios.get(path).then((response)=> {
        this.preDatos = response.data
        this.tamaño_total = this.preDatos.count
        this.agenda = this.preDatos.results.slice(0,10)
        if (this.tamaño_total > 10) {
          var cantidad = this.tamaño_total/10
          this.cantidad = Math.ceil(cantidad)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    /*if(this.tipo==3){
      const path = 'http://3.15.13.45:8000/api/v1.0/agend_full/?estado=1'
      axios.get(path).then((response)=> {
        this.preDatos = response.data
        this.tamaño_total = this.preDatos.count
        this.agenda = this.preDatos.results.slice(0,10)
        if (this.tamaño_total > 10) {
          var cantidad = this.tamaño_total/10
          this.cantidad = Math.ceil(cantidad)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
    if(this.tipo==2){
      const path = 'http://3.15.13.45:8000/api/v1.0/agend_full/?id='+id
      axios.get(path).then((response)=> {
        this.preDatos = response.data
        this.tamaño_total = this.preDatos.count
        this.agenda = this.preDatos.results.slice(0,10)
        if (this.tamaño_total > 10) {
          var cantidad = this.tamaño_total/10
          this.cantidad = Math.ceil(cantidad)
        }
      })
      .catch((error) => {
        console.log(error)
      })  
    }*/
    /*var id = sessionStorage.getItem('id')
    console.log(id)
    const path = 'http://localhost:8000/api/v1.0/agenda'
      axios.get(path).then((response)=> {
        response = response.data
        const path = 'http://localhost:8000/api/v1.0/fech_agend?id_agenda=10'*/
        /*console.log(response['id'])
        this.datos.firs_name = response['firs_name']
        this.datos.last_name = response['last_name']
        this.datos.user_email = response['user_email']
        if (response['tipo']==1) {
          this.datos.tipo = "Cliente"
        }
        if (response['tipo']==2) {
          this.datos.tipo = "Auxiliar"
        }
        if (response['tipo']==3) {
          this.datos.tipo = "Administrador"
        }
        this.datos.image = response['image']
        this.datos.ident = response['ident']
        this.datos.userPhone = response['userPhone']
        this.datos.user_Address = response['user_Address']
        this.datos.birthDay = response['birthDay']*/
      /*})
      .catch((error) => {
        console.log(error)
      })*/
  },
  methods:{

    next(page){
      var max = (this.page*10)
      var min = max-10
      this.agenda = this.preDatos.results.slice(min,max)
    },
    ...mapMutations(["notificaciones","popup"])


  },
  computed: {
    ...mapState(["userData", "staffData", "user", "notificacion"])
  }
};
</script>