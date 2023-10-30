function pythagorova() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const additionResult = Math.sqrt( inputFirstNumber * inputFirstNumber + inputSecondNumber * inputSecondNumber ) 
    
    document.getElementById("result").value = additionResult.toFixed(1)

    
    
}

function ifFunction() {

    const inputNumber = parseInt(document.getElementById("inputNumber").value)

    if  (inputNumber > 0 && inputNumber <= 10){
        console.log("větší než 0")
    }  else if ( inputNumber > 10 && inputNumber <= 20){
        console.log("větší než 10")
    }  else if( inputNumber > 20){
        console.log("větší než 20")
    }  else if( inputNumber < 0){
        console.log("záporné číslo")
    }
    
}

function ifAgeFunction () {
    
    const inputAge = parseInt(document.getElementById("inputAge").value)

    if (inputAge < 18){
        document.getElementById("outputAge").value = "Mladý uživatel"
    } else if (inputAge >= 18 && inputAge < 200){
        document.getElementById("outputAge").value = "Dospělý uživatel"

        } else if( inputAge > 18 < 0) {
            

    } else if (inputAge <= 2005) {
    document.getElementById("outputAge").value = "Jsi Dospělý"

    } else if (inputAge > 2005){
        document.getElementById("outputAge").value = "Jsi moc Mladý"
    }
    

  



}
