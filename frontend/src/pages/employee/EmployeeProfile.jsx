import { useNavigate } from "react-router-dom";

function EmployeeProfile() {

  const navigate = useNavigate();

  const employee = JSON.parse(localStorage.getItem("employee"));

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
            👨‍🏫 Employee Profile
          </h1>

          <p className="text-muted">
            Your personal information
          </p>

        </div>

        <div
          className="card border-0 shadow-lg mx-auto"
          style={{
            maxWidth: "700px",
            borderRadius: "20px",
          }}
        >

          <div className="card-body p-5">

            <div className="text-center mb-4">

              <div style={{ fontSize: "70px" }}>
                👨‍🏫
              </div>

              <h3>{employee?.employeeName}</h3>

            </div>

            <table className="table table-bordered table-striped">

              <tbody>

                <tr>
                  <th style={{ width: "35%" }}>Employee Name</th>
                  <td>{employee?.employeeName}</td>
                </tr>

                <tr>
                  <th>Email</th>
                  <td>{employee?.email}</td>
                </tr>

                <tr>
                  <th>Phone</th>
                  <td>{employee?.phone}</td>
                </tr>

                <tr>
                  <th>Specialization</th>
                  <td>{employee?.specialization}</td>
                </tr>

              </tbody>

            </table>

            <div className="text-center mt-4">

              <button
                className="btn btn-success px-4"
                onClick={() => navigate("/employee/dashboard")}
              >
                ← Back to Dashboard
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default EmployeeProfile;