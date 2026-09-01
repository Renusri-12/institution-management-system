import { Link, useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  const logout = () => {
    localStorage.removeItem("student");
    navigate("/student/login");
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
            <h1 className="fw-bold text-primary">
              👨‍🎓 Student Dashboard
            </h1>

            <h5 className="text-secondary">
              Welcome, {student?.studentName}
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

          <div className="col-lg-4 col-md-6">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "18px" }}
            >
              <div className="card-body text-center">

                <div style={{ fontSize: "55px" }}>
                  📚
                </div>

                <h3 className="mt-3">
                  Available Courses
                </h3>

                <p className="text-muted">
                  Explore all available courses.
                </p>

                <Link
                  to="/student/courses"
                  className="btn btn-primary px-4"
                >
                  View Courses
                </Link>

              </div>
            </div>
          </div>

          {/* My Courses */}

          <div className="col-lg-4 col-md-6">
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
                  View your registered courses.
                </p>

                <Link
                  to="/student/my-courses"
                  className="btn btn-success px-4"
                >
                  My Courses
                </Link>

              </div>
            </div>
          </div>

          {/* Profile */}

          <div className="col-lg-4 col-md-6">
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
                  View your profile information.
                </p>

                <Link
                  to="/student/profile"
                  className="btn btn-secondary px-4"
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

export default StudentDashboard;