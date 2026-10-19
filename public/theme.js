{
  let preference;
  try {
    preference = localStorage.getItem("renovar-theme");
  } catch {
    // The device preference also works when browser storage is unavailable.
  }
  const theme = preference === "light" || preference === "dark"
    ? preference
    : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content", theme === "dark" ? "#00184A" : "#FFFFFF",
  );
}
