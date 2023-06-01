function validateform()
{
	var uemail = document.registration.email;
	var passid = document.registration.password;
	if(ValidateEmail(uemail))
	{
		if(passid_validation(passid,7,12))
		{
			alert('Login Succesfully');
			window.location.reload()
			return true;
		}
	}
	return false;
	
	function ValidateEmail(uemail)
	{
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(uemail.value.match(mailformat))
		{
			return true;
		}
		else
		{
			alert("You have entered an invalid email address!");
			uemail.focus();
			return false;
		}
	}
	function passid_validation(passid,mx,my)
	{
		var passid_len = passid.value.length;
		if (passid_len == 0 ||passid_len >= my || passid_len < mx)
		{
			alert("Password should not be empty / length be between "+mx+" to "+my);
			passid.focus();
			return false;
		}
		return true;
	}
}
