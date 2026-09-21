<?php
function divide($a, $b) {
    if($b == 0) {
        throw new Exception("Division by zero not allowed.");
    }
    return $a / $b;
}

try {
    echo divide(20, 5);
} catch (Exception $e) {
    echo "Caught Exception: " . $e->getMessage();
}

?>
