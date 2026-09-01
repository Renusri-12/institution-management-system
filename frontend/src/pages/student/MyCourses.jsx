import { useEffect, useState } from "react";

function MyCourses() {

  const [registrations, setRegistrations] = useState([]);

  const student = JSON.parse(localStorage.getItem("student"));

  useEffect(() => {
    loadMyCourses();
  }, []);

  const loadMyCourses = async () => {

    try {

      const response = await fetch(
        `http://localhost:8080/api/student-course-registrations/student/${student.studentId}`
      );

      const data = await response.json();

      setRegistrations(data);

    } catch (error) {

      console.error(error);
      alert("Failed to load courses");

    }

  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        My Courses
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">

          <tr>
            <th>Course</th>
            <th>Description</th>
            <th>Fee</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {registrations.map((registration) => (

            <tr key={registration.registrationId}>

              <td>
                {registration.course.courseName}
              </td>

              <td>
                {registration.course.description}
              </td>

              <td>
                ₹ {registration.course.fee}
              </td>

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

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MyCourses;