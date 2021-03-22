/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */


//   Define Global Variables
// difine to top anchor
const toTop = document.querySelector(".to-top");
/** Build NavBar Menu  */
const sections = document.querySelectorAll(".asection");
const aul = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();
sections.forEach((element) => {
  const sec_datanav = element.getAttribute("data-nav");
  const newli = document.createElement("li");
  const newlink = document.createElement("a");
  const textNode = document.createTextNode(sec_datanav);

  /** Go To Section */

  newlink.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth" });
  });

  //   Define Global Variables

  newlink.appendChild(textNode);
  newli.appendChild(newlink);
  fragment.appendChild(newli);
});
// Assigning the imaginary Node object we've created "fragment" to the ul variable "aul"
aul.appendChild(fragment);

/** On User Scroll */
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();

    // Check if element is in the viewport
    if (rect.top >= -100 && rect.top <= 200) {
      //   styling active section & its content
      sections.forEach((remover) => {
        remover.style.background = "";
      });
      sec.style.background = "rgba(255, 235, 205, 0.090)";

      const allLinks = document.querySelectorAll("a");
      // Check if element is in the viewport indicated on navbar
      allLinks.forEach((alink) => {
        if (sec.getAttribute("data-nav") == alink.textContent) {
          //   styling active section on the navbar
          allLinks.forEach((remover) => {
            remover.style.background = "";
          });
          alink.style.background = "lightblue";
          alink.style.borderRadius = "5px";
          alink.style.padding = "10px";

          //   styling onmouseover & out
          alink.onmouseover = function () {
            this.style.background = "rgba(173, 216, 230, 0.404)";
          };
          alink.onmouseout = function () {
            this.style.backgroundColor = "";
          };
        }
      });
    }
  });
});
