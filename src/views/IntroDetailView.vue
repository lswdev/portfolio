<!--eslint-disable-->
<template>
  <div>
    <section class="detail-section" @wheel="scrolls" id="detail-section">
      <!-- navList -->
      <span class="detail-nav">
        <div class="row cf">
          <div class="three col">
            <div class="hamburger" id="hamburger" @click="navList">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </div>
        </div>
        <ul class="nav-list" style="color: #FFF;" v-if="toggleNav">
          <li>introduce</li>
          <li>skill</li>
          <li>careers</li>
        </ul>
      </span>

      <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1"
        style="border-bottom: 1px solid red">
        <div style="display: flex">
          <div class="my-avatar">이시우<br>1997. 02. 28<br>Lee Siwoo</div>
        </div>
        <span class="avatar-label">Developer</span>
        <img class="mouse-scroll" src="../assets/images/mouse-cursor-lg.png" alt="">
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

  </div>
</template>

<script>

export default {
  data:() => ({
    windowTop: window.top.scrollY,
    windowHeight: null,
    toggleNav: false,
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
        console.log("this.windowTop", this.windowTop);
        if (this.windowTop >= 0) {
          window.$('.mouse-scroll').css('opacity', '0');
        } else if (this.windowTop >= 200) {
          window.$('.mouse-scroll').css('opacity', '0');
        }
        if (e.target.id === `detail-contain${sectionEl.children.length}`) {
          e.preventDefault();
        }
      }
      // 스크롤 UP
      else {
        if (this.windowTop > 0 && this.windowTop < 800) {
          window.$('.mouse-scroll').css('opacity', '');
        }
      }
      // 맨 위로
      // window.scrollTo({top: 0, behavior:'smooth'});
    },
    navList() {
      window.$('.hamburger').toggleClass('is-active');
      this.toggleNav = !this.toggleNav;
    },
  },
}
</script>

