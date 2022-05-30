function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')


    if(ini.value.length == 0 ||fim.value.length == 0 ||pas.value.length == 0){
        alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p<=0){
            alert('Passo invalido! Considere PASSO 1')
            p = 1
        }

        if(i<f){
            for(let c =i; c <= f; c+= p){
                res.innerHTML += (`${c} \u{1F449}`)
            }
        }else{
            //contagem regressiva
            for(let qualqueNome = i; qualqueNome >= f; qualqueNome -=p){
                res.innerHTML += `${qualqueNome} \u{1F449}`
            }        
          
     }
     res.innerHTML += `\u{1F3c1}`
    }
}