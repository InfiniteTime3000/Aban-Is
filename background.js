window.setInterval(() => {
    if ((new Date().getTime() - localStorage.getItem("btnClickedAt"))/60000 >= 5) {
        document.getElementById("heartBtn").removeAttribute("disabled")
    }
}, 1000)