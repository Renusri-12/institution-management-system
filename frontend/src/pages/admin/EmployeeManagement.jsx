import { useState } from "react";

function EmployeeManagement() {

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/admin/employees/pending"
      );

      const data = await response.json();

      setEmployees(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load employees");

    }

  };

  const approveEmployee = async (employeeId) => {

    try {

      await fetch(
        `http://localhost:8080/api/admin/employees/${employeeId}/approve`,
        {
          method: "PUT",
        }
      );

      alert("Employee approved successfully");

      loadEmployees();

    } catch (error) {

      console.error(error);

      alert("Approval failed");

    }

  };

  return (

    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#f4f7fc",
        minHeight: "100vh",
      }}
    >

      <div className="container">

        <div className="text-center mb-5">

          <h1 className="fw-bold text-success">
            👨‍🏫 Employee Management
          </h1>

          <p className="text-muted">
            Approve and manage employee registrations
          </p>

        </div>

        <div
          className="card border-0 shadow-lg"
          style={{ borderRadius: "20px" }}
        >

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3>Pending Employees</h3>

              <button
                className="btn btn-success"
                onClick={loadEmployees}
              >
                🔄 Load Employees
              </button>

            </div>

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-dark">

                  <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Phone</th>

                    <th>Specialization</th>

                    <th>Status</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {employees.length === 0 ? (

                    <tr>

                      <td
                        colSpan="7"
                        className="text-center text-muted"
                      >
                        No pending employees found.
                      </td>

                    </tr>

                  ) : (

                    employees.map((employee) => (

                      <tr key={employee.employeeId}>

                        <td>{employee.employeeId}</td>

                        <td>{employee.employeeName}</td>

                        <td>{employee.email}</td>

                        <td>{employee.phone}</td>

                        <td>{employee.specialization}</td>

                        <td>
                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>
                        </td>

                        <td>

                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              approveEmployee(employee.employeeId)
                            }
                          >
                            ✔ Approve
                          </button>

                        </td>

                      </tr>

                    ))

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default EmployeeManagement;