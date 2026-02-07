<?php

// Custom date using mktime(hour, minute, second, month, day, year)
$customTime = mktime(14, 30, 0, 1, 15, 2026);
echo "Custom Date & Time: " . date("Y-m-d H:i:s", $customTime) . "<br>";

// Using strtotime()
$customTime2 = strtotime("next Friday");
echo "Next Friday: " . date("Y-m-d", $customTime2);

?>