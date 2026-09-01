package com.example.institution.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Course;
import com.example.institution.entity.Employee;
import com.example.institution.entity.EmployeeCourseRegistration;
import com.example.institution.entity.StudentCourseRegistration;
import com.example.institution.exception.DuplicateResourceException;
import com.example.institution.exception.ResourceNotFoundException;
import com.example.institution.repository.CourseRepository;
import com.example.institution.repository.EmployeeCourseRegistrationRepository;
import com.example.institution.repository.EmployeeRepository;
import com.example.institution.repository.StudentCourseRegistrationRepository;

@Service
public class EmployeeCourseRegistrationService {

    private final EmployeeCourseRegistrationRepository registrationRepository;
    private final EmployeeRepository employeeRepository;
    private final CourseRepository courseRepository;
    private final StudentCourseRegistrationRepository studentRegistrationRepository;

    public EmployeeCourseRegistrationService(
            EmployeeCourseRegistrationRepository registrationRepository,
            EmployeeRepository employeeRepository,
            CourseRepository courseRepository,
            StudentCourseRegistrationRepository studentRegistrationRepository) {

        this.registrationRepository = registrationRepository;
        this.employeeRepository = employeeRepository;
        this.courseRepository = courseRepository;
        this.studentRegistrationRepository = studentRegistrationRepository;
    }

    // =====================================================
    // Employee registers for a course
    // =====================================================

    public EmployeeCourseRegistration registerCourse(
            Long employeeId,
            Long courseId) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Course not found"));

        // Employee must be approved by admin
        if (!employee.getApproved()) {
            throw new RuntimeException(
                    "Employee is not approved by admin");
        }

        // Prevent duplicate registration
        if (registrationRepository
                .findByEmployeeEmployeeIdAndCourseCourseId(
                        employeeId,
                        courseId)
                .isPresent()) {

            throw new DuplicateResourceException(
                    "Employee is already registered for this course");
        }

        EmployeeCourseRegistration registration =
                new EmployeeCourseRegistration();

        registration.setEmployee(employee);
        registration.setCourse(course);

        // Admin must approve course registration
        registration.setApproved(false);

        return registrationRepository.save(registration);
    }

    // =====================================================
    // View courses registered by an employee
    // =====================================================

    public List<EmployeeCourseRegistration> getEmployeeCourses(
            Long employeeId) {

        return registrationRepository
                .findByEmployeeEmployeeId(employeeId);
    }

    // =====================================================
    // Employee deregisters from a course
    // =====================================================

    public void deregisterCourse(
            Long employeeId,
            Long courseId) {

        EmployeeCourseRegistration registration =
                registrationRepository
                        .findByEmployeeEmployeeIdAndCourseCourseId(
                                employeeId,
                                courseId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Course registration not found"));

        registrationRepository.delete(registration);
    }

    // =====================================================
    // Admin views pending employee course registrations
    // =====================================================

    public List<EmployeeCourseRegistration> getPendingRegistrations() {

        return registrationRepository.findByApprovedFalse();
    }

    // =====================================================
    // Admin approves employee course registration
    // =====================================================

    public EmployeeCourseRegistration approveRegistration(
            Long registrationId) {

        EmployeeCourseRegistration registration =
                registrationRepository.findById(registrationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Course registration not found"));

        registration.setApproved(true);

        return registrationRepository.save(registration);
    }

    // =====================================================
    // Employee views students in their approved courses
    // =====================================================

    public List<StudentCourseRegistration> getStudentsForEmployee(
            Long employeeId) {

        List<EmployeeCourseRegistration> employeeCourses =
                registrationRepository
                        .findByEmployeeEmployeeIdAndApprovedTrue(
                                employeeId);

        List<StudentCourseRegistration> students =
                new ArrayList<>();

        for (EmployeeCourseRegistration employeeCourse
                : employeeCourses) {

            Long courseId =
                    employeeCourse.getCourse().getCourseId();

            students.addAll(
                    studentRegistrationRepository
                            .findByCourseCourseIdAndApprovedTrue(
                                    courseId));
        }

        return students;
    }
}