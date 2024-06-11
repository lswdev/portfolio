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
import { reactive } from "vue";

export default {
  data: () => ({
    browserInfo: reactive({
      platform: '',
      userInfo: '',
    }),
    deviceInfo: '',
  }),
  methods: {
    // Mobile device 확인
    isMobile() {
      const info = navigator.userAgent;
      let flag = false;

      if( info.indexOf("iPhone") > -1
          || info.indexOf("Android") > -1
          || info.indexOf("iPad") > -1
          || info.indexOf("iPod") > -1
      ) { flag = true; }
      this.deviceInfo = flag;
      console.log(this.deviceInfo);
    },
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
    checkBrowser() {
      this.browserInfo.platform = navigator.platform;
      this.browserInfo.userInfo = navigator.userAgent;
    },
  },
  mounted() {
    inputAnimation();
    this.checkBrowser();
    this.isMobile();
  },
}
</script>

