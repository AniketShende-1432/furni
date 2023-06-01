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
$cps=$_POST['Cpassword'];
$Gn=$_POST['sex']; 
$pn=$_POST['Contact']; 
$Ad=$_POST['address']; 
$sql ="INSERT INTO register (Fname,Lname,Email,Password,Cpassword,Gender,Phone,Address) VALUES ('$Fn','$Ln','$em','$ps','$cps','$Gn',$pn,'$Ad')";
if(mysqli_query($conn, $sql))
{ 
	echo  '<script type="text/JavaScript">;
            window.location.href="index.html"; 
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
