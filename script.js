//Ejercicios de elevación

//1.                              

var hello;
console.log(hello);  // hello es undefined
hello = 'world';

//2.
function test() {
    var needle;
    console.log(needle); // Se ejecuta dentro de la función test
    needle = 'magnet';
}
test(); // magnet


//3.

function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);// 'super cool' (La función print() no es llamada)


//4.
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();//'chicken''half-chicken'



//5.
mean(); // TypeError: mean is not a function
console.log(food); // ReferenceError: no declarada aún
mean = function() {
    var food;// declaración de la variable elevadas dentro de la función
    food = "chicken";
    console.log(food); // 'chicken'
    food = "fish";
    console.log(food); // 'fish'
}
console.log(food); // undefined o indefinido, no declarada
//Error al intentar ejecutar mean() como función porque se define después como una función expresada.

//6.
console.log(genre); // undefined
genre = "disco";
function rewind() {
    var genre = "rock";
    console.log(genre); // 'rock'
    genre = "r&b";
    console.log(genre); // 'r&b'
}
rewind();
console.log(genre); // 'disco'



//7.
dojo = "san jose";
console.log(dojo); // 'san jose'
function learn() {
    var dojo = "seattle";
    console.log(dojo); // 'seattle'
    dojo = "burbank";
    console.log(dojo); // 'burbank'
}
learn();
console.log(dojo); // 'san jose'


//8.
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.status = "closed for now"; // Cambiamos la propiedad en lugar de reasignar el objeto
    }
    return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
