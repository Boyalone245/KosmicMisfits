
const menuPanel = document.getElementById("menuPanel");
const menuButton = document.getElementById("bars");

const mintButton = document.getElementById("mintButton");
const mintPanel = document.getElementById("mintPanel");

const panels = {
    menu: menuPanel,
    mint: mintPanel
};

function closePanel(panelName) {
    const panel = panels[panelName];

    if (!panel) return;

    panel.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");

    if (panelName === "menu" && menuButton) {
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }

    if (panelName === "mint" && mintButton) {
        mintButton.classList.remove("active");
        mintButton.setAttribute("aria-expanded", "false");
        mintButton.setAttribute("aria-label", "Open mint information");
    }
}

function closeAllPanels(except = null) {
    Object.keys(panels).forEach(panelName => {
        if (panelName !== except) {
            closePanel(panelName);
        }
    });
}

function openPanel(panelName) {
    const panel = panels[panelName];

    if (!panel) return;

    closeAllPanels(panelName);

    panel.classList.add("active");
    panel.setAttribute("aria-hidden", "false");

    if (panelName === "menu" && menuButton) {
        menuButton.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation menu");
    }

    if (panelName === "mint" && mintButton) {
        mintButton.classList.add("active");
        mintButton.setAttribute("aria-expanded", "true");
        mintButton.setAttribute("aria-label", "Close mint information");
    }
}

function togglePanel(panelName) {
    const panel = panels[panelName];

    if (!panel) return;

    if (panel.classList.contains("active")) {
        closePanel(panelName);
    } else {
        openPanel(panelName);
    }
}

function toggleMenu() {
    togglePanel("menu");
}

function toggleMint() {
    togglePanel("mint");
}

// Lore is now a normal page section.
function aboutsection() {
    closeAllPanels();

    const loreSection = document.getElementById("loreInfo");

    if (loreSection) {
        loreSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Keep compatibility with older HTML.
function infoDisplay() {
    aboutsection();
}

// Close floating panels when clicking outside.
document.addEventListener("click", event => {

    const clickedMenu =
        menuPanel?.contains(event.target) ||
        menuButton?.contains(event.target);

    const clickedMint =
        mintPanel?.contains(event.target) ||
        mintButton?.contains(event.target);

    if (!clickedMenu) {
        closePanel("menu");
    }

    if (!clickedMint) {
        closePanel("mint");
    }
});

// Escape closes all floating panels.
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeAllPanels();
    }
});
const NFT_view_port = [
    document.getElementById("NFT_display1"),
    document.getElementById("NFT_display2"),
    document.getElementById("NFT_display3"),
    document.getElementById("NFT_display4"),
    document.getElementById("NFT_display5"),
    document.getElementById("NFT_display6"),
    document.getElementById("NFT_display7")
].filter(Boolean);

let NFT_viewPort_no = 0;

function showNFT(index) {
    NFT_view_port.forEach((NFT, currentIndex) => {
        NFT.classList.toggle("active", currentIndex === index);
    });
}

function NFT_shuffle() {
    if (NFT_view_port.length < 2) return;

    NFT_viewPort_no =
        (NFT_viewPort_no + 1) % NFT_view_port.length;

    showNFT(NFT_viewPort_no);
}

if (NFT_view_port.length > 0) {
    showNFT(0);

    if (NFT_view_port.length > 1) {
        setInterval(NFT_shuffle, 3000);
    }
}

const revealElements = document.querySelectorAll(
    ".teamhighlight, .topCharacters, .loreInfo"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}

closeAllPanels();