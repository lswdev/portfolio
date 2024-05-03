<!--eslint-disable-->
<template>
  <section class="detail-section">
    <div class="main-top-contain detail-contain" id="detail-contain" ref="detailContain1">
      <div class="intro-detail">
<!--          <Carousel></Carousel>-->
      </div>
    </div>
    <div class="main-top-contain detail-contain" id="detail-contain2" ref="detailContain2">
      <div class="intro-detail">
        <div class="login">
          <h2>Login2</h2>
        </div>
      </div>
    </div>
    <div class="main-top-contain detail-contain" id="detail-contain3" ref="detailContain3">
      <div class="intro-detail">
        <div class="login">
          <h2>Login3</h2>
        </div>
      </div>
    </div>
    <div class="main-top-contain detail-contain" id="detail-contain4" ref="detailContain4">
      <div class="intro-detail">
        <div class="login">
          <h2>Login4</h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { inputAnimation } from "@/mixins/mixins";

export default {
  mounted() {
    inputAnimation();
    document.addEventListener('scroll', this.scrollEvents, true);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollEvents);
  },
  methods : {
    scrollEvents(e) {
      console.log("스크롤 될 때마다 이 함수 실행",e)
    }
  },
}
</script>

