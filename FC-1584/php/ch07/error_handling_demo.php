<?php

// ------------------------------
// 1️⃣ ERROR LEVEL SETTINGS
// ------------------------------
error_reporting(E_ALL);       // All errors show
ini_set('display_errors', 1); // Browser me errors show

echo "<h3>PHP Error Handling Demo</h3>";


// ------------------------------
// 2️⃣ NOTICE ERROR (Undefined Variable)
// ------------------------------
echo "<h4>Notice Error Example</h4>";
echo $name;   // Undefined variable


// ------------------------------
// 3️⃣ WARNING ERROR (File not found)
// ------------------------------
echo "<h4>Warning Error Example</h4>";
include("not_found_file.php"); // File does not exist


// ------------------------------
// 4️⃣ DIE / EXIT FUNCTION
// ------------------------------
echo "<h4>die() / exit() Example</h4>";

$age = 15;

if ($age < 18) {
    die("Access Denied: Age must be 18 or above");
}

echo "Welcome User"; // Ye line execute nahi hogi agar die() chala


// ------------------------------
// 5️⃣ CUSTOM ERROR MESSAGE
// ------------------------------
echo "<h4>Custom Error Message</h4>";

function divide($a, $b) {
    if ($b == 0) {
        trigger_error("Custom Error: Division by zero not allowed", E_USER_WARNING);
        return;
    }
    echo "Result: " . ($a / $b);
}

divide(10, 0);


// ------------------------------
// 6️⃣ TRY - CATCH (Exception Handling)
// ------------------------------
echo "<h4>Try-Catch Exception Handling</h4>";

try {
    $x = 10;
    $y = 0;

    if ($y == 0) {
        throw new Exception("Cannot divide by zero (Exception)");
    }

    echo $x / $y;
} catch (Exception $e) {
    echo "Caught Exception: " . $e->getMessage();
}


// ------------------------------
// 7️⃣ ERROR LOGGING
// ------------------------------
echo "<h4>Error Logging</h4>";

ini_set("log_errors", 1);
ini_set("error_log", "error_log.txt");

error_log("This is a test error log message");

echo "Error logged successfully";


// ------------------------------
// 8️⃣ DEBUGGING
// ------------------------------
echo "<h4>Debugging Example</h4>";

$data = ["PHP", "JavaScript", "Python"];

echo "<pre>";
print_r($data);
var_dump($data);
echo "</pre>";

?>
