const container = document.querySelector(".container")
const numberOfCircles = 25

for (let i = 1; i <= numberOfCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.setProperty("--i", i);
    container.appendChild(circle);
}
