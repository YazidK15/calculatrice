// Vérifie que le document HTML est fini de chargé
document.addEventListener('DOMContentLoaded', function(event){

// Constantes
    const result = document.getElementById('result');
    const caractersToAdd = document.getElementsByClassName('caracterToAdd');
    const resetButton = document.getElementById('reset');
    const send = document.getElementById('send')
    const deleteButton = document.getElementById('delete')
    let reg = new RegExp("^[\\d\\W]+$");


// Events Listener
    Array.prototype.forEach.call(caractersToAdd, caracter => {
        caracter.addEventListener('click', element => {
            addCaracter(caracter.innerHTML);
        })
    })

    resetButton.addEventListener('click', element => {
        reset();
    })

    send.addEventListener('click', element => {
        calculate();
    })

    deleteButton.addEventListener('click', element => {
        deleteLastCaracter();
    })


    document.addEventListener('keyup', key => {
        switch (key.key) {
            case "Enter":
                calculate()
                break;
            case "Delete" : 
                reset()
                break;
            case "Backspace":
                deleteLastCaracter();
                break;
            default:
                if (reg.test(key.key)) {
                    addCaracter(key.key)
                }
                break;
        }
    })

// Fonctions
    function addCaracter(newCaracter){
        result.value += newCaracter;
    }

    function reset() {
        result.value = ""; 
    }

    function calculate() {
        result.value = eval(result.value);
    }

    function deleteLastCaracter (){
        result.value = result.value.slice(0, -1)
    }
})
