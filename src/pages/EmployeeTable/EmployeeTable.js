import employees from "../../Json_Data/employee.json";
import './EmployeeTable.css';
const EmployeeTable = () => {
  return (
    <div className="employeedata">
      <table >
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Rank</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} onClick={() => tablehandleRowClick(emp)}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp?.Details?.rank}</td>
              <td>{emp?.Details?.credit} €</td>
              <td>{emp?.Details?.debit} €</td>
              <td>{emp?.Details?.credit - emp?.Details?.debit} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


function tablehandleRowClick(emp) {
  alert(`Employee Details:\n\nID: ${emp.id}\nName: ${emp.name}\nPosition: ${emp.position}\nRank: ${emp.rank}\nCredit: ${emp.credit}\nDebit: ${emp.debit}`);
}

export default EmployeeTable;

