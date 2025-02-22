
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("body *").forEach(node => {
        if (node.childNodes.length === 1 && node.textContent.includes("◉")) {
            node.innerHTML = node.innerHTML.replace(/\u25C9/g, '<span class="no-select">◉</span>');
        }
    });

    const style = document.createElement("style");
    style.innerHTML = `
        .no-select {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            cursor: default;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    document.addEventListener("copy", function (e) {
        const selection = window.getSelection().toString();
        if (selection.includes("◉")) {
            e.preventDefault();
        }
    });

    document.addEventListener("mousedown", function (e) {
        if (e.target.closest(".no-select")) {
            e.preventDefault();
        }
    });

    document.addEventListener("contextmenu", function (e) {
        if (e.target.closest(".no-select")) {
            e.preventDefault();
        }
    });

    document.addEventListener("touchstart", function (e) {
        if (e.target.closest(".no-select")) {
            e.preventDefault();
        }
    });

    document.addEventListener("selectstart", function (e) {
        if (e.target.closest(".no-select")) {
            e.preventDefault();
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let inputGroup = document.querySelector(".input-group");
    let messageElement = document.getElementById("message");
    let characterImage = document.getElementById("character-image");

    // 监听 message 和 character-image 的变化
    let observer = new MutationObserver(() => {
        if (messageElement.textContent.trim() !== "" || characterImage.style.display === "block") {
            inputGroup.classList.add("move-down");
        } else {
            inputGroup.classList.remove("move-down");
        }
    });

    observer.observe(messageElement, { childList: true, subtree: true });

    let imageObserver = new MutationObserver(() => {
        if (characterImage.style.display === "block") {
            inputGroup.classList.add("move-down");
        }
    });

    imageObserver.observe(characterImage, { attributes: true, attributeFilter: ["style"] });
});
