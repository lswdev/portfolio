<!--eslint-disable-->
<template>
  <section class="detail-section" @wheel="scrolls" id="detail-section">
    <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1"
      style="border-bottom: 1px solid red">
      <div class="my-avatar">
        이시우<br>
        1997. 02. 28<br>
        Lee Siwoo
      </div>
      <span class="avatar-label">Developer</span>
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
        console.log('Down');
        // 끝 도달
        if (e.target.id === `detail-contain${sectionEl.children.length}`) {
          e.preventDefault();
        }
      }
      // 스크롤 UP
      else {
        console.log('Up');
      }
      // 맨 위로
      // window.scrollTo({top: 0, behavior:'smooth'});
    },
  },
}
</script>

