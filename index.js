// Write your solution in this file!
const employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee, [key]: value };
    return newEmployee;
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const employeeClone = { ...employee };
  
    delete employeeClone[key];
  
    return employeeClone
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}