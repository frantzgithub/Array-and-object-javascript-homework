
let stock = ["iphone", "samsung"];
let newStock = [...stock];
newStock.push("Lg");
console.log(stock);
console.log(newStock);

let employee = {
    name: "berlin",
    age: 20,
}
let newEmployee = {...employee};
newEmployee.job = "programmer";
console.log(employee);
console.log(newEmployee);