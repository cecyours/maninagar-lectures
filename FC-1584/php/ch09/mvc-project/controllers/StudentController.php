<?php
require_once "models/Student.php";

class StudentController {
    public function index() {
        $student = new Student();
        $students = $student->getStudents();
        require_once "views/student_view.php";
    }
}
?>