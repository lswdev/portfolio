<!--eslint-disable-->
<template>
  <div>
    <div class="scroll-bar"></div>
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
      <!-- 아바타 -->
      <div class="main-top-contain detail-contain" id="detail-contain1" ref="detailContain1" >
        <div class="avatar">
          <span class="avatar-label">Developer</span>
          <span class="my-avatar">이시우<br>1997. 02. 28<br>Lee Siwoo</span>
          <div class="avatar-talk">
            <!--<span class="talk-arrow">◀</span>-->
            <span style="color: rgba(255,255,255,0.47)">
              <font class="font-gradient">Frontend</font> 로서 차근차근 쌓아올리는 개발자 <br>
              <font class="font-gradient">이시우</font> 입니다.
            </span>
          </div>
        </div>
        <img class="mouse-scroll" src="../assets/images/mouse-cursor-lg.png" alt="mouse-scroll-point">
      </div>
      <!-- 기술(skill) 목록 -->
      <div class="main-top-contain detail-contain" id="detail-contain2" ref="detailContain2">
        <div class="intro-detail skills">
          <div class="custom-area skills-area">
            <h2> <!-- data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom"-->
              <!--<span style="padding-right: 17px">&lt;</span>-->
              <span class="font-700" style="font-size: 2.5rem">SKILL</span>
              <!--<span>/&gt;</span>-->
            </h2>
            <div class="skill-labels"></div>
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
      <!-- 경력(Career) 목록 -->
      <div class="main-top-contain detail-contain" id="detail-contain3" ref="detailContain3">
        <div class="intro-detail careers">
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
    device: 'web',
    deviceWidth: window.innerWidth,
  }),
  mounted() {
    // window.scrollTo(0, 0);
    skillList.map( item => {
      this.skillDesc.push(item.desc);
    });
    this.bodyScroll();
    this.skillLabelMove();
    window.addEventListener('resize', this.windowSizeChange);
  },
  created() {
    this.initTop();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowSizeChange);
  },
  methods : {
    initTop() {
      // window.scrollTo(0, 0);
    },
    windowSizeChange() {
      this.deviceWidth = window.innerWidth;
      if (992 < this.deviceWidth && this.deviceWidth <= 1200) {  // 데스크탑
        this.device = 'web';
      }
      else if (768 < this.deviceWidth && this.deviceWidth <= 992) {  // 태블릿 디바이스
        this.device = 'tablet';
      }
      else if (576 <= this.deviceWidth && this.deviceWidth <= 768) {  // 모바일 디바이스
        this.device = 'mobile';
      }
      else if (this.deviceWidth < 576) { // 가장 작은 디바이스
        this.device = 'mobile';
      }
      else {  // 큰화면 데스크탑
        this.device = 'web';
      }
      console.log('device', this.device);
    },
    navList() {
      window.$('.hamburger').toggleClass('is-active');
      this.toggleNav = !this.toggleNav;
    },
    bodyScroll() {
      const scrollBar = document.querySelector('.scroll-bar');
      scrollBar.animate(
        [
          { transform: 'translateX(-100%)', offset: 0 },
          { transform: 'translateX(0)', offset: 1 }
        ],
        {
          fill: 'both',
          duration: 1000,
          // eslint-disable-next-line no-undef
          timeline: new ScrollTimeline({
            scrollOffsets: [
              { target: document.body, edge: 'start', threshold: 1 },
              { target: document.body, edge: 'end', threshold: 1 },
            ]
          })
        }
      )
      // const careerScroll = document.querySelector('#detail-contain3');
      // careerScroll.animate(
      //     [
      //       { backgroundColor: '#171E41', offset: 0.56 },
      //       { backgroundColor: 'white', offset: 0.8 },
      //       { backgroundColor: 'white', offset: 1 },
      //     ],
      //     {
      //       duration: 1000,
      //       // eslint-disable-next-line no-undef
      //       timeline: new ScrollTimeline({
      //         scrollOffsets: [
      //           { target: document.body, edge: 'start', threshold: 1 },
      //           { target: document.body, edge: 'end', threshold: 1 },
      //         ]
      //       })
      //     }
      // );
    },
    skillLabelMove() {
      const skillLabel = document.querySelector('.skill-labels');
      const labels = [];

      let label;
      for (let i = 0; i < this.skillLists.length; i++ ) {
        label = document.createElement('span');
        label.classList.add('skill-label');
        const imgSrc = require(`@/assets/images/icons/${this.skillLists[i].icon}`);
        label.innerHTML = `
          <div class="label-ico">
            <img src="${imgSrc}" alt="${this.skillLists[i].skill}"
              style="${this.skillLists[i].iconCustomWidth ? `width: ${this.skillLists[i].iconCustomWidth}` : ''}"
              filterWhite="${this.skillLists[i].filterWhite}">
          </div>
          <div class="label-text font-700">${this.skillLists[i].skill}</div>
        `;
        skillLabel.append(label);
        labels.push(label);
      }
      const labelKeyFrames = [
        { transform: 'translateY(-20%)' },
        { transform: 'translateY(20%)' },
      ];
      const labelOptions = {
        duration: 1500,
        iterations: Infinity,
        direction: 'alternate',
        fill: 'both',
        easing: 'ease-in-out'
      }
      labels.forEach((label, index) => {
        label.animate(labelKeyFrames, { ...labelOptions, delay: index*200 });
      });
    },
  },
}
</script>

