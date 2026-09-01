import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Student
import StudentLogin from "./pages/student/StudentLogin";
import StudentRegister from "./pages/student/StudentRegister";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentCourses from "./pages/student/StudentCourses";
import MyCourses from "./pages/student/MyCourses";
import StudentProfile from "./pages/student/StudentProfile";

// Employee
import EmployeeLogin from "./pages/employee/EmployeeLogin";
import EmployeeRegister from "./pages/employee/EmployeeRegister";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import EmployeeCourses from "./pages/employee/EmployeeCourses";
import EmployeeMyCourses from "./pages/employee/EmployeeMyCourses";
import EmployeeStudents from "./pages/employee/EmployeeStudents";
import EmployeeProfile from "./pages/employee/EmployeeProfile";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentManagement from "./pages/admin/StudentManagement";
import EmployeeManagement from "./pages/admin/EmployeeManagement";
import CourseManagement from "./pages/admin/CourseManagement";
import CourseRegistrations from "./pages/admin/CourseRegistrations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/my-courses" element={<MyCourses />} />

       <Route path="/employee/login" element={<EmployeeLogin />} />
       <Route path="/employee/register" element={<EmployeeRegister />} />
       <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
       <Route path="/employee/courses" element={<EmployeeCourses />} />
       <Route path="/employee/my-courses" element={<EmployeeMyCourses />} />
       <Route path="/employee/students" element={<EmployeeStudents />} />
       <Route path="/employee/profile" element={<EmployeeProfile />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentManagement />} />
        <Route path="/admin/employees" element={<EmployeeManagement />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/registrations" element={<CourseRegistrations />} />
        <Route path="/student/profile" element={<StudentProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;