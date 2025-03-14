document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    let scaleFactor = 1;

    noButton.addEventListener("click", function (event) {
        event.preventDefault();
        scaleFactor *= 1.5;
        yesButton.style.transform = `scale(${scaleFactor})`;
    });
});

