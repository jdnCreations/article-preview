const tooltip = document.querySelector(".tooltip");
const shareIco = document.querySelector("#share-ico");
const sharebtn = document.querySelector(".share-btn");

function share() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        animateTooltipMobile();
    } else {
        animateTooltipDesktop();
    }
}

function animateTooltipDesktop() {
    if (tooltip.style.display == "flex") {
        tooltip.style.transform = "translate(0%, 60%)";
        tooltip.style.opacity = 0;
        setTimeout(() => {
            tooltip.style.display = "none";
            sharebtn.style.background = "hsl(210, 46%, 95%)";
            shareIco.setAttribute("src", "/images/icon-share.svg");
        }, 150);
    } else {
        sharebtn.style.background = "hsl(214, 17%, 51%)";
        shareIco.setAttribute("src", "/images/icon-share.svg");
        tooltip.style.display = "flex";
        tooltip.style.transform = "translate(0%, 30%)";
        tooltip.style.opacity = 0;
        setTimeout(() => {
            tooltip.style.opacity = 1;
            tooltip.style.transform = "translate(0%, 0%)";
        }, 100);
    }
}

function animateTooltipMobile() {
    if (tooltip.style.display === "flex") {
        tooltip.style.transform = "scaleX(0)";
        iconAnimate(2);
        tooltip.style.opacity = 0;
        setTimeout(() => {
            tooltip.style.display = "none";
            iconAnimate(1);
        }, 150);
    } else {
        tooltip.style.display = "flex";
        tooltip.style.transform = "scaleX(0)";
        tooltip.style.opacity = 0;
        iconAnimate(5);

        setTimeout(() => {
            tooltip.style.opacity = 1;
            tooltip.style.transform = "scaleX(1)";
            iconAnimate(1, true);
        }, 100);
    }
}

function iconAnimate(value) {
    tooltip.querySelectorAll("div").forEach((div) => {
        if (div.classList.contains("ico")) {
            div.querySelectorAll("img").forEach((img) => {
                img.style.transform = `scale(${value})`;
            });
        } else {
            div.style.transform = `scale(${value})`;
        }
    });
}