import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🎓 Institution Management System
        </Link>

        <div className="ms-auto">
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/student/login">
            Student
          </Link>

          <Link className="btn btn-outline-light me-2" to="/employee/login">
            Employee
          </Link>

          <Link className="btn btn-warning" to="/admin/login">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;