var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas`)
if(hora >= 6 && hora < 12){
    console.log('Bom dia')
}else if(hora >=13 && hora <= 18){
    console.log ('Boa Tarde')
}else if (hora >= 19 && hora <=24){
    console.log ('Boa Noite')
}else if( hora >= 1 && hora <= 5){
    console.log('Boa Madruga')
}
