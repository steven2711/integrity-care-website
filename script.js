// Mobile navigaiton fix //

// Closes mobile menu when user clicks nav link

const checkbox = document.getElementById("checkbox");
const navigationLinks = document
  .getElementById("mobile-links")
  .querySelectorAll("li");

navigationLinks.forEach((listItem) => {
  listItem.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  if (checkbox) {
    checkbox.checked = false;
  }
}
