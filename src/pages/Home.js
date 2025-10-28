document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("December 31, 2025 23:59:59").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);

    const countdown = document.querySelector(".countdown");
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementsByClassName("countdown").value =
        "🎉 Countdown Complete!";
    }
  }, 1000);

  console.log("Hello World");
});
