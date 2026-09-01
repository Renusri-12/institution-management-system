package com.example.institution.controller;

import java.util.List;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.example.institution.entity.Course;
import com.example.institution.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    // Add a course
    @PostMapping
    public Course addCourse(@Valid @RequestBody Course course) {
        return courseService.addCourse(course);
    }

    // Get all courses
    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    // Delete a course
    @DeleteMapping("/{courseId}")
    public String deleteCourse(@PathVariable Long courseId) {

        courseService.deleteCourse(courseId);

        return "Course deleted successfully";
    }
}