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
const mintButton = document.getElementById("mintButton");
const mintPanel = document.getElementById("mintPanel");

function toggleMint(){
    if(!mintButton || !mintPanel){
        return;
    }
    const activated = mintPanel.classList.toggle("active");
    mintButton.classList.toggle("active", activated);
    mintButton.setAttribute("aria-expanded", String("activated"));
    console.log("clicked")
}

const backgrounds = [
    document.getElementById("backgroundOne"),
    document.getElementById("backgroundTwo")
];

let background_no = 0;

function backgroundChange() {
    backgrounds.forEach(background => {
        background.classList.remove("active");
    });

    backgrounds[background_no].classList.add("active");

    background_no = (background_no + 1) % backgrounds.length;
}

backgroundChange();

setInterval(backgroundChange, 5000);