const express = require("express");
const app = express();
const port = 3000;

const weather = {
  weather: "맑음",
  curr_temp: 24,
  highest_temp: 25,
  lowest_temp: 19,
};
app.get("/api/weather", (req, res) => {
  res.send(weather);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// 참고 문서  : https://velog.io/@yeonsubaek/Vue.jsMySQLExpress%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0