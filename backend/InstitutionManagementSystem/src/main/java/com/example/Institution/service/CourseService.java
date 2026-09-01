package com.example.institution.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.institution.entity.Course;
import com.example.institution.repository.CourseRepository;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    // Add a new course
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    // View all available courses
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // Delete a course
    public void deleteCourse(Long courseId) {

        if (!courseRepository.existsById(courseId)) {
            throw new RuntimeException("Course not found");
        }

        courseRepository.deleteById(courseId);
    }
}