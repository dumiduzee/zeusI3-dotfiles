<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db_config.php';

$emp_dept = $_POST['emp_dept'];
$dept_type = $_POST['dept_type'];
$emp_dept_no = $_POST['emp_dept_no'];

$sql = "INSERT INTO EMP_DEPT (EMP_DEPT, DEPT_TYPE, EMP_DEPT_NO) VALUES ('$emp_dept', '$dept_type', $emp_dept_no)";

if ($conn->query($sql) === TRUE) {
    echo "New department added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
