package com.example.institution.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.institution.entity.PromoCode;

public interface PromoCodeRepository extends JpaRepository<PromoCode, Long> {

    Optional<PromoCode> findByCode(String code);

    Optional<PromoCode> findByCodeAndCourseCourseId(
            String code,
            Long courseId);
}