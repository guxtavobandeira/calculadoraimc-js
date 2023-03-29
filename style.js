function calcular(){
    var usuario=document.getElementById("nome").value
    var altura=(document.getElementById("alt").value)/100
    var peso=document.getElementById("pes").value

    var imc=peso/(altura**2)
    var faixa=""

    if(imc<18.5){
        faixa = "abaixo do peso normal"
    }else if(imc<24.9){
        faixa = "com peso normal"
    }else if(imc<29.9){
        faixa = "com excesso de peso"
    }else if(imc<34.9){
        faixa = "com obesidade classe I"
    }else if(imc<39.9){
        faixa = "com obesidade classe II"
    }else if(imc<40.0){
        faixa = "com obesidade classe III"
    }
    resultado.textContent = `${usuario}, seu IMC é ${imc.toFixed(2)}, você está ${faixa}`
}
