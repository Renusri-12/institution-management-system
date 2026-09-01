package com.example.institution.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.institution.entity.EmployeeCourseRegistration;

public interface EmployeeCourseRegistrationRepository
        extends JpaRepository<EmployeeCourseRegistration, Long> {

    List<EmployeeCourseRegistration> findByEmployeeEmployeeId(
            Long employeeId);

    // Approved courses of an employee
    List<EmployeeCourseRegistration>
    findByEmployeeEmployeeIdAndApprovedTrue(Long employeeId);

    List<EmployeeCourseRegistration> findByCourseCourseId(
            Long courseId);

    Optional<EmployeeCourseRegistration>
    findByEmployeeEmployeeIdAndCourseCourseId(
            Long employeeId,
            Long courseId);

    List<EmployeeCourseRegistration> findByApprovedFalse();
}