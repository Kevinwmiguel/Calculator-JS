function contas(value) {
    var result = document.querySelector('.result');
    result.innerText += value;
}

function answer() {
    var result = document.querySelector('.result');
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = 'Erro';
    }
}

function clearResult() {
    var result = document.querySelector('.result');
    result.innerText = '';
}

var keyPressed = {};

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        answer();
    } else if (event.key === " ") {
        clearResult();
    } else if (event.key === "Backspace") {
        handleBackspace();
    }
    else if ((event.key < 'a' || event.key > 'z')  && !keyPressed[event.key]) {
        if (event.key < 'A' || event.key > 'Z'){
            contas(event.key);
            keyPressed[event.key] = true;
        }   
    }
    
});

function handleBackspace() {
    // Adicione sua lógica para tratar a tecla "Backspace" aqui
    // Por exemplo, você pode remover o último caractere da expressão no resultado
    var result = document.querySelector('.result');
    var currentExpression = result.innerText;
    
    if (currentExpression.length > 0) {
      result.innerText = currentExpression.slice(0, -1);
    }
}

document.addEventListener("keyup", function(event) {
    if (event.key) {
        keyPressed[event.key] = false;
    }
});




