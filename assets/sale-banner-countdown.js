document.addEventListener("DOMContentLoaded", () => {
    const countdowns = document.querySelectorAll("[data-countdown]");
  
    countdowns.forEach((el) => {
      const endDate = new Date(el.dataset.end);
      const section = el.closest(".sale-banner");
      const ended = section.querySelector(".sale-banner__ended");
  
      const daysEl = el.querySelector("[data-days]");
      const hoursEl = el.querySelector("[data-hours]");
      const minsEl = el.querySelector("[data-mins]");
      const secsEl = el.querySelector("[data-secs]");
  
      const tick = () => {
        const now = new Date();
        const diff = endDate - now;
  
        if (diff <= 0) {
          el.hidden = true;
          if (ended) ended.hidden = false;
          clearInterval(interval);
          return;
        }
  
        const total = Math.floor(diff / 1000);
        const days = Math.floor(total / 86400);
        const hours = Math.floor((total % 86400) / 3600);
        const mins = Math.floor((total % 3600) / 60);
        const secs = total % 60;
  
        daysEl.querySelector('.sale-banner__number').textContent = days;
        hoursEl.querySelector('.sale-banner__number').textContent =
        hours.toString().padStart(2, '0');

        minsEl.querySelector('.sale-banner__number').textContent =
        mins.toString().padStart(2, '0');

        secsEl.querySelector('.sale-banner__number').textContent =
        secs.toString().padStart(2, '0');
      };
  
      tick();
      const interval = setInterval(tick, 1000);
    });
  });
  