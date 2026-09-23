<?php

// Get current date info
$dateInfo = getdate();

echo "Day: " . $dateInfo['mday'] . "<br>";
echo "Month: " . $dateInfo['mon'] . "<br>";
echo "Year: " . $dateInfo['year'] . "<br>";
echo "Weekday: " . $dateInfo['weekday'] . "<br>";

?>