package com.example.institution.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Course;
import com.example.institution.entity.Student;
import com.example.institution.entity.StudentCourseRegistration;
import com.example.institution.exception.DuplicateResourceException;
import com.example.institution.exception.ResourceNotFoundException;
import com.example.institution.repository.CourseRepository;
import com.example.institution.repository.StudentCourseRegistrationRepository;
import com.example.institution.repository.StudentRepository;

@Service
public class StudentCourseRegistrationService {

    private final StudentCourseRegistrationRepository registrationRepository;
    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;

    public StudentCourseRegistrationService(
            StudentCourseRegistrationRepository registrationRepository,
            StudentRepository studentRepository,
            CourseRepository courseRepository) {

        this.registrationRepository = registrationRepository;
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }

    // Register student for a course
    public StudentCourseRegistration registerCourse(
            Long studentId,
            Long courseId) {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Student not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Course not found"));

        if (!student.getApproved()) {
            throw new RuntimeException(
                    "Student is not approved by admin");
        }

        // Prevent duplicate registration
        if (registrationRepository
                .findByStudentStudentIdAndCourseCourseId(
                        studentId,
                        courseId)
                .isPresent()) {

            throw new DuplicateResourceException(
                    "Student is already registered for this course");
        }

        StudentCourseRegistration registration =
                new StudentCourseRegistration();

        registration.setStudent(student);
        registration.setCourse(course);
        registration.setApproved(false);

        return registrationRepository.save(registration);
    }

    // View student's registered courses
    public List<StudentCourseRegistration> getStudentRegistrations(
            Long studentId) {

        return registrationRepository
                .findByStudentStudentId(studentId);
    }

    // Get pending registrations for admin
    public List<StudentCourseRegistration> getPendingRegistrations() {

        return registrationRepository.findByApprovedFalse();
    }

    // Admin approves student course registration
    public StudentCourseRegistration approveRegistration(
            Long registrationId) {

        StudentCourseRegistration registration =
                registrationRepository.findById(registrationId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Student course registration not found"));

        registration.setApproved(true);

        return registrationRepository.save(registration);
    }
}