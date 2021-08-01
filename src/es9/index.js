//Spread Operator
const obj = {
    name: 'hanna',
    age: 18,
    country: 'MX'
};

let { name, ...all } = obj; 
console.log(name, all);

//Porpagation Properties
const obj = {
    name: 'hanna',
    age: '18'
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello World'), 1000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizado'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-11-11');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);



const namePromise = () => {
    return new Promise((resolve, reject) => {
        true
        try {
            resolve('Hello');
        } catch (error) {
            reject(new Error('Result Error'));
        };
    });
  };

    namePromise()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))