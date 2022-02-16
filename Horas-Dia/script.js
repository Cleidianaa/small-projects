function load(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = 22// data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12){
        // Good morning
        img.src = 'manhã.jpg'
        document.body.style.background = '#b9846f'
    }else if( hora >= 12 && hora <= 18){
        // Good afternoon
        img.src = 'tarde.jpg'
        document.body.style.background = '#b117b'
    }else {
        // Good night
        img.src = 'noite.jpg'
        document.body.style.background = '#515365'
    }
}