import { Link, useNavigate } from "react-router-dom";

function EmployeeDashboard() {

  const navigate = useNavigate();

  const employee = JSON.parse(localStorage.getItem("employee"));

  const logout = () => {
    localStorage.removeItem("employee");
    navigate("/employee/login");
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

        <div className="d-flex justify-content-between align-items-center mb-5">

          <div>
            <h1 className="fw-bold text-success">
              👨‍🏫 Employee Dashboard
            </h1>

            <h5 className="text-secondary">
              Welcome, {employee?.employeeName}
            </h5>
          </div>

          <button
            className="btn btn-danger px-4"
            onClick={logout}
          >
            🚪 Logout
          </button>

        </div>

        <div className="row g-4">

          {/* Available Courses */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "18px" }}
            >
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>
                  📚
                </div>

                <h3 className="mt-3">
                  Courses
                </h3>

                <p className="text-muted">
                  View all available courses.
                </p>

                <Link
                  to="/employee/courses"
                  className="btn btn-primary"
                >
                  View Courses
                </Link>

              </div>
            </div>
          </div>

          {/* My Courses */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "18px" }}
            >
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>
                  📖
                </div>

                <h3 className="mt-3">
                  My Courses
                </h3>

                <p className="text-muted">
                  Courses you registered for.
                </p>

                <Link
                  to="/employee/my-courses"
                  className="btn btn-success"
                >
                  My Courses
                </Link>

              </div>
            </div>
          </div>

          {/* Students */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "18px" }}
            >
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>
                  👨‍🎓
                </div>

                <h3 className="mt-3">
                  Students
                </h3>

                <p className="text-muted">
                  View students enrolled in your courses.
                </p>

                <Link
                  to="/employee/students"
                  className="btn btn-warning"
                >
                  View Students
                </Link>

              </div>
            </div>
          </div>

          {/* Profile */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "18px" }}
            >
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>
                  👤
                </div>

                <h3 className="mt-3">
                  My Profile
                </h3>

                <p className="text-muted">
                  View your profile details.
                </p>

                <Link
                  to="/employee/profile"
                  className="btn btn-secondary"
                >
                  View Profile
                </Link>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default EmployeeDashboard;