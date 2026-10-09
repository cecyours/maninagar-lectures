<?php
require_once "config/database.php";

class Student {
    private $conn;
    private $table = "students";

    public function __construct() {
        $database = new Database();
        $this->conn = $database->connect();
    }

    public function getStudents() {
        $query = "SELECT * FROM " . $this->table;
        $result = $this->conn->query($query);
        return $result;
    }
}
?>