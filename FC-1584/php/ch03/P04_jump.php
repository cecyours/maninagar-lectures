<?php
// break
for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) break;
    echo "Break: $i<br>";
}

echo "</br></br>";


// continue
for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) continue;
    echo "Continue: $i<br>";
}

echo "</br></br>";


// return
function add($a, $b)
{
    return $a + $b;
}
echo "Return: " . add(5, 5) . "<br>";

echo "</br></br>";


// exit
echo "Before Exit<br>";
exit();
echo "After Exit";

echo "</br></br>";


// goto (avoid in real projects)
start:
echo "Goto Example<br>";

?>