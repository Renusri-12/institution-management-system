package com.example.institution.service;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Student;
import com.example.institution.exception.ResourceNotFoundException;
import com.example.institution.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Student registration
    public Student registerStudent(Student student) {

        student.setApproved(false);

        return studentRepository.save(student);
    }

    // Student login
    public Student login(String email, String password) {

        Student student = studentRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Invalid email or password"));

        if (!student.getApproved()) {
            throw new RuntimeException(
                    "Student is not approved by admin");
        }

        if (!student.getPassword().equals(password)) {
            throw new ResourceNotFoundException(
                    "Invalid email or password");
        }

        return student;
    }
}