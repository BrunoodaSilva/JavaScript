function contar(){
    var ini = document.querySelector('#txtin')
    var fim = document.querySelector('#txtfim')
    var passo = document.querySelector('#txtpas')
    var res = document.querySelector('#res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Esta faltando os dados!')
    } else{
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if ( p <= 0 ){
            window.alert('Passo invalido! Considere Passo 1')
            p = 1
        }
        if(i < f){
            //Contagem crecente
            for(var c = i ; c <= f ; c += p){
            res.innerHTML += `${c} \u{1F91C}`
        }
        res.innerHTML += `\u{1f3c1}`
        } else {
            // contagem decrecente
            for(var c = i ; c >= f ; c -= p  ){
                res.innerHTML += `${c} \u{1F91C}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}