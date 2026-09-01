package com.example.institution.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.institution.dto.AdminLoginRequest;
import com.example.institution.entity.Admin;
import com.example.institution.entity.Employee;
import com.example.institution.entity.EmployeeCourseRegistration;
import com.example.institution.entity.Student;
import com.example.institution.service.AdminService;
import com.example.institution.service.EmployeeCourseRegistrationService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;
    private final EmployeeCourseRegistrationService registrationService;

    public AdminController(
            AdminService adminService,
            EmployeeCourseRegistrationService registrationService) {

        this.adminService = adminService;
        this.registrationService = registrationService;
    }

    // ================= ADMIN LOGIN =================

    @PostMapping("/login")
    public Admin login(@RequestBody AdminLoginRequest request) {

        return adminService.login(
                request.getEmail(),
                request.getPassword());
    }

    // ================= DASHBOARD COUNTS =================

    @GetMapping("/students/count")
    public long getStudentCount() {
        return adminService.getStudentCount();
    }

    @GetMapping("/employees/count")
    public long getEmployeeCount() {
        return adminService.getEmployeeCount();
    }

    @GetMapping("/courses/count")
    public long getCourseCount() {
        return adminService.getCourseCount();
    }

    @GetMapping("/pending/count")
    public long getPendingCount() {
        return adminService.getPendingCount();
    }

    // ================= EMPLOYEE =================

    @GetMapping("/employees/pending")
    public List<Employee> getPendingEmployees() {

        return adminService.getPendingEmployees();
    }

    @PutMapping("/employees/{employeeId}/approve")
    public Employee approveEmployee(
            @PathVariable Long employeeId) {

        return adminService.approveEmployee(employeeId);
    }

    // ================= EMPLOYEE COURSE =================

    @GetMapping("/employee-course-registrations/pending")
    public List<EmployeeCourseRegistration> getPendingRegistrations() {

        return registrationService.getPendingRegistrations();
    }

    @PutMapping("/employee-course-registrations/{registrationId}/approve")
    public EmployeeCourseRegistration approveRegistration(
            @PathVariable Long registrationId) {

        return registrationService.approveRegistration(registrationId);
    }

    // ================= STUDENT =================

    @GetMapping("/students/pending")
    public List<Student> getPendingStudents() {

        return adminService.getPendingStudents();
    }

    @PutMapping("/students/{studentId}/approve")
    public Student approveStudent(
            @PathVariable Long studentId) {

        return adminService.approveStudent(studentId);
    }
}