//Default Params
function newFunction(name, age, country) {
    var name = name || 'hanna';
    var age = age || 18;
    var country = country || 'MX';
    console.log(name, age, country);
}
//es6
function newFunction2(name = 'hanna', age = 18, country = 'MX') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Fernanda', '19', 'CO');
//

//Template literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//

//Multilínea
let lorem = "Quiero escribir una frase épica \n"
+ "otra frase epica."
// es6
let lorem2 = `otra frase que necesito
ahora es otra frase
`;
console.log(lorem);
console.log(lorem2)
//

let person = {  //Desestructuración
    'name': 'hanna',
    'age': 18,
    'country': 'MX'
}

console.log(person.name, person.age);

let { name } =person;
console.log(name);

//Spread Operator: Permite expandir de ciertas situaciones
                //varios elementos.
let team1 = ['Hanna', 'Fernanda', 'Santiago'];
let team2 = ['Valeria', 'Erika', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{ //Var es accesible en la consola
    var globalVar = "Global Var";
}

{ //Let solo está disponible en el bloque de codigo definido
    let globalLet = 'Global Let'; 
    console.log(globalLet);
}

console.log(globalVar);
// const puede establecer variables
const a = 'b';
// a = 'a';
console.log(a);

let name = 'hanna';
let age = 18;

// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };
console.log(obj2);

const names = [
    { name: 'Hanna', age: 18 },
    { name: 'Fernanda', age: 19 }
]
//function
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
//Arrow functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve('Hey!');
      } else {
        reject('Ups!!');
      }
    });
  }
  
  helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
  
//Clases: Maneja una sintaxis más clara para manejar objetos
    class calculator {
        constructor() { //metodo para inicializar una clase
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB =valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2, 2));

//Módulo
    import { hello } from './module';

    hello();

//Generador
    function* helloWorld() {
        if (true) {
            yield 'Hello, ';
        }
        if (true) {
            yield 'World';
        }
    };

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);