function contas(id){
    var inside = document.getElementById(id).innerText;
    console.log(inside);
}
function answer() {
    var results = document.getElementsByClassName('result');
    var expression = ""; // Construa aqui a expressão a partir dos elementos clicados

    // Lógica para calcular a expressão (dependendo da sua implementação)

    // Exiba o resultado
    for (var i = 0; i < results.length; i++) {
        results[i].innerText = resultadoCalculado;
    }
}

function clear(){
    var results = document.getElementsByClassName('result')

    for (var i = 0; i < results.length; i++) {
        results[i].innerText = "";
    }
}