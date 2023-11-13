
const result = []

function weightScale(){

    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value)

    BMI = weight/((height*height)).toFixed(1)

     if(weight <= 0){
        document.getElementById("result").innerHTML = "Záporná hodnota"
        result.push("Záporná hodnota")
    }else if(height <= 0){
        document.getElementById("result").innerHTML = "Záporná hodnota"
        result.push("Záporná hodnota")
    }else if(weight > 0 && height > 0){
        if( BMI < 18.5){
            document.getElementById("result").innerHTML = "Podváha"
            result.push("Podváha")
        }else if( BMI <= 18.5 && BMI < 25){
            document.getElementById("result").innerHTML = "Normální Váha"
            result.push("Normální váha")
        }else if( BMI <= 25 && BMI < 30){
            document.getElementById("result").innerHTML = "Nadváha"
            result.push("Nadváha")
        }else if(BMI >= 30){
            document.getElementById("result").innerHTML = "Obezita"
            result.push("Obezita")
        }
    }else if(No = "Ne"){
        result.splice(0);
    }


    console.log(result);

    document.getElementById("results").innerHTML = result


}