package com.example.institution.controller;

import java.util.List;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.example.institution.dto.EmployeeLoginRequest;
import com.example.institution.entity.Employee;
import com.example.institution.entity.EmployeeCourseRegistration;
import com.example.institution.entity.StudentCourseRegistration;
import com.example.institution.service.EmployeeCourseRegistrationService;
import com.example.institution.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final EmployeeCourseRegistrationService registrationService;

    public EmployeeController(
            EmployeeService employeeService,
            EmployeeCourseRegistrationService registrationService) {

        this.employeeService = employeeService;
        this.registrationService = registrationService;
    }

    // ================= EMPLOYEE =================

    // Employee registration
    @PostMapping("/register")
    public Employee registerEmployee(
            @Valid @RequestBody Employee employee) {

        return employeeService.registerEmployee(employee);
    }

    // Employee login
    @PostMapping("/login")
    public Employee login(
            @RequestBody EmployeeLoginRequest request) {

        return employeeService.login(
                request.getEmail(),
                request.getPassword());
    }

    // ================= COURSE =================

    // Employee registers for a course
    @PostMapping("/{employeeId}/courses/{courseId}")
    public EmployeeCourseRegistration registerCourse(
            @PathVariable Long employeeId,
            @PathVariable Long courseId) {

        return registrationService.registerCourse(
                employeeId,
                courseId);
    }

    // View courses registered by employee
    @GetMapping("/{employeeId}/courses")
    public List<EmployeeCourseRegistration> getEmployeeCourses(
            @PathVariable Long employeeId) {

        return registrationService.getEmployeeCourses(employeeId);
    }

    // Employee deregisters from course
    @DeleteMapping("/{employeeId}/courses/{courseId}")
    public String deregisterCourse(
            @PathVariable Long employeeId,
            @PathVariable Long courseId) {

        registrationService.deregisterCourse(
                employeeId,
                courseId);

        return "Employee deregistered from course successfully";
    }

    // ================= STUDENTS =================

    // Employee views students in approved courses
    @GetMapping("/{employeeId}/students")
    public List<StudentCourseRegistration> getStudentsForEmployee(
            @PathVariable Long employeeId) {

        return registrationService.getStudentsForEmployee(employeeId);
    }
}