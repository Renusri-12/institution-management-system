import { useState } from "react";
import { Link } from "react-router-dom";

function StudentRegister() {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const student = {
      studentName,
      email,
      password,
      phone
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/students/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();

      console.log("Student registered:", data);

      alert("Student registration successful!");

      setStudentName("");
      setEmail("");
      setPassword("");
      setPhone("");

    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-body">

              <h2 className="text-center mb-4">
                Student Registration
              </h2>

              <form onSubmit={handleRegister}>

                <div className="mb-3">
                  <label className="form-label">
                    Student Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={studentName}
                    onChange={(e) =>
                      setStudentName(e.target.value)
                    }
                    placeholder="Enter student name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Phone
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Register
                </button>

                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link to="/student/login">
                      Login here
                    </Link>
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentRegister;