function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'criançaMM.png')
            } else if( idade < 18){
                // Adolecente
                img.setAttribute('src', 'adolecenteMM.png')
            } else if (idade <59){
                // Adulto
                img.setAttribute('src', 'homem.png')
            }else{
                img.setAttribute('src' , 'idosoo.png')
            }

        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'criançaFF.png')
            } else if(idade < 18){
                // Adolecente
                img.setAttribute('src' , 'adolecenteFF.png')
            } else if(idade < 59){
                // Adulto
                img.setAttribute('src' , 'mulherr.png')
            } else{
                img.setAttribute('src' , 'idosaa.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}