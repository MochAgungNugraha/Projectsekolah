// Animasi sederhana untuk tombol
document.querySelectorAll('input[type="submit"]').forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#274F75";
    button.style.color = "#fff";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#fff";
    button.style.color = "#274F75";
  });
});

// Animasi kursor mengikuti tab
const tabs = document.querySelectorAll("#header ul li a");

tabs.forEach((tab) => {
  tab.addEventListener("mousemove", (e) => {
    const rect = tab.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posisi kursor relatif terhadap tab
    const y = e.clientY - rect.top;

    tab.style.setProperty("--x", `${x}px`);
    tab.style.setProperty("--y", `${y}px`);
  });

  tab.addEventListener("mouseleave", () => {
    tab.style.removeProperty("--x");
    tab.style.removeProperty("--y");
  });
});
