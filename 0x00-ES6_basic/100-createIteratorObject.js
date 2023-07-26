export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  return {
    *[Symbol.iterator]() {
      for (const department in allEmployees) {
        const employeesInDepartment = allEmployees[department];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    }
  };
}
