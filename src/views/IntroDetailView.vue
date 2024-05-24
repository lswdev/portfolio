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

      <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1" >
        <div class="avatar">
          <span class="avatar-label">Developer</span>
          <div class="my-avatar">이시우<br>1997. 02. 28<br>Lee Siwoo</div>
        </div>
        <img class="mouse-scroll" src="../assets/images/mouse-cursor-lg.png" alt="mouse-scroll-point">
      </div>

      <div class="main-top-contain detail-contain" id="detail-contain2" ref="detailContain2">
        <div class="intro-detail skills">
          <div class="custom-area skills-area">
            <h2 style="font-weight: bold" data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom">SKILL</h2>
            <ul class="skill-contain">
              <li>
                <div>
                  <p>Skill-01</p>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>


        </div>
      </div>
      <div class="main-top-contain detail-contain" id="detail-contain3" ref="detailContain3">
        <div class="intro-detail">
          <div class="custom-area">
            <h2>Login3</h2>
          </div>
        </div>
      </div>
      <div class="main-top-contain detail-contain" id="detail-contain4" ref="detailContain4">
        <div class="intro-detail">
          <div class="custom-area">
            <h2>Login4</h2>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { skillList, careerList } from '../DataList'

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
  },
}
</script>

