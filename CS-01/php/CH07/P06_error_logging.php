<?php

// Enable error logging
ini_set("log_errors", 1);
ini_set("error_log", "my_errors.log");

// Trigger an error
echo $undefinedVar;

?>
