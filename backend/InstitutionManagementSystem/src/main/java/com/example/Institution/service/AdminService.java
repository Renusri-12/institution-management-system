package com.example.institution.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Admin;
import com.example.institution.entity.Employee;
import com.example.institution.entity.Student;
import com.example.institution.repository.AdminRepository;
import com.example.institution.repository.CourseRepository;
import com.example.institution.repository.EmployeeRepository;
import com.example.institution.repository.StudentRepository;

@Service
public class AdminService {

    private final EmployeeRepository employeeRepository;
    private final StudentRepository studentRepository;
    private final AdminRepository adminRepository;
    private final CourseRepository courseRepository;

    public AdminService(
            EmployeeRepository employeeRepository,
            StudentRepository studentRepository,
            AdminRepository adminRepository,
            CourseRepository courseRepository) {

        this.employeeRepository = employeeRepository;
        this.studentRepository = studentRepository;
        this.adminRepository = adminRepository;
        this.courseRepository = courseRepository;
    }

    // ================= EMPLOYEE =================

    // Get employees waiting for approval
    public List<Employee> getPendingEmployees() {

        return employeeRepository.findByApprovedFalse();
    }

    // Approve employee
    public Employee approveEmployee(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found"));

        employee.setApproved(true);

        return employeeRepository.save(employee);
    }

    // ================= STUDENT =================

    // Get students waiting for approval
    public List<Student> getPendingStudents() {

        return studentRepository.findByApprovedFalse();
    }

    // Approve student
    public Student approveStudent(Long studentId) {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        student.setApproved(true);

        return studentRepository.save(student);
    }

    // ================= DASHBOARD COUNTS =================

    public long getStudentCount() {
        return studentRepository.countByApprovedTrue();
    }

    public long getEmployeeCount() {
        return employeeRepository.countByApprovedTrue();
    }

    public long getCourseCount() {
        return courseRepository.count();
    }

    public long getPendingCount() {
        return studentRepository.countByApprovedFalse()
                + employeeRepository.countByApprovedFalse();
    }

    // ================= ADMIN LOGIN =================

    public Admin login(String email, String password) {

        Optional<Admin> admin = adminRepository.findByEmail(email);

        if (admin.isEmpty()) {
            throw new RuntimeException("Invalid Email");
        }

        if (!admin.get().getPassword().equals(password)) {
            throw new RuntimeException("Invalid Password");
        }

        return admin.get();
    }
}