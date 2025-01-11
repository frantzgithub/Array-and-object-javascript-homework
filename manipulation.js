
let stock = ["iphone", "samsung"];
let newStock = [...stock];
newStock[1] = "motorola";
console.log(stock);
console.log(newStock);

let employee = {
    name: "berlin",
    age: 20,
}
let newEmployee = {...employee};
newEmployee.age = 25;
console.log(employee);
console.log(newEmployee);