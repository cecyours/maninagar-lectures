<?php
require_once "models/User.php";

class AuthController {

    public function showLogin(){
        require "views/login.php";
    }

    public function showSignup(){
        require "views/signup.php";
    }

    public function register(){
        $user = new User();
        $user->register($_POST['name'], $_POST['email'], $_POST['password']);
        header("Location: index.php?action=login");
    }

    public function login(){
        $userModel = new User();
        $user = $userModel->login($_POST['email'], $_POST['password']);
        if($user){
            $_SESSION['user'] = $user;
            header("Location: index.php?action=dashboard");
        } else {
            echo "Invalid Credentials";
        }
    }

    public function dashboard(){
        if(!isset($_SESSION['user'])){
            header("Location: index.php?action=login");
        }
        require "views/dashboard.php";
    }

    public function logout(){
        session_destroy();
        header("Location: index.php?action=login");
    }
}
?>