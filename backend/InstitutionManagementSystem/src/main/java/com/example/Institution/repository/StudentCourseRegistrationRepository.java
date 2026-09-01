package com.example.institution.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.institution.entity.StudentCourseRegistration;

public interface StudentCourseRegistrationRepository
        extends JpaRepository<StudentCourseRegistration, Long> {

    List<StudentCourseRegistration> findByStudentStudentId(
            Long studentId);

    List<StudentCourseRegistration> findByCourseCourseId(
            Long courseId);

    List<StudentCourseRegistration> findByCourseCourseIdAndApprovedTrue(
            Long courseId);

    Optional<StudentCourseRegistration>
    findByStudentStudentIdAndCourseCourseId(
            Long studentId,
            Long courseId);

    List<StudentCourseRegistration> findByApprovedFalse();
}