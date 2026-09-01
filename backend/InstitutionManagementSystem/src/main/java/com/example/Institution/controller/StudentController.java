package com.example.institution.controller;

import org.springframework.web.bind.annotation.*;

import com.example.institution.entity.Student;
import com.example.institution.service.StudentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // Student registration
    @PostMapping("/register")
    public Student registerStudent(
            @Valid @RequestBody Student student) {

        return studentService.registerStudent(student);
    }

    // Student login
    @PostMapping("/login")
    public Student login(@RequestBody Student student) {

        return studentService.login(
                student.getEmail(),
                student.getPassword()
        );
    }
}