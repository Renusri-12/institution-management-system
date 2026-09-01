import { useState } from "react";

function StudentManagement() {

  const [students, setStudents] = useState([]);

  const loadStudents = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/admin/students/pending"
      );

      const data = await response.json();

      setStudents(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load students");

    }

  };

  const approveStudent = async (studentId) => {

    try {

      await fetch(
        `http://localhost:8080/api/admin/students/${studentId}/approve`,
        {
          method: "PUT",
        }
      );

      alert("Student approved successfully");

      loadStudents();

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

          <h1 className="fw-bold text-primary">
            👨‍🎓 Student Management
          </h1>

          <p className="text-muted">
            Approve and manage student registrations
          </p>

        </div>

        <div
          className="card border-0 shadow-lg"
          style={{ borderRadius: "20px" }}
        >

          <div className="card-body">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3>Pending Students</h3>

              <button
                className="btn btn-primary"
                onClick={loadStudents}
              >
                🔄 Load Students
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

                    <th>Status</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {students.length === 0 ? (

                    <tr>

                      <td
                        colSpan="6"
                        className="text-center text-muted"
                      >
                        No pending students found.
                      </td>

                    </tr>

                  ) : (

                    students.map((student) => (

                      <tr key={student.studentId}>

                        <td>{student.studentId}</td>

                        <td>{student.studentName}</td>

                        <td>{student.email}</td>

                        <td>{student.phone}</td>

                        <td>
                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>
                        </td>

                        <td>

                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              approveStudent(student.studentId)
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

export default StudentManagement;