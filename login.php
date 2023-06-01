<?php  
include('conn1.php');  
global $conn;
if ($conn==false)
{ 
	die("Connection failed: " . mysqli_connect_error()); 
} 
$em=$_POST['email'];
$ps=$_POST['password'];
$sql="SELECT Email,Password FROM register where Email='$em'";
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)==1)
{  
    $row=mysqli_fetch_assoc($result);
    if($row['Email']==$em and $row['Password']==$ps)
    {
       echo  '<script type="text/JavaScript">;
            window.location.href="index.html"; 
            alert("Login Succesfully");
            </script>';
    }
    else{
        echo  '<script type="text/JavaScript">;
                window.location.href="index.html"; 
                alert("Invalid email or password");
                </script>';
    }
}
else{
    echo  '<script type="text/JavaScript">;
            window.location.href="index.html"; 
            alert("Invalid email or password");
            </script>';
}
mysqli_close($conn); 
?> 