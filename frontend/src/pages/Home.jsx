import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container mt-5 text-center">

        <h1>Institution Management System</h1>

        <p className="mt-3">
          Welcome to our Institution Management System
        </p>

        <div className="mt-5">

          <h3>Student</h3>

          <Link
            to="/student/register"
            className="btn btn-success m-2"
          >
            Register
          </Link>

          <Link
            to="/student/login"
            className="btn btn-primary m-2"
          >
            Login
          </Link>

          <hr />

          <h3>Employee</h3>

          <Link
            to="/employee/register"
            className="btn btn-success m-2"
          >
            Register
          </Link>

          <Link
            to="/employee/login"
            className="btn btn-primary m-2"
          >
            Login
          </Link>

          <hr />

          <h3>Admin</h3>

          <Link
            to="/admin/login"
            className="btn btn-dark m-2"
          >
            Login
          </Link>

        </div>

      </div>
    </>
  );
}

export default Home;