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

function fetchWithTimeout(url, timeout = 3000) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal }).finally(() => clearTimeout(timer));
}