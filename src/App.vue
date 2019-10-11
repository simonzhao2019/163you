<template>
<div id="app" >
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
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


</style>
