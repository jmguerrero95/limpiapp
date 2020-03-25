<template>

           <v-overlay :absolute="absolute" opacity=0.7 :value="layoutUserPanel.supportactive" :z-index="zIndex">
               <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      :src="supporImage"
      height="400px"
    ></v-img>
  </v-card>
                  
          <v-btn color="accent" @click="CloseSupportAction">
           Cerrar
          </v-btn>
         
        </v-overlay>
   
  
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["layoutUserPanel"])
  },
  data: () => ({
    absolute: false,
    show: false,
    zIndex: 5,
    supporImage: require("@/assets/Contact.jpg"),
  }),
  methods: {
    ...mapMutations(["SupportAction", "CloseSupportAction"])
  }
};
</script>
