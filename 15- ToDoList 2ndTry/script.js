var outputTodo = document.getElementById('output').value;

var inputTodo = document.getElementById('inputStudent').value;


const array = [
    "Petr",
    "Pavel",
    "Honza",
    "Pepa",
    "Rudolf",
    "Kristián",
    "Štěfan",
    "Klára",
    "Lukáš",
    "Natka",
    "Radek"
]


function todo(){

    if(outputTodo != array ){

        document.getElementById("output").innerHTML = array;

    }else if(inputTodo != ""){
        array.push(inputTodo)
    }

    

    console.log(array)
   
}