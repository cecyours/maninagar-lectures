<?php
$file = "sample.txt";

if (!file_exists($file)) {
    die("File does not exist! Stopping the script.");
}

echo "File exists, continuing execution...";

?>