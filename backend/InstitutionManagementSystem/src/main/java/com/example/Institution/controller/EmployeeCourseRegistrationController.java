package com.example.institution.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.institution.entity.EmployeeCourseRegistration;
import com.example.institution.service.EmployeeCourseRegistrationService;
import com.example.institution.entity.StudentCourseRegistration;

@RestController
@RequestMapping("/api/employee-course-registrations")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeCourseRegistrationController {

    private final EmployeeCourseRegistrationService registrationService;

    public EmployeeCourseRegistrationController(
            EmployeeCourseRegistrationService registrationService) {

        this.registrationService = registrationService;
    }

    // Employee registers for a course
    @PostMapping("/register")
    public EmployeeCourseRegistration registerCourse(
            @RequestParam Long employeeId,
            @RequestParam Long courseId) {

        return registrationService.registerCourse(employeeId, courseId);
    }

    // View courses registered by an employee
    @GetMapping("/employee/{employeeId}")
    public List<EmployeeCourseRegistration> getEmployeeCourses(
            @PathVariable Long employeeId) {

        return registrationService.getEmployeeCourses(employeeId);
    }

    // Employee deregisters from a course
    @DeleteMapping("/deregister")
    public String deregisterCourse(
            @RequestParam Long employeeId,
            @RequestParam Long courseId) {

        registrationService.deregisterCourse(employeeId, courseId);
        return "Course deregistered successfully.";
    }

    // Admin views pending registrations
    @GetMapping("/pending")
    public List<EmployeeCourseRegistration> getPendingRegistrations() {

        return registrationService.getPendingRegistrations();
    }

    // Admin approves employee course registration
    @PutMapping("/{registrationId}/approve")
    public EmployeeCourseRegistration approveRegistration(
            @PathVariable Long registrationId) {

        return registrationService.approveRegistration(registrationId);
    }
    @GetMapping("/employee/{employeeId}/students")
    public List<StudentCourseRegistration> getStudentsForEmployee(
            @PathVariable Long employeeId) {

        return registrationService.getStudentsForEmployee(employeeId);
    }
}