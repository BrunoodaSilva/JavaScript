var idade = 66
console.log(`Você tem ${idade} Anos`)
if( idade < 16){
    console.log('Não Pode votar')
}else if(idade >= 16 && idade < 18 ){
        console.log('Voto Opcional')
}else if(idade > 18 && idade <= 64){
    console.log('Voto Obrigatorio')
}else if(idade >= 65){
    console.log('Voto Opcional')
}