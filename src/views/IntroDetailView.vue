<!--eslint-disable-->
<template>
  <div>
    <section class="detail-section" id="detail-section">
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

      <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1">
        <div style="display: flex">
          <div class="my-avatar">이시우<br>1997. 02. 28<br>Lee Siwoo</div>
        </div>
        <span class="avatar-label">Developer</span>
        <img class="mouse-scroll" src="../assets/images/mouse-cursor-lg.png" alt="mouse-scroll-point" @click="scrollIconClick">
      </div>
      <div class="main-top-contain detail-contain" id="detail-contain2" ref="detailContain2">
        <div class="intro-detail" data-aos="zoom-out-up" style="width: 50vw; margin: 10vw auto">
          <div class="login">
            <h2>테스트 Page 입니다.</h2>
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
    navList() {
      window.$('.hamburger').toggleClass('is-active');
      this.toggleNav = !this.toggleNav;
    },
    scrollIconClick() {

    }
  },
}
</script>

