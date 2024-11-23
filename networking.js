fetch('https://intimate-crappie-frank.ngrok-free.app/', {
    method: 'GET'
}).then(response => response.json()).then(data => {
    document.getElementsByTagName('i')[0].innerText = data.msg
}).catch(() => {
    fetch('https://aban-is-server-production.up.railway.app/', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        document.getElementsByTagName('i')[0].innerText = data.msg
    }).catch(() => {
        document.getElementsByTagName('i')[0].innerText = "sleeping or his laptop is off (server is down)"
    })
})