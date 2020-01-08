<template>
  <v-app class="bg-corp">
      <router-view></router-view>
  </v-app> 
</template>
<style scope>
.bg-corp {
  background: rgb(162, 212, 25);
  background: linear-gradient(
    38deg,
    rgba(162, 212, 25, 1) 0%,
    rgba(94, 191, 217, 1) 100%
  ) !important;
}
</style>


<script>
export default {
  name: "App",
  data: () => ({
    //
  }),


};
</script>