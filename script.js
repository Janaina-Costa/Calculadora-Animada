

//inserindo os numeros e operadores no display
function insert(num){
    const limite =  document.getElementById('result').value

    if(limite.length <= 15){
        document.getElementById('result').value = document.getElementById('result').value + num
    }
}

//calculando
function calcular(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
    
}

//limpando display
function clearDisplay(){
    document.getElementById('result').value =''
}

//Colocando positivo e negativo
function maisMenos(){
    document.getElementById('result').value = document.getElementById('result').value * -1
    
}

//Deletendo numreo a numero
function deleteNum(){
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1)
}
//Percentual
function percent(){
  const displayValor = document.getElementById('result').value
  let conversorValor = Number(displayValor)
  document.getElementById('result').value = conversorValor/100
}

const texto = `Vamos Calcular???\u{1F913} \u{1F916}....... `
let index = 5000

function writeTexto(){
    document.getElementById('texto').innerText = texto.slice(0, index)
    index++

    if(index > texto.length -1){
        index = 0
    }
}
setInterval(writeTexto, 150)
