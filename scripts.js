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

const NFT_view_port = [
    document.getElementById("NFT_display1"),
    document.getElementById("NFT_display2"),
    document.getElementById("NFT_display3"),
    document.getElementById("NFT_display4"),
    document.getElementById("NFT_display5"),
    document.getElementById("NFT_display6"),
    document.getElementById("NFT_display7")
];

let NFT_viewPort_no = 0;

function NFT_shuffle() {
    if (NFT_view_port.some(NFT => !NFT)) {
        return;
    }

    const current = NFT_view_port[NFT_viewPort_no];

    NFT_viewPort_no = (NFT_viewPort_no + 1) % NFT_view_port.length;

    const next = NFT_view_port[NFT_viewPort_no];

    next.classList.add("active");
    current.classList.remove("active");
}

NFT_shuffle();

setInterval(NFT_shuffle, 5000);