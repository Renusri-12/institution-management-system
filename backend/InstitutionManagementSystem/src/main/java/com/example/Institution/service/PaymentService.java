package com.example.institution.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Course;
import com.example.institution.entity.Payment;
import com.example.institution.entity.PromoCode;
import com.example.institution.entity.Student;
import com.example.institution.repository.CourseRepository;
import com.example.institution.repository.PaymentRepository;
import com.example.institution.repository.PromoCodeRepository;
import com.example.institution.repository.StudentRepository;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;
    private final PromoCodeRepository promoCodeRepository;

    public PaymentService(
            PaymentRepository paymentRepository,
            StudentRepository studentRepository,
            CourseRepository courseRepository,
            PromoCodeRepository promoCodeRepository) {

        this.paymentRepository = paymentRepository;
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
        this.promoCodeRepository = promoCodeRepository;
    }

    // Make course payment
    public Payment makePayment(
            Long studentId,
            Long courseId,
            String promoCode) {

        // Find student
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        // Student must be approved
        if (!student.getApproved()) {
            throw new RuntimeException(
                    "Student is not approved by admin");
        }

        // Find course
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        double originalAmount = course.getFee();
        double discountAmount = 0;

        // Check promo code
        if (promoCode != null && !promoCode.trim().isEmpty()) {

            PromoCode promo = promoCodeRepository
                    .findByCodeAndCourseCourseId(
                            promoCode, courseId)
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "Invalid promo code for this course"));

            if (!promo.isActive()) {
                throw new RuntimeException(
                        "Promo code is inactive");
            }

            discountAmount = promo.getDiscountAmount();
        }

        // Calculate final amount
        double paidAmount = originalAmount - discountAmount;

        if (paidAmount < 0) {
            paidAmount = 0;
        }

        // Create payment
        Payment payment = new Payment();

        payment.setStudent(student);
        payment.setCourse(course);
        payment.setOriginalAmount(originalAmount);
        payment.setDiscountAmount(discountAmount);
        payment.setPaidAmount(paidAmount);
        payment.setPromoCode(
                promoCode == null ? "NONE" : promoCode);
        payment.setPaymentStatus("SUCCESS");
        payment.setPaymentDate(LocalDateTime.now());

        return paymentRepository.save(payment);
    }

    // View payment history of a student
    public List<Payment> getStudentPayments(Long studentId) {

        return paymentRepository
                .findByStudentStudentId(studentId);
    }
}