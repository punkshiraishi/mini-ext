const button = document.getElementById('display')
button.addEventListener('click', () => {
  chrome.runtime.sendMessage({ name: 'displayUrl:background' })
})