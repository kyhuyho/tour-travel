window.addEventListener("load", function () {
  /* hover link effect */
  const headerMenu = document.querySelector(".header-menu");
  const headerLinks = document.querySelectorAll(".header-menu-link");
  const headerSignin = document.querySelector(".header-signin");
  const headerSignup = document.querySelector(".header-signup");
  const headerBox = document.querySelector(".header-box");
  const line = document.createElement("div");
  line.classList.add("line-effect");
  document.body.appendChild(line);
  const spaceTop = 5;
  headerLinks.forEach((item) =>
    item.addEventListener("mouseenter", function (e) {
      const coordinates = e.target.getBoundingClientRect();
      const { width, height, top, left } = coordinates;
      line.style.width = `${width}px`;
      line.style.left = `${left}px`;
      line.style.top = `${top + height + spaceTop}px`;
    })
  );
  headerMenu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
  headerSignin.addEventListener("mouseenter", function () {
    line.style.width = 0;
  });
  headerSignup.addEventListener("mouseenter", function () {
    line.style.width = 0;
  });
  headerBox.addEventListener("mouseenter", function () {
    line.style.width = 0;
  });
  if (document.documentElement.offsetWidth <= 767) {
    line.parentNode.removeChild(line);
  }
  headerBox.addEventListener("click", function () {
    headerBox.classList.toggle("is-active");
    document.body.classList.toggle("is-active");
  });
  /* header menu toggle */
  const headerToggleMenu = document.querySelector(".header-toggle-menu");
  headerToggleMenu.addEventListener("click", function (e) {
    e.target.classList.toggle("fa-bars");
    e.target.classList.toggle("fa-times");
    headerMenu.classList.toggle("is-active");
  });
  document.documentElement.addEventListener("click", function (e) {
    if (
      !headerMenu.contains(e.target) &&
      !e.target.matches(".header-toggle-menu")
    ) {
      headerToggleMenu.classList.remove("fa-times");
      headerToggleMenu.classList.add("fa-bars");
      headerMenu.classList.remove("is-active");
    }
  });
});
