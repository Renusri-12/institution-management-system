package com.example.institution.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.institution.entity.StudentCourseRegistration;
import com.example.institution.service.StudentCourseRegistrationService;

@RestController
@RequestMapping("/api/student-course-registrations")
public class StudentCourseRegistrationController {

    private final StudentCourseRegistrationService registrationService;

    public StudentCourseRegistrationController(
            StudentCourseRegistrationService registrationService) {

        this.registrationService = registrationService;
    }

    // Student registers for a course
    @PostMapping("/register")
    public StudentCourseRegistration registerCourse(
            @RequestParam Long studentId,
            @RequestParam Long courseId) {

        return registrationService.registerCourse(
                studentId, courseId);
    }

    // View courses registered by a student
    @GetMapping("/student/{studentId}")
    public List<StudentCourseRegistration> getStudentRegistrations(
            @PathVariable Long studentId) {

        return registrationService
                .getStudentRegistrations(studentId);
    }

    // Admin views pending registrations
    @GetMapping("/pending")
    public List<StudentCourseRegistration> getPendingRegistrations() {

        return registrationService.getPendingRegistrations();
    }

    // Admin approves registration
    @PutMapping("/{registrationId}/approve")
    public StudentCourseRegistration approveRegistration(
            @PathVariable Long registrationId) {

        return registrationService
                .approveRegistration(registrationId);
    }
}