
for (let i = 0; i < 200; i++) {
  const snow = document.createElement("div");
  snow.className = "snow";
  snow.style.opacity = Math.random(); // 무작위 투명도

  const startX = Math.random() * 100; // 시작 X 좌표 무작위
  const endX = startX + (Math.random() * 20 - 10); // 종료 X 좌표 무작위
  const scale = Math.max(Math.random(), 0.5); // 무작위 크기

  const keyframe = [
    { transform: `translate(${startX}vw, 0) scale(${scale})` },
    { transform: `translate(${endX}vw, 100vh) scale(${scale})` },
  ];

  const option = {
    duration: 15000 + Math.random() * 5000, // 무작위 지속 시간
    easing: "linear",
    iterations: Infinity,
    delay: -Math.random() * 20 * 1000, // 무작위 지연 시간
  };

  snow.animate(keyframe, option);
  document.body.appendChild(snow);
}

