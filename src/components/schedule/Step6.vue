<template>
  <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline">Solicitud de</div>
        <v-list-item-title class="headline mb-1">AGENDAMIENTO</v-list-item-title>
        <p>Nuestro equipo le dara respuesta en el menor tiempo posible</p>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="grey"
      >
        <img  :src="require('@/assets/icon-service-ok.jpg')" alt="avatar">
      </v-list-item-avatar>
     
    </v-list-item>

    <v-card-actions>
      <v-btn color="primary" @click="reinicio()">Agendar otro</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {

   methods:{
    reinicio(){
     sessionStorage.removeItem('fechas');
     sessionStorage.removeItem('hora');
     this.$forceUpdate();
     this.UpdateComponent('compshedule')
     this.GoNextState(1)
     this.$emit("guarda")
    },
    ...mapMutations(["login","popup","GoNextState","UpdateComponent"]),
   }
   
}
</script>