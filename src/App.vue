<template>
  <div>
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
    <div style="text-align:center">
      <small
        >Vue Image Storage - made to learn VueJS -
        <a
          href="https://github.com/franckboudraa/vue-image-storage"
          target="_blank"
          >github source</a
        ></small
      >
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: { AppHeader }
};
</script>

<style scoped></style>
