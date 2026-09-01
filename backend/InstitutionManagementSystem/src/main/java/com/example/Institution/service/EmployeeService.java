package com.example.institution.service;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Employee;
import com.example.institution.exception.ResourceNotFoundException;
import com.example.institution.repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // Employee registration
    public Employee registerEmployee(Employee employee) {

        employee.setApproved(false);

        return employeeRepository.save(employee);
    }

    // Employee login
    public Employee login(String email, String password) {

        Employee employee = employeeRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Invalid email or password"));

        if (!employee.getApproved()) {
            throw new RuntimeException(
                    "Employee is not approved by admin");
        }

        if (!employee.getPassword().equals(password)) {
            throw new ResourceNotFoundException(
                    "Invalid email or password");
        }

        return employee;
    }
}