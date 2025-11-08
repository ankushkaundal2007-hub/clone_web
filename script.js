// Add small glow animation to header elements on hover
document.querySelectorAll("header p").forEach(p => {
    p.addEventListener("mouseenter", () => {
        p.style.textShadow = "0 0 15px #00ffff";
    });
    p.addEventListener("mouseleave", () => {
        p.style.textShadow = "none";
    });
});
