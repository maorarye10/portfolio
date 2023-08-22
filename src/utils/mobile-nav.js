export const mobileNav = () => {
  const headerBarsBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  // State
  let isMobileNavOpen = false;

  // Handlers
  const handleMobileNavToggle = () => {
    if (!isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
    isMobileNavOpen = !isMobileNavOpen;
  };

  const handleHideMobileNav = () => {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
    isMobileNavOpen = false;
  };

  // Events
  headerBarsBtn.addEventListener("click", handleMobileNavToggle);

  mobileLinks.forEach((link) =>
    link.addEventListener("click", handleHideMobileNav)
  );
};
