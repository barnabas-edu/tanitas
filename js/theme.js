const body = document.body;
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = toggleBtn.querySelector("i");

    // Böngésző szerinti alap
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("dark");
    } else {
      body.classList.add("light");
    }

    // Ikon frissítése
    function updateButtonIcon() {
      if (body.classList.contains("dark")) {
        icon.className = "bx bx-sun";   // nap ikon
      } else {
        icon.className = "bx bx-moon";  // hold ikon
      }
    }
    updateButtonIcon();

    // Váltás kattintásra
    toggleBtn.addEventListener("click", () => {
      if (body.classList.contains("dark")) {
        body.classList.replace("dark", "light");
      } else {
        body.classList.replace("light", "dark");
      }
      updateButtonIcon();
    });
