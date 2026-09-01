import { useState } from "react";

function EmployeeRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:8080/api/employees/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeName,
          email,
          password,
          phone,
          specialization,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    alert("Employee Registered Successfully!\nWaiting for Admin Approval.");

    setEmployeeName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setSpecialization("");

  } catch (error) {

    console.error(error);
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
                Employee Registration
              </h2>

              <form onSubmit={handleRegister}>

                <div className="mb-3">
                  <label className="form-label">
                    Employee Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={employeeName}
                    onChange={(e) =>
                      setEmployeeName(e.target.value)
                    }
                    placeholder="Enter your name"
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
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
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Specialization
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={specialization}
                    onChange={(e) =>
                      setSpecialization(e.target.value)
                    }
                    placeholder="Example: Java, Networking"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Register
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmployeeRegister;