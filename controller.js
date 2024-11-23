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

document.getElementById("heartBtn").addEventListener("click", async () => {
    document.getElementById("notif").style.cssText = "top: 2%;"
    await new Promise(r => setTimeout(r, 2000));

    fetch("https://intimate-crappie-frank.ngrok-free.app/", {
        method: "POST",
        body: JSON.stringify({
            msg: localStorage.getItem("whoami"),
            type: "heart"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    document.getElementById("notif").style.cssText = "top: -100px;"
})