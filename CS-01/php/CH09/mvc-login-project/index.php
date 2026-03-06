<?php
session_start();
require_once "controllers/AuthController.php";

$controller = new AuthController();

$action = $_GET['action'] ?? 'login';

switch($action){
    case 'signup':
        $controller->showSignup();
        break;
    case 'register':
        $controller->register();
        break;
    case 'login':
        $controller->showLogin();
        break;
    case 'authenticate':
        $controller->login();
        break;
    case 'dashboard':
        $controller->dashboard();
        break;
    case 'logout':
        $controller->logout();
        break;
    default:
        $controller->showLogin();
}
?>