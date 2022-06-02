//CONTADOR
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
//TABUADA 
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('sel-tab')

    if (num.value.length == 0){
        window.alert ('Por favor digite um número')

    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }

}
//CALCULADORA
function insert(num){

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;    

}
function clean(){

    document.getElementById('resultado').innerHTML = "";
}
function back(){

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function calcular(){

    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = 'nada para calular'
    }


}
//CONJUTOS
function escolha(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('sel-tab')

}
