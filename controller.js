window.onload = () => {
    var user = localStorage.getItem("whoami");
    if (!user) {
        document.getElementById("overlay").style.display = "flex";
    } else {
        if (user.toLowerCase().startsWith("dakshita")) {
            document.getElementById("heartBtn").innerText = "Send ❤️"
            document.querySelector("#notif > span").innerText = "❤️ has been sent to Aban!"
        }

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
    document.getElementById("heartBtn").setAttribute("disabled", true)
    document.getElementById("notif").style.cssText = "top: 2%;"
    await new Promise(r => setTimeout(r, 2000));
    
    setTimeout(() => {
        document.getElementById("heartBtn").removeAttribute("disabled")
    }, 30000)

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