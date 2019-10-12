<template>
<div id="app" style="height:100%">
  <router-view></router-view>
  <FootTab v-show="$route.meta.isShow"></FootTab>
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
/* #app{
  height:100%;
  width:100%;
} */

</style>
