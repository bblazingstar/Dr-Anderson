document.addEventListener("DOMContentLoaded", function() {
    console.log("Dr. Anderson's Stylish Website Loaded!");

    // Fancy Text Glow Effect
    const title = document.getElementById("title");
    let colors = ["#ff00ff", "#00ffff", "#ffcc00"];
    let index = 0;

    setInterval(() => {
        title.style.textShadow = `0px 0px 15px ${colors[index]}`;
        index = (index + 1) % colors.length;
    }, 500);
});