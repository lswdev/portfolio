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
          <li @click="">introduce</li>
          <li @click="">skill</li>
          <li @click="">careers</li>
        </ul>
      </span>

      <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1" >
        <div class="avatar">
          <span class="avatar-label">Developer</span>
          <span class="my-avatar">이시우<br>1997. 02. 28<br>Lee Siwoo</span>
          <div class="avatar-talk">
            <span class="talk-arrow">◀</span>
            <span style="color: rgba(255,255,255,0.47)">
              <font class="font-gradient">Frontend</font> 로써 차근차근 쌓아올리는 개발자
              <font class="font-gradient">이시우</font> 입니다.
            </span>
          </div>
        </div>
        <img class="mouse-scroll" src="../assets/images/mouse-cursor-lg.png" alt="mouse-scroll-point">
      </div>
      <!-- 기술 목록 -->
      <div class="main-top-contain detail-contain" id="detail-contain2" ref="detailContain2">
        <div class="intro-detail skills">
          <div class="custom-area skills-area">
            <h2> <!-- data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom"-->
              <span style="padding-right: 17px">&lt;</span>
              <span class="font-500">SKILL</span>
              <span>/&gt;</span>
            </h2>
            <ul class="skill-contain">
              <li class="skill-item" v-for="(item, index) in skillLists" :data-aos="index%2===0 ? 'zoom-in-left' : 'zoom-in-right'">
                <p class="skill-name font-700">{{ item.skill }}</p>
                <ul class="skill-desc">
                  <li v-for="(item, index) in skillDesc[index]">
                    <span>▪</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
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
    skillLists: skillList,
    skillDesc: [],
    skillDirection: 'zoom-in-left',
  }),
  computed: {
    skillLeftRight() {
      // return this.skillDesc.length%2 === 0 ? 'zoom-in-left' : 'zoom-in-right';
      return this.skillDirection;
    }
  },
  mounted() {
    // window.scrollTo(0, 0);
    skillList.map( item => {
      this.skillDesc.push(item.desc);
    });
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

