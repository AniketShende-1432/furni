<?php 
include('conn1.php');  
global $conn;
if ($conn==false)
{ 
	die("Connection failed: " . mysqli_connect_error()); 
} 
$Fn=$_POST['Fname']; 
$Ln=$_POST['Lname']; 
$em=$_POST['email']; 
$ps=$_POST['password'];  
$sql ="INSERT INTO admin (Fname,Lname,Email,Password) VALUES ('$Fn','$Ln','$em','$ps')";
if(mysqli_query($conn, $sql))
{ 
	echo  '<script type="text/JavaScript">;
            window.location.href="admin.html"; 
            alert("Register Succesfully");
            </script>';
} 
else
{ 
	echo "ERROR: Could not able to execute $sql.". mysqli_error($conn);
	header("Location: reg.html"); 
} 
mysqli_close($conn); 
?> 
