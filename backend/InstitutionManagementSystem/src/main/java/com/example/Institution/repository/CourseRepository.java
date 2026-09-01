package com.example.institution.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.institution.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}
