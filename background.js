window.setInterval(() => {
    if ((new Date().getTime() - localStorage.getItem("btnClickedAt"))/60000 >= 5) {
        document.getElementById("heartBtn").removeAttribute("disabled")
    } else {
        document.getElementById("heartBtn").setAttribute("disabled", true)
    }
}, 1000)