package com.example.institution.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.institution.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findByStudentStudentId(Long studentId);

    List<Payment> findByCourseCourseId(Long courseId);
}