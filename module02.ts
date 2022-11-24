let x: number;   //* Explicitly declares x as a number type
let y = 1;
let z;     //* Declares z without initializing it

enum ContractStatus {
    Permanent, 
    Temp,
    Apprentice
}

const employeeStatus: ContractStatus = ContractStatus.Apprentice
console.log(employeeStatus)

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = { name: 'hola'} // OK

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error

let randomValue2: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue2.name);  // Error: Object is of type unknown
randomValue2();                  // Error: Object is of type unknown

randomValue2.toUpperCase();      // Error: Object is of type unknown
randomValue2[0]; // Error: Object is of type unknown

(randomValue2 as string).toUpperCase();      // NO ERROR
(<string>randomValue2).toUpperCase();      // NO ERROR


//NO ERROR and BETTER CONTROL WHEN IT IS EXECUTED
if (typeof randomValue === "string") {
    randomValue.toUpperCase()
}

