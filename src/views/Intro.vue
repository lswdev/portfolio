<!--eslint-disable-->
<template>
  <div class="main-top-contain">
    <div class="ring" @mouseenter="pointerHideAnimation" @mouseleave="pointerShowAnimation">
      <i style="--clr:#27fd01;"></i>
      <i style="--clr:#ff0057;"></i>
      <i style="--clr:#fffd44;"></i>
      <div class="custom-area">
        <h2>Lee Siwoo</h2>
        <div class="inputBx input-intro">
          <input value="둘러보기" id="intro-submit-btn" readonly @click="introDetail">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inputAnimation } from "@/mixins/mixins";

export default {
  methods: {
    pointerHideAnimation() {
      window.$('.cursor').fadeOut(200);
    },
    pointerShowAnimation() {
      window.$('.cursor').fadeIn(200);
    },
    introDetail() {
      window.$('.main-top-contain').fadeOut(200);
      setTimeout(this.changePage,300);
    },
    changePage() {
      this.$router.push('intro-detail');
    },
  },
  mounted() {
    inputAnimation();
  },
}
</script>

