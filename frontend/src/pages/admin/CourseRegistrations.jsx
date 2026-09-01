import { useState } from "react";

function CourseRegistrations() {

  const [studentRegistrations, setStudentRegistrations] = useState([]);
  const [employeeRegistrations, setEmployeeRegistrations] = useState([]);

  // ================= STUDENT =================

  const loadStudentRegistrations = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/student-course-registrations/pending"
      );

      const data = await response.json();

      setStudentRegistrations(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load student registrations");

    }

  };

  const approveStudentRegistration = async (registrationId) => {

    try {

      await fetch(
        `http://localhost:8080/api/student-course-registrations/${registrationId}/approve`,
        {
          method: "PUT",
        }
      );

      alert("Student course registration approved.");

      loadStudentRegistrations();

    } catch (error) {

      console.error(error);

      alert("Approval failed");

    }

  };

  // ================= EMPLOYEE =================

  const loadEmployeeRegistrations = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/employee-course-registrations/pending"
      );

      const data = await response.json();

      setEmployeeRegistrations(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load employee registrations");

    }

  };

  const approveEmployeeRegistration = async (registrationId) => {

    try {

      await fetch(
        `http://localhost:8080/api/employee-course-registrations/${registrationId}/approve`,
        {
          method: "PUT",
        }
      );

      alert("Employee course registration approved.");

      loadEmployeeRegistrations();

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

          <h1 className="fw-bold text-warning">
            📋 Course Registrations
          </h1>

          <p className="text-muted">
            Approve Student and Employee Course Registrations
          </p>

        </div>

        {/* Student Registrations */}

        <div
          className="card border-0 shadow-lg mb-5"
          style={{ borderRadius: "20px" }}
        >

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3>👨‍🎓 Student Registrations</h3>

              <button
                className="btn btn-primary"
                onClick={loadStudentRegistrations}
              >
                🔄 Load Students
              </button>

            </div>

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-dark">

                  <tr>

                    <th>Student</th>

                    <th>Course</th>

                    <th>Status</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {studentRegistrations.length === 0 ? (

                    <tr>

                      <td
                        colSpan="4"
                        className="text-center text-muted"
                      >
                        No pending student registrations.
                      </td>

                    </tr>

                  ) : (

                    studentRegistrations.map((registration) => (

                      <tr key={registration.registrationId}>

                        <td>{registration.student.studentName}</td>

                        <td>{registration.course.courseName}</td>

                        <td>

                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>

                        </td>

                        <td>

                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              approveStudentRegistration(
                                registration.registrationId
                              )
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

        {/* Employee Registrations */}

        <div
          className="card border-0 shadow-lg"
          style={{ borderRadius: "20px" }}
        >

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3>👨‍🏫 Employee Registrations</h3>

              <button
                className="btn btn-success"
                onClick={loadEmployeeRegistrations}
              >
                🔄 Load Employees
              </button>

            </div>

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead className="table-dark">

                  <tr>

                    <th>Employee</th>

                    <th>Course</th>

                    <th>Status</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {employeeRegistrations.length === 0 ? (

                    <tr>

                      <td
                        colSpan="4"
                        className="text-center text-muted"
                      >
                        No pending employee registrations.
                      </td>

                    </tr>

                  ) : (

                    employeeRegistrations.map((registration) => (

                      <tr key={registration.registrationId}>

                        <td>{registration.employee.employeeName}</td>

                        <td>{registration.course.courseName}</td>

                        <td>

                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>

                        </td>

                        <td>

                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              approveEmployeeRegistration(
                                registration.registrationId
                              )
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

export default CourseRegistrations;