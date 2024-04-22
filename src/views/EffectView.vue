<style scoped>
/* mouseType */
.mouse__wrap {
  width: 100%;
  height: 100vh;  /* vw를 사용하면 스크롤이 생기므로vh로 작업 */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  overflow: hidden;
  cursor: none; /* 커서를 해당 영역에서 안보이게 한다. */
}
.mouse__wrap p {
  font-size: 2vw;
  line-height: 2;
  font-weight: 200;
}
.mouse__wrap p:last-child {
  font-size: 3vw;
  font-weight: 300;
}
.mouse__wrap p span {
  padding-bottom: 3px;
  border-bottom: 0.1vw solid #e7ad00;
  color: #e7ad00;
}

@media (max-width: 800px) {
  .mouse__wrap p {
    padding: 0 20px;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 10px;
  }
  .mouse__wrap p:last-child {
    font-size: 40px;
    line-height: 1.5;
    text-align: center;
    word-break: keep-all;
  }
}

/* mouse__cursor */
.mouse__cursor {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: rgba(255,255,255,0.1);
  user-select: none; /* 커서 이벤트 발생하지 않게 함. (선택되지 않게 함.) */
  pointer-events: none;
  /* perspective: 400px;
  transform-style: preserve-3d; */
  transition: background-color 0.3s, border-color 0.3s, transform 0.6s, border-radius 0.3s;
}
.mouse__cursor.style1 {
  background-color: rgba(77, 49, 18, 0.4);
  border-color: #e7ad00;
  border-radius: 0;
}
.mouse__cursor.style2 {
  background-color: rgba(24, 58, 78, 0.4);
  border-color: #008be7;
  transform: scale(2) rotateY(720deg);
}
.mouse__cursor.style3 {
  background-color: rgba(77, 49, 18, 0.4);
  border-color: #e7ad00;
  transform: scale(5) skew(10deg);
}
.mouse__cursor.style4 {
  background-color: rgba(53, 23, 65, 0.4);
  border-color: #ad66ba;
  transform: scale(10);
}
.mouse__cursor.style5 {
  background-color: rgba(24, 58, 78, 0.4);
  border-color: #008be7;
  transform: scale(1);
}
.mouse__cursor.style6 {
  background-color: rgba(145, 46, 86, 0.4);
  border-color: #f586af;
  border-radius: 0;
  transform: scale(3) rotateX(545deg) skew(10deg);
}

/*  .mouse__info */
.mouse__info {
  position: absolute;
  left: 20px;
  bottom: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
}
</style>

<template>
  <div>
    <main id="main">
      <section id="mouseType01">
        <div class="mouse__cursor"></div>
        <div class="mouse__wrap">
          <p>The <span class="style1">future</span> depends on <span class="style2">what we do</span> in the <span class="style3">present</span></p>
          <p><span class="style4">미래</span>는 <span class="style5">현재</span> 우리가 <span class="style6">무엇을 하는가</span>에 달려 있다.</p>
        </div>
      </section>

      <div class="mouse__info">
        <ul>
          <li>clientX : <span class="clientX">0</span>px</li>
          <li>clientY : <span class="clientY">0</span>px</li>
          <li>offsetX: <span class="offsetX">0</span>px</li>
          <li>offsetY: <span class="offsetY">0</span>px</li>
          <li>pageX: <span class="pageX">0</span>px</li>
          <li>pageY: <span class="pageY">0</span>px</li>
          <li>screenX: <span class="screenX">0</span>px</li>
          <li>screenY: <span class="screenY">0</span>px</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addEventListeners();
  },
  methods: {
    addEventListeners() {
      //커서 위치 좌표 값
      window.addEventListener("mousemove", (event) => {
        document.querySelector(".clientX").innerText = event.clientX; //브라우저 기준
        document.querySelector(".clientY").innerText = event.clientY;
        document.querySelector(".offsetX").innerText = event.offsetX; //요소 기준
        document.querySelector(".offsetY").innerText = event.offsetY;
        document.querySelector(".pageX").innerText = event.pageX; //문서 기준
        document.querySelector(".pageY").innerText = event.pageY;
        document.querySelector(".screenX").innerText = event.screenX; //디바이스 기준
        document.querySelector(".screenY").innerText = event.screenY;
      });

      const cursor = document.querySelector(".mouse__cursor"); //지역 변수(함수안)는 이벤트가 작동 X 전역변수로 해야 이벤트가 작동되기 때문에 전역 변수로 작업.

      //커서 영역 정하기
      window.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX -25 + "px";
        cursor.style.top = e.clientY -25  + "px";
      });
      // for문 : 마우스 커서 이벤트 작동시키기
      // for문 식 쓰고 반복되는 실행문 쓰기 - 그 뒤 숫자 지우고 i로 변경하기
      for(let i=1; i<=6; i++){
        document.querySelector(".style"+ i).addEventListener("mouseover", () => {
          cursor.classList.add("style" + i);
        });
        document.querySelector(".style"+ i).addEventListener("mouseout", () => {
          cursor.classList.remove("style"+ i);
        });
      }

      // forEach() : 마우스 커서 이벤트 작동시키기
      const num = [1,2,3,4,5,6];
      num.forEach(el => {
        document.querySelector(".style"+ el).addEventListener("mouseover", () => {
          cursor.classList.add("style" + el);
        });
        document.querySelector(".style"+ el).addEventListener("mouseout", () => {
          cursor.classList.remove("style"+ el);
        });
      });

      // forEach() : 마우스 커서 이벤트 작동시키기
      document.querySelectorAll(".mouse__wrap span").forEach((span, num) => {
        span.addEventListener("mouseover", () => {
          cursor.classList.add("style" + (num+1));
        });
        span.addEventListener("mouseout", () => {
          cursor.classList.remove("style" + (num+1));
        });
      });

      // getAttribute : 마우스 커서 이벤트 작동시키기
      document.querySelectorAll('.mouse__wrap span').forEach((span) => {
        const attr = span.getAttribute('class');
        span.addEventListener("mouseover", () => {
          const cursor = document.querySelector('.mouse__cursor');
          cursor.classList.add(attr);
        });
        span.addEventListener("mouseout", () => {
          const cursor = document.querySelector('.mouse__cursor');
          cursor.classList.remove(attr);
        });
      });
    }
  }
}

</script>
