<?php
require_once "config/database.php";

class User {
    private $conn;
    private $table = "users";

    public function __construct(){
        $database = new Database();
        $this->conn = $database->connect();
    }

    public function register($name, $email, $password){
        $password = password_hash($password, PASSWORD_DEFAULT);
        $query = "INSERT INTO " . $this->table . " (name, email, password) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sss", $name, $email, $password);
        return $stmt->execute();
    }

    public function login($email, $password){
        $query = "SELECT * FROM " . $this->table . " WHERE email=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows > 0){
            $user = $result->fetch_assoc();
            if(password_verify($password, $user['password'])){
                return $user;
            }
        }
        return false;
    }
}
?>