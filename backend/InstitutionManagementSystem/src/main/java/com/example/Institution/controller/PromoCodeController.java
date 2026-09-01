package com.example.institution.controller;

import org.springframework.web.bind.annotation.*;

import com.example.institution.service.PromoCodeService;

@RestController
@RequestMapping("/api/promo-codes")
public class PromoCodeController {

    private final PromoCodeService promoCodeService;

    public PromoCodeController(PromoCodeService promoCodeService) {
        this.promoCodeService = promoCodeService;
    }

    @PostMapping("/apply")
    public double applyPromoCode(
            @RequestParam Long courseId,
            @RequestParam String code) {

        return promoCodeService.applyPromoCode(courseId, code);
    }
}