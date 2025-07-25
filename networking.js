fetch('https://intimate-crappie-frank.ngrok-free.app/', {
    method: 'GET'
}).then(response => response.json()).then(data => {
    document.getElementsByTagName('i')[0].innerText = data.msg
}).catch(() => {
    fetchWithTimeout('https://aban-is-server.onrender.com/', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        document.getElementsByTagName('i')[0].innerText = data.msg
    }).catch(() => {
        document.getElementsByTagName('i')[0].innerText = "sleeping or his laptop is off"
    })
})

function fetchWithTimeout(url, options = {}, timeout = 3000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    )
  ]);
}