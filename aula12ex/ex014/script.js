function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#d2d2e4'
    } else if (hora >= 12 && hora < 18) { // Aqui está a correção
        img.src = 'tarde.png'
        document.body.style.background = '#c29d58';
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0e2247'; // Corrigi a cor removendo um # extra
    }
}


