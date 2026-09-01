import { useEffect, useState } from "react";

function EmployeeStudents() {

  const [registrations, setRegistrations] = useState([]);

  const employee = JSON.parse(localStorage.getItem("employee"));

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {

    try {

      const response = await fetch(
        `http://localhost:8080/api/employee-course-registrations/employee/${employee.employeeId}/students`
      );

      const data = await response.json();

      setRegistrations(data);

    } catch (error) {

      console.error(error);
      alert("Failed to load students");

    }

  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Students Registered For My Courses
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">

          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {registrations.length === 0 ? (

            <tr>
              <td colSpan="5" className="text-center">
                No students found.
              </td>
            </tr>

          ) : (

            registrations.map((registration) => (

              <tr key={registration.registrationId}>

                <td>{registration.student.studentId}</td>

                <td>{registration.student.studentName}</td>

                <td>{registration.student.email}</td>

                <td>{registration.course.courseName}</td>

                <td>
                  {registration.approved ? (
                    <span className="badge bg-success">
                      Approved
                    </span>
                  ) : (
                    <span className="badge bg-warning text-dark">
                      Pending
                    </span>
                  )}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeStudents;