
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} Horas.`
    if(hora >=6 && hora<= 12){
        img.src = 'imagens/manha4.png'
        document.body.style.background = '#a19891'
    }else if(hora >= 13 && hora <= 18){
        img.src = 'imagens/tarde4.png'
        document.body.style.background = '#7f5340'
    } else if (hora >= 19 && hora <= 24){
        img.src = 'imagens/noite4.png'
        document.body.style.background = '#01191d'
    }
        
    
}