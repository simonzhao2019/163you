<template>
<div id="app">
  <router-view></router-view>
  <FootTab></FootTab>
</div>

</template>

<script>
import FootTab from './components/FootTab.vue';

export default {
  name: 'app',
  components:{
   FootTab
  }

}
</script>

<style>

</style>
