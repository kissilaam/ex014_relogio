function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  msg.innerHTML = `Agora são <b>${hora}:${minutos}</b> horas.`
  if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#f1e0c8'
    msg.innerHTML += `</br>Tenha um ótimo dia!`
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#dcb077'
    msg.innerHTML += `</br>Tenha uma ótima tarde!`
  } else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#192e2f'
    msg.innerHTML += `</br>Tenha uma ótima noite!`
  }
}
