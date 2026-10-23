const loreDisplay = document.getElementById("loreInfo");
const loreButton = document.getElementById("loreButton");

const menuPanel = document.getElementById("menuPanel");
const menuButton = document.getElementById("bars");
const closeMenuButton = document.getElementById("closeMenu");

function toggleMenu() {
    if (!menuPanel || !menuButton) return;

    const isOpen = menuPanel.classList.toggle("active");

    menuButton.classList.toggle("active", isOpen);

    if (closeMenuButton) {
        closeMenuButton.classList.toggle("active", isOpen);
    }

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}
function infoDisplay() {
    if (!loreDisplay || !loreButton) return;

    const isOpen = loreDisplay.classList.toggle("active");

    loreButton.classList.toggle("active", isOpen);
    loreButton.setAttribute("aria-expanded", String(isOpen));
    loreDisplay.setAttribute("aria-hidden", String(!isOpen));
}