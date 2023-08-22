export const themeSwitcher = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  // State
  const lightTheme = localStorage.getItem("lightTheme");

  // On mount
  lightTheme && document.body.classList.add(lightTheme);

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    console.log(document.body.classList.contains("light-mode"));
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("lightTheme", "light-mode");
    } else {
      localStorage.removeItem("lightTheme");
      document.body.removeAttribute("class");
    }
  };

  // Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};
