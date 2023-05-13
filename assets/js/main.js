function chronometer() {
  function getHourToSecond(second) {
    const data = new Date(second * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const chronometer = document.querySelector(".chronometer");

  let second = 0;
  let timer;

  function initChronometer() {
    timer = setInterval(() => {
      second++;
      chronometer.innerHTML = getHourToSecond(second);
    }, 1000);
  }

  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("start")) {
      // Verifica se o cronômetro já está em contagem
      if (!timer) {
        initChronometer();
      }
      chronometer.classList.remove("stoped");
    } else if (el.classList.contains("stop")) {
      // Pausa a contagem do cronômetro
      clearInterval(timer);
      timer = null;
      chronometer.classList.add("stoped");
    } else if (el.classList.contains("reset")) {
      clearInterval(timer);
      chronometer.innerHTML = "00:00:00";
      second = 0;
      chronometer.classList.remove("stoped");
      timer = null; // Reseta o timer ao clicar em reset
    }
  });
}
chronometer();
