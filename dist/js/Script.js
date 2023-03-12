// ======================= Navbar Menu  ========================
const mainSections = document.querySelectorAll("main section");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const navLinksItems = document.querySelectorAll(".nav-item a");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

navLinksItems.forEach((navLinksItem) => {
  navLinksItem.addEventListener("click", (event) => {
    event.preventDefault();

    // once clicked, remove all the active style on all menu items
    navLinksItems.forEach((navLinksItem) => {
      navLinksItem.parentElement.classList.remove("nav-item-active");
    });

    // then add the activse style on the clicked menu item
    navLinksItem.parentElement.classList.add("nav-item-active");

    // get the href to find the id of the clicked section and scroll to it
    const targetId = navLinksItem.getAttribute("href");
    const targetElement = document.getElementById(targetId);
    const topOffset = targetElement.offsetTop;

    window.scrollTo({
      // this needs to minus the heigh of header + 26
      top: topOffset - headerHeight,
      behavior: "smooth",
    });
  });
});

// ====================== Active Stage when Scrolling ====================

// ======================= Scroll Up Button ========================
const scrollUpButton = document.getElementById("scroll-up-button");

// when clicked, moving up to the top of the page
scrollUpButton.addEventListener("click", (event) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// dectect when the page reach to the end to show the button
window.onscroll = function () {
  if (
    window.innerHeight + Math.ceil(window.pageYOffset) >=
    document.body.offsetHeight
  ) {
    scrollUpButton.style.cssText = "opacity: 1; transition: all 250ms ease";
  } else {
    scrollUpButton.style.opacity = "0";
  }
};

// const section1 = document.getElementById("section-1");
// const rect = section1.getBoundingClientRect();
// console.log(rect);
