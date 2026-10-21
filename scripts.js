// =================================
// MINT BUTTON
// =================================

const mintButton = document.getElementById("mintButton");
const mintPanel = document.getElementById("mint");

function mintDisplay() {
    if (!mintButton || !mintPanel) {
        return;
    }

    const isOpen = mintButton.classList.toggle("active");

    mintButton.setAttribute("aria-expanded", String(isOpen));

    mintButton.setAttribute(
        "aria-label",
        isOpen ? "Close mint information" : "Open mint information"
    );

    mintPanel.hidden = !isOpen;
}


// =================================
// HAMBURGER MENU
// =================================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

function toggleMenu() {
    if (!menuButton || !menu) {
        return;
    }

    const isOpen = menuButton.classList.toggle("active");

    menu.classList.toggle("active", isOpen);

    menuButton.setAttribute("aria-expanded", String(isOpen));
}