import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/AdminDashboard.css";

function AdminDashboard() {

  const [studentCount, setStudentCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {

  const loadCounts = async () => {

    try {

      const studentResponse = await fetch(
        "http://localhost:8080/api/admin/students/count"
      );

      const employeeResponse = await fetch(
        "http://localhost:8080/api/admin/employees/count"
      );

      const courseResponse = await fetch(
        "http://localhost:8080/api/admin/courses/count"
      );

      const pendingResponse = await fetch(
        "http://localhost:8080/api/admin/pending/count"
      );

     const students = await studentResponse.json();
     const employees = await employeeResponse.json();
     const courses = await courseResponse.json();
     const pending = await pendingResponse.json();

     console.log("Students:", students);
     console.log("Employees:", employees);
     console.log("Courses:", courses);
     console.log("Pending:", pending);

     setStudentCount(students);
     setEmployeeCount(employees);
     setCourseCount(courses);
     setPendingCount(pending);

    } catch (error) {

      console.error(error);

      alert("Failed to load dashboard statistics.");

    }

  };

  loadCounts();

}, []);
  return (
    <div
      className="admin-dashboard"
    >
      <div className="container">

        <div className="text-center mb-5">

          <h1 className="fw-bold text-primary">
            👨‍💼 Admin Dashboard
          </h1>

          <p className="text-muted">
            Manage Students, Employees, Courses and Registrations
          </p>

        </div>

        {/* Dashboard Statistics */}

        <div className="row mb-5">

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>👨‍🎓</h1>
                <h2>{studentCount}</h2>
                <h5>Total Students</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>👨‍🏫</h1>
                <h2>{employeeCount}</h2>
                <h5>Total Employees</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>📚</h1>
                <h2>{courseCount}</h2>
                <h5>Total Courses</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>⏳</h1>
                <h2>{pendingCount}</h2>
                <h5>Pending Approvals</h5>
              </div>
            </div>
          </div>

        </div>

        {/* Management Cards */}

        <div className="row g-4">

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "18px" }}>
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>👨‍🎓</div>

                <h3 className="mt-3">
                  Student Management
                </h3>

                <p className="text-muted">
                  Approve and manage student registrations.
                </p>

                <Link
                  to="/admin/students"
                  className="btn btn-primary px-4"
                >
                  Manage Students
                </Link>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "18px" }}>
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>👨‍🏫</div>

                <h3 className="mt-3">
                  Employee Management
                </h3>

                <p className="text-muted">
                  Approve and manage employee registrations.
                </p>

                <Link
                  to="/admin/employees"
                  className="btn btn-success px-4"
                >
                  Manage Employees
                </Link>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "18px" }}>
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>📚</div>

                <h3 className="mt-3">
                  Course Management
                </h3>

                <p className="text-muted">
                  Add, update and delete available courses.
                </p>

                <Link
                  to="/admin/courses"
                  className="btn btn-dark px-4"
                >
                  Manage Courses
                </Link>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100" style={{ borderRadius: "18px" }}>
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>✅</div>

                <h3 className="mt-3">
                  Registrations
                </h3>

                <p className="text-muted">
                  Approve student and employee course registrations.
                </p>

                <Link
                  to="/admin/registrations"
                  className="btn btn-warning px-4"
                >
                  Manage Registrations
                </Link>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;