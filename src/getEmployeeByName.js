const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const findEmployee = (employeeNameList) => (!employeeNameList
    ? {} : employees.find(({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName));
  return findEmployee(employeeName);
}

module.exports = getEmployeeByName;
