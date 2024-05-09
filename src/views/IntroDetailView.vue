<!--eslint-disable-->
<template>
  <section class="detail-section" @wheel.prevent="scrolls" id="detail-section">
    <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1">
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

export default {
  data:() => ({
    windowTop: window.top.scrollY,
    windowHeight: null,
  }),
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.initTop();
  },
  methods : {
    initTop() {
      window.scrollTo(0, 0);
    },
    scrolls(e) {
      this.windowTop = window.top.scrollY;
      const sectionEl = document.getElementById('detail-section');
      // 스크롤 DOWN
      if (e.wheelDelta < 0) {
        if (this.windowHeight === 0) {
          this.windowHeight = window.innerHeight;
        } else if (e.target.id === `detail-contain${sectionEl.children.length}`) {
          e.preventDefault();
        } else {
          this.windowHeight += window.innerHeight;
        }
      }
      // 스크롤 UP
      else {
        if (this.windowHeight === 0) {
          e.preventDefault();
        } else {
          this.windowHeight -= window.innerHeight;
        }
      }
      window.scrollTo({top: this.windowHeight, behavior:'smooth'});
    },
  },
}
</script>

