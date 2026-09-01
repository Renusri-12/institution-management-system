package com.example.institution.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.institution.entity.Payment;
import com.example.institution.service.PaymentService;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // Make payment
    @PostMapping("/make")
    public Payment makePayment(
            @RequestParam Long studentId,
            @RequestParam Long courseId,
            @RequestParam(required = false) String promoCode) {

        return paymentService.makePayment(
                studentId,
                courseId,
                promoCode
        );
    }

    // View student's payment history
    @GetMapping("/student/{studentId}")
    public List<Payment> getStudentPayments(
            @PathVariable Long studentId) {

        return paymentService.getStudentPayments(studentId);
    }
}