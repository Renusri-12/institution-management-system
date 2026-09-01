package com.example.institution.service;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Course;
import com.example.institution.entity.PromoCode;
import com.example.institution.repository.CourseRepository;
import com.example.institution.repository.PromoCodeRepository;

@Service
public class PromoCodeService {

    private final PromoCodeRepository promoCodeRepository;
    private final CourseRepository courseRepository;

    public PromoCodeService(
            PromoCodeRepository promoCodeRepository,
            CourseRepository courseRepository) {

        this.promoCodeRepository = promoCodeRepository;
        this.courseRepository = courseRepository;
    }

    // Apply promo code to a particular course
    public double applyPromoCode(
            Long courseId,
            String code) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        PromoCode promoCode = promoCodeRepository
                .findByCodeAndCourseCourseId(code, courseId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Invalid promo code for this course"));

        if (!promoCode.isActive()) {
            throw new RuntimeException(
                    "This promo code is inactive");
        }

        double finalAmount =
                course.getFee() - promoCode.getDiscountAmount();

        if (finalAmount < 0) {
            finalAmount = 0;
        }

        return finalAmount;
    }
}