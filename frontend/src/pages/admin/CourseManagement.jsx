import { useState } from "react";

function CourseManagement() {

  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("");

  const [courses, setCourses] = useState([]);

  // ================= ADD COURSE =================

  const handleAddCourse = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:8080/api/courses",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            courseName: courseName,
            description: description,
            fee: Number(fee),
          }),
        }
      );

      if (!response.ok) {

        const errorData = await response.text();

        console.error("Add Course Error:", errorData);

        alert("Failed to add course");

        return;
      }

      const data = await response.json();

      console.log("Course Added:", data);

      alert("Course Added Successfully!");

      // Clear form
      setCourseName("");
      setDescription("");
      setFee("");

      // Refresh course list
      loadCourses();

    } catch (error) {

      console.error("Error adding course:", error);

      alert("Failed to add course");

    }

  };


  // ================= LOAD COURSES =================

  const loadCourses = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/courses"
      );

      if (!response.ok) {

        throw new Error("Failed to load courses");

      }

      const data = await response.json();

      console.log("Loaded Courses:", data);

      setCourses(data);

    } catch (error) {

      console.error("Error loading courses:", error);

      alert("Failed to load courses");

    }

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


        {/* ================= PAGE HEADER ================= */}

        <div className="text-center mb-5">

          <h1 className="fw-bold text-dark">
            📚 Course Management
          </h1>

          <p className="text-muted">
            Create and manage institution courses
          </p>

        </div>


        <div className="row g-4">


          {/* ================= ADD COURSE ================= */}

          <div className="col-lg-5">

            <div
              className="card border-0 shadow-lg h-100"
              style={{
                borderRadius: "20px",
              }}
            >

              <div className="card-body p-4">


                <h3 className="mb-4 text-center">
                  ➕ Add New Course
                </h3>


                <form onSubmit={handleAddCourse}>


                  {/* Course Name */}

                  <div className="mb-3">

                    <label className="form-label fw-bold">
                      Course Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={courseName}
                      onChange={(e) =>
                        setCourseName(e.target.value)
                      }
                      placeholder="Enter course name"
                      required
                    />

                  </div>


                  {/* Description */}

                  <div className="mb-3">

                    <label className="form-label fw-bold">
                      Description
                    </label>

                    <textarea
                      rows="4"
                      className="form-control"
                      value={description}
                      onChange={(e) =>
                        setDescription(e.target.value)
                      }
                      placeholder="Enter course description"
                      required
                    />

                  </div>


                  {/* Fee */}

                  <div className="mb-4">

                    <label className="form-label fw-bold">
                      Course Fee
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={fee}
                      onChange={(e) =>
                        setFee(e.target.value)
                      }
                      placeholder="Enter fee"
                      min="0"
                      required
                    />

                  </div>


                  {/* Add Button */}

                  <button
                    className="btn btn-dark w-100"
                    type="submit"
                  >
                    ➕ Add Course
                  </button>


                </form>


              </div>

            </div>

          </div>


          {/* ================= COURSE LIST ================= */}

          <div className="col-lg-7">


            <div
              className="card border-0 shadow-lg h-100"
              style={{
                borderRadius: "20px",
              }}
            >


              <div className="card-body p-4">


                {/* Course List Header */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <h3>
                    📖 Available Courses
                  </h3>


                  <button
                    className="btn btn-primary"
                    onClick={loadCourses}
                  >
                    🔄 Load Courses
                  </button>

                </div>


                {/* Course Table */}

                <div className="table-responsive">

                  <table className="table table-hover">


                    <thead className="table-dark">

                      <tr>

                        <th>
                          ID
                        </th>

                        <th>
                          Course
                        </th>

                        <th>
                          Description
                        </th>

                        <th>
                          Fee
                        </th>

                      </tr>

                    </thead>


                    <tbody>


                      {courses.length === 0 ? (

                        <tr>

                          <td
                            colSpan="4"
                            className="text-center text-muted py-4"
                          >
                            No courses loaded.
                          </td>

                        </tr>

                      ) : (

                        courses.map((course) => (

                          <tr
                            key={course.courseId}
                          >

                            <td>
                              {course.courseId}
                            </td>

                            <td>
                              <strong>
                                {course.courseName}
                              </strong>
                            </td>

                            <td>
                              {course.description}
                            </td>

                            <td>
                              ₹ {course.fee}
                            </td>

                          </tr>

                        ))

                      )}


                    </tbody>


                  </table>

                </div>


              </div>

            </div>

          </div>


        </div>


      </div>

    </div>

  );
}

export default CourseManagement;