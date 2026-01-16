<?php

class User
{
    public $username;
    private $password;


    // Constructor
    function __construct($u, $p)
    {
        $this->username = $u;
        $this->password = $p;
        echo "Constructor Called<br>";
    }


    public function showUser()
    {
        echo "Username: " . $this->username . "<br>";
    }


    // Destructor
    function __destruct()
    {
        echo "Destructor Called";
    }
}


$u1 = new User("admin", "123");
$u1->showUser();

?>