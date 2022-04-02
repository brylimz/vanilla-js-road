<!-- create connection -->
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// create input login
$username = $_POST["username"];
$password = $_POST["password"];

// create validation to database
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// create sql
$sql = "SELECT * FROM MyGuests";
$result = $conn->query($sql);

// create table
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();



?>

