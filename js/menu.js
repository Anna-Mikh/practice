(() => {
  const menuBtnOpen = document.querySelector("[data-menu-open]");
   const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector(".mobile-menu");

  menuBtnOpen.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  menuBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();
