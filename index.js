// Write your solution in this file!
const employee = {
    name: "Jumi",
    streetAddress: "1234 ABC street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newList = {...employee};
    newList[key] = value;
    return newList
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newList = {...employee};
    delete newList[key];
    return newList
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee
}