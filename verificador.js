function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){ 
       alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}` 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        img.style.width = '250px' // Defina a largura desejada
        img.style.height = 'auto'  // Defina a altura como automática para manter a proporção

        if (fsex[0].checked){
            gênero = 'Homem'
        if (idade >= 0 && idade <10){
            // Criança
            img.setAttribute('src', 'bebeh.png')
        } else if (idade < 21){
            // jovem
            img.setAttribute('src', 'jovemh.png')
        } else if (idade < 50){
            // adulto
            img.setAttribute('src', 'homem.png')
        } else{
            // idoso
            img.setAttribute('src', 'idosoh.png')
        }

    }
        else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <10){
                // Criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else{
                // 
                img.setAttribute('src', 'idosam.png')
            }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    } 
   
}
