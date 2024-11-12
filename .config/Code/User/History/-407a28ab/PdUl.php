<?php
include 'db_config.php';

$emp_dept = $_GET['emp_dept'];
$sql = "SELECT * FROM EMP_DEPT WHERE EMP_DEPT = '$emp_dept'";
$result = $conn->query($sql);

echo "<h2>Search Results</h2>";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<p>Department: " . $row["EMP_DEPT"] . " - Type: " . $row["DEPT_TYPE"] . " - Number: " . $row["EMP_DEPT_NO"] . "</p>";
    }
} else {
    echo "<p>No results found</p>";
}

$conn->close();
?>
<a href="index.php">Back to Home</a>
