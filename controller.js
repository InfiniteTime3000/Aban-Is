window.onload = () => {
    if (!localStorage.getItem("whoami")) {
        document.getElementById("overlay").style.display = "flex";
    } else {
        document.getElementById("main").style.display = "flex";
    }
}

document.getElementById("userInput").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        localStorage.setItem("whoami", document.getElementById("userInput").value)
        document.getElementById("main").style.display = "flex";
        document.getElementById("overlay").style.display = "none";
    }
})