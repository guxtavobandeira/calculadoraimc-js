function calcular(){
    var usuario=document.getElementById("nome").value
    var altura=(document.getElementById("alt").value)/100
    var peso=document.getElementById("pes").value

    var imc=peso/(altura**2)
    var faixa=""

    if(imc<18.5){
        faixa=`${usuario}`+", seu IMC é "+`${imc}`+ ", você está abaixo do peso normal"
    }else if(imc<24.9){
        faixa=`${usuario}`+", seu IMC é "+`${imc}`+ ", você está com o peso normal"
    }else if(imc<29.9){
        faixa=`${usuario}`+", seu IMC é "+`${imc}`+ ", você está com excesso de peso"
    }else if(imc<34.9){
        faixa=`${usuario}`+", seu IMC é "+`${imc}`+ ", você está com obesidade classe I"
    }else if(imc<39.9){
        faixa=`${usuario}`+", seu IMC é "+`${imc}`+ ", você está com obesidade classe II"
    }else if(imc<40.0){
        faixa=`${usuario}`+", seu IMC é "+`${imc}`+ ", você está com obesidade classe III"
    }

    document.getElementById("resultado").innerText=faixa

}