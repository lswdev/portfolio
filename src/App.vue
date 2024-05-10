<template>
  <div id="app">
    <div class="cursor" v-if="$route.meta.CustomPointer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { pointerAnimation } from '@/mixins/mixins';
export default {
  data:() => ({
  }),
  mounted() {
    pointerAnimation();
  }
}
</script>