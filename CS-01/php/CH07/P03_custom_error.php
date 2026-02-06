<?php
function customError($errno, $errstr) {
    echo "<b>Error:</b> [$errno] $errstr<br>";
}

// Set the custom error handler
set_error_handler("customError");

// Trigger an error
echo $test; // undefined variable

?>
