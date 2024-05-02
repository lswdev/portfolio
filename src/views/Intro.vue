<!--eslint-disable-->
<template>
  <div class="main-top-contain">
    <!--ring starts-->
    <div class="ring">
      <i style="--clr:#27fd01;"></i>
      <i style="--clr:#ff0057;"></i>
      <i style="--clr:#fffd44;"></i>
      <div class="login">
        <h2>Login</h2>
        <div class="inputBx input-intro">
          <input type="text" placeholder="이시우" readonly>
        </div>
        <div class="inputBx input-intro">
          <input type="email" placeholder="lswsepia@gmail.com" readonly>
        </div>
        <div class="inputBx input-intro">
          <input type="submit" value="둘러보기">
        </div>
      </div>
    </div>
    <!--ring ends-->
  </div>
</template>

<script>
import {inputAnimation} from "@/mixins/mixins";

export default {
  mounted() {
    inputAnimation();
  },
}
</script>

