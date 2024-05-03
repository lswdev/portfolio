<!--eslint-disable-->
<template>
  <section class="detail-section" id="detailSection">
    <div class="main-top-contain detail-contain" id="detail-contain">
      <div class="intro-detail">
        <div class="login">
          <h2>Login</h2>
        </div>
      </div>
    </div>
    <div class="main-top-contain detail-contain" id="detail-contain2">
      <div class="intro-detail">
        <div class="login">
          <h2>Login2</h2>
        </div>
      </div>
    </div>
    <div class="main-top-contain detail-contain" id="detail-contain3">
      <div class="intro-detail">
        <div class="login">
          <h2>Login3</h2>
        </div>
      </div>
    </div>
    <div class="main-top-contain detail-contain" id="detail-contain4">
      <div class="intro-detail">
        <div class="login">
          <h2>Login4</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inputAnimation } from "@/mixins/mixins";

export default {
  methods:{
    scrollPage(e) {
      console.log(e);
      const mSection = window.$(".detail-section");
      let page = 1;

      // wheel 기능 제거
      window.addEventListener("wheel", function(e){
        e.preventDefault();
      },{passive : false});

      mSection.animate({scrollTop : 0},10);

      window.$(window).on("wheel", function(e) {
        console.log(mSection.is(":animated"));
        if(mSection.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
          if(page == 4) return;
          page++;
        } else if(e.originalEvent.deltaY < 0) {
          if(page == 1) return;
          page--;
        }
        var posTop =(page-1) * window.$(window).height();
        mSection.animate({scrollTop : posTop});
      });
    }
  },
  mounted() {
    inputAnimation();
    // this.scrollPage();
  },
}
</script>

