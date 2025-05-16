document.addEventListener("DOMContentLoaded", () => {
  fetch("src/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // async until header is loaded
      const openBtn = document.getElementById("mobile-menu-button");
      const closeBtn = document.getElementById("mobile-menu-close");
      const menu = document.getElementById("mobile-menu");
      const backdrop = document.getElementById("mobile-backdrop");

      if (openBtn && closeBtn && menu) {
        openBtn.addEventListener("click", () => {
          menu.classList.remove("hidden");
          if (backdrop) backdrop.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
        });

        closeBtn.addEventListener("click", () => {
          menu.classList.add("hidden");
          if (backdrop) backdrop.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        });
      }
    })
    .catch((err) => console.error("Failed to load header:", err));
});
