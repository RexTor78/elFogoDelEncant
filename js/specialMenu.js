document.addEventListener("DOMContentLoaded", () => {
  // Menú hamburguesa
  const toggleBtn = document.querySelector(".menuToggleButton");
  const menu = document.getElementById("menu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = menu.classList.contains("hidden");
      menu.classList.toggle("hidden", !isHidden);
      menu.classList.toggle("show", isHidden);
      toggleBtn.classList.toggle("isOpen", isHidden);
    });
  }

  // Igualar altura foto vino = altura tabla, sin tocar la tabla
  const bodegaImg = document.querySelector(".bodega-img");
  const bodegaTableWrapper = document.querySelector(".bodega-table-wrapper");

  function syncBodegaHeights() {
    if (!bodegaImg || !bodegaTableWrapper) return;

    // que la tabla mande la altura
    bodegaImg.style.height = bodegaTableWrapper.offsetHeight + "px";
  }

  syncBodegaHeights();
  window.addEventListener("resize", syncBodegaHeights);
  window.addEventListener("load", syncBodegaHeights);
});
