import { useEffect, useState } from "react";

function EmployeeCourses() {

  const [courses, setCourses] = useState([]);

  const employee = JSON.parse(localStorage.getItem("employee"));

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/courses"
      );

      const data = await response.json();

      setCourses(data);

    } catch (error) {

      console.error(error);
      alert("Failed to load courses");

    }

  };

  const registerCourse = async (courseId) => {

    try {

      const response = await fetch(
        `http://localhost:8080/api/employee-course-registrations/register?employeeId=${employee.employeeId}&courseId=${courseId}`,
        {
          method: "POST"
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Course registered successfully.\nWaiting for Admin Approval.");

    } catch (error) {

      console.error(error);
      alert(error.message);

    }

  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Available Courses
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Fee</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {courses.map((course) => (

            <tr key={course.courseId}>

              <td>{course.courseId}</td>
              <td>{course.courseName}</td>
              <td>{course.description}</td>
              <td>₹ {course.fee}</td>

              <td>

                <button
                  className="btn btn-primary"
                  onClick={() => registerCourse(course.courseId)}
                >
                  Register
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeCourses;