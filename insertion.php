<?php
include('conn1.php');
global $conn;

if ($conn==false) {
die("Connection failed: " . mysqli_connect_error());
}
if (isset($_POST['submit'])) {
 
    $filename = $_FILES["file"]["name"];
    $tempname = $_FILES["file"]["tmp_name"];
    $folder = "./images/" . $filename;
$name=$_POST['fname']; 
$cat=$_POST['Cat'];
$price=$_POST['price'];
$quan=$_POST['quantity'];
$sql = "INSERT INTO furniture (Name,Category,Price,Quantity,Image) VALUES ('$name','$cat',$price,'$quan','$filename')";
if (move_uploaded_file($tempname, $folder)) {
    echo "<h3>  Image uploaded successfully!</h3>";
} else {
    echo "<h3>  Failed to upload image!</h3>";
}
if(mysqli_query($conn, $sql))
{
    echo "Records inserted successfully.";
} 
else{
echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
}
mysqli_close($conn);
?>