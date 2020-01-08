<template>
   <v-row justify="center">
      <!-- section title -->
      <v-col xs="12" sm="12" md="12" lg="12" xl="12">
         <v-toolbar flat primary>
            <v-toolbar-title>
               <div class="title-section">
                  <div class="only-number accent primary--text">1</div>
                  <h2 class="ml-2 title primary--text">Elija el Servicio |</h2>
                  <p class="mt-1 steper-sub-title subtitle-1">Solicite el servicio más adecuado para su hogar o empresa</p>
               </div>
            </v-toolbar-title>
         </v-toolbar>
      </v-col>
      <!-- section title END -->
      <!-- Product 2 --> 
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" v-for="(products, index) of productsList" :key="products.idlist">
         <v-container>
         <v-card elevation="3">
                  <!--  ============= -->
                  <v-card-title>
                     <v-img :src="products.imgProduct" height="120"/>
                  </v-card-title>
                     <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-center overline primary--text">Beneficios adicionales</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
                  
            <!--  ============= -->
            <v-card flat>
               <v-tabs v-model="products.tab"  light icons-and-text fixed-tabs>
                  <v-tabs-slider class="secondary line-custom"></v-tabs-slider>
                  <v-tab href="#tab-2" class="accent rounded-style">
                     {{products.titleA}}
                  </v-tab>
                  <v-tab href="#tab-3" class="grey lighten-3 rounded-style" >
                     {{products.titleB}}
                  
                  </v-tab>
                  <v-tab href="#tab-4" class="amber accent-2 rounded-style">
                     {{products.titleC}}
                  
                  </v-tab>
               </v-tabs>
               <v-tabs-items v-model="products.tab">
                  <v-tab-item value="tab-1">
                     <v-card flat>
                        <v-card-text class="text-center">
                           <v-row justify="center">
                              <v-col cols="10">
                                 <div cols="10"  class="text-center">
                                    <v-icon small color="accent">mdi-arrow-expand-up</v-icon>
                                 </div>
                                 <p color="secondary"   class="primary--text mb-2 text-center">
                                    {{products.productwarning}}
                                 </p>
                              </v-col>
                           </v-row>
                        </v-card-text>
                     </v-card>
                  </v-tab-item>
                  <v-tab-item value="tab-2">
                     <v-card flat>
                          <v-card-text class="accent--text text-center headline pb-0">{{products.titleA}}</v-card-text>
                        <v-card-text class="text-center">{{products.descriptionA}}</v-card-text>
                        <v-card-actions>
                          <v-row justify="center">
                             <v-btn color="secondary" small outlined rounded class="primary--text mb-4" @click="hogar('clasico', index), resetScrollPage(), GoNextState(2)">
                                <v-icon left>mdi-check-decagram</v-icon>
                                Solicitar este servicio
                             </v-btn>
                          </v-row>
                       </v-card-actions>
                     </v-card>
                  </v-tab-item>
                  <v-tab-item value="tab-3">
                     <v-card flat>
                        <v-card-text class="accent--text text-center headline pb-0">{{products.titleB}}</v-card-text>
                        <v-card-text class="text-center">{{products.descriptionB}}</v-card-text>
                        <v-card-actions>
                          <v-row justify="center">
                             <v-btn color="secondary" small outlined rounded class="primary--text mb-4" @click="hogar('plata', index), resetScrollPage(), GoNextState(2)">
                                <v-icon left>mdi-check-decagram</v-icon>
                                Solicitar este servicio
                             </v-btn>
                          </v-row>
                       </v-card-actions>
                     </v-card>
                  </v-tab-item>
                  <v-tab-item value="tab-4">
                     <v-card flat>
                        <v-card-text class="accent--text text-center headline pb-0">{{products.titleC}}</v-card-text>
                        <v-card-text class="text-center">{{products.descriptionC}}</v-card-text>
                        <v-card-actions>
                          <v-row justify="center">
                             <v-btn color="secondary" small outlined rounded class="primary--text mb-4" @click="hogar('oro', index), resetScrollPage(), GoNextState(2)">
                                <v-icon left>mdi-check-decagram</v-icon>
                                Solicitar este servicio
                             </v-btn>
                          </v-row>
                       </v-card-actions>
                     </v-card>
                  </v-tab-item>
               </v-tabs-items>
            </v-card>
            <!-- ============== -->
         </v-card>
            </v-container>
      </v-col>
      <!-- Product 2 END --> 
    
   </v-row>
</template>
<style >
.rounded-style {
  border-radius: 10px 10px 0 0;
  margin: 3px;
}

.v-item-group.theme--light.v-slide-group.v-tabs-bar.primary--text  {
    padding: 4px !important;
    height: 60px !important;
}
</style>



<script>
import { mapMutations, mapActions } from "vuex";
import { Script } from "vm";

export default {
  data() {
    return {
      productsList: [
        {
          imgProduct: require("@/assets/icon-home.jpg"),
          idlist: "00001",
          productTitle: "Servicio HOGAR",
          productwarning: "  Conozca los beneficios por contratar varios días",
          titleA: "CLÁSICO",
          titleB: "PLATA",
          titleC: "ORO",
          tab: null,
          descriptionA:
            "Limpieza a profundidad, lavado y planchado de ropa (1 día a la semana)",
          descriptionB:
            "Limpieza a profundidad, lavado y planchado de ropa, preparación de alimentos (2 días a la semana)",
          descriptionC:
            "Limpieza a profundidad, lavado y planchado de ropa, preparación de alimentos, diligencia y compras (3 o más días a la semana)",
          active: true
        },
        {
          imgProduct: require("@/assets/icon-office.jpg"),
          idlist: "00002",
          productTitle: "Servicio PYMES",
          productwarning: "  Conozca los beneficios por contratar varios días",
          titleA: "CLÁSICO",
          titleB: "PLATA",
          titleC: "ORO",
          tab: null,
          descriptionA:
            "Limpieza a profundidad de áreas asignadas, muebles y enseres, clasificación de residuos (1 día a la semana)",
          descriptionB:
            "Limpieza a profundidad de áreas asignadas, muebles y enseres, clasificación de residuos y servicio de cafeteria (2 días a la semana)",
          descriptionC:
            "Limpieza a profundidad de áreas asignadas, muebles y enseres, clasificación de residuos y servicio de cafeteria (2 días a la semana)",
          active: true
        }
      ]
    };
  },

  methods: {
    hogar(tipo, id){
     if (id == 0) {
      if (tipo == "clasico") {
        console.log(tipo+" "+id)
        sessionStorage.setItem('modalidad', id)
        sessionStorage.setItem('tipo_serv', 0)
        this.step1({tipo:"clasico", id_tipo:0, modalidad:"Hogar", id_modalidad:0})
      }else
      if (tipo == "plata") {
        console.log(tipo+" "+id)
        sessionStorage.setItem('modalidad', id)
        sessionStorage.setItem('tipo_serv', 1)
        this.step1({tipo:"plata", id_tipo:1, modalidad:"Hogar", id_modalidad:0})
      }else
      if (tipo == "oro") {
        console.log(tipo+" "+id)
        sessionStorage.setItem('modalidad', id)
        sessionStorage.setItem('tipo_serv', 2)
        this.step1({tipo:"oro", id_tipo:2, modalidad:"Hogar", id_modalidad:0})
      }
    }else
      if (id == 1) {
        if (tipo == "clasico") {
          console.log(tipo+" "+id)
          sessionStorage.setItem('modalidad', id)
          sessionStorage.setItem('tipo_serv', 0)
          this.step1({tipo:"clasico", id_tipo:0, modalidad:"Pymes", id_modalidad:1})
        }else
        if (tipo == "plata") {
          console.log(tipo+" "+id)
          sessionStorage.setItem('modalidad', id)
          sessionStorage.setItem('tipo_serv', 1)
          this.step1({tipo:"plata", id_tipo:1, modalidad:"Pymes", id_modalidad:1})
        }else
        if (tipo == "oro") {
          console.log(tipo+" "+id)
          sessionStorage.setItem('modalidad', id)
          sessionStorage.setItem('tipo_serv', 2)
          this.step1("oro", 2, "Pymes", 1)
          this.step1({tipo:"oro", id_tipo:2, modalidad:"Pymes", id_modalidad:1})
        } 
      }
     },
    ...mapMutations(["GoNextState", "resetScrollPage", "step1"]),

 
    
  }
};
</script>