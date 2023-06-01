function validateform()
{
	var uemail = document.registration.email;
	var passid = document.registration.password.value;
	var fname = document.registration.Fname;
	var lname=document.registration.Lname;	
	var pass=document.registration.Cpassword.value;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex;
	var uosex = document.registration.osex;
	var uadd = document.registration.address;

	if(ValidateEmail(uemail))
	{
		if(passid_validation(passid,7,12))
		{
			if(validatename(fname))
			{
				if(validatename(lname))
				{ 
					if(checkCpassword(pass,passid))
					{
						if(validsex(umsex,ufsex,uosex))
						{
							if(addressvalidate(uadd))
							{
								alert('Form Succesfully Submitted');
								window.location.reload()
								return true;
							}
						}
					} 
				}
			}
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
		var passid_len = passid.length;
		if (passid_len == 0 ||passid_len >= my || passid_len < mx)
		{
			alert("Password should not be empty / length be between "+mx+" to "+my);
			passid.focus();
			return false;
		}
		return true;
	}
	function validatename(uname)
	{
		var letters = /^[A-Za-z]+$/;
		if(uname.value.match(letters))
		{
			return true;
		}
		else
		{
			alert('Username must have alphabet characters only');
			uname.focus();
			return false;
		}
	}
	function checkCpassword(password,passid)
	{
		if(password!=passid)
		{
			alert('Confirm password is not matching');
			password.focus();
			return false;
		}
		else
		{
			return true;
		}
	}
	function validsex(umsex,ufsex,uosex)
	{
		x=0;
		if(umsex.checked || ufsex.checked || uosex.checked)
		{
			x++;
		} 
		if(x==0)
		{
			alert('Select Male/Female/others');
			umsex.focus();
			return false;
		}
		else
		{  return true;
		}
	}
	function addressvalidate(uadd)
	{
		var letters = /^[0-9a-zA-Z]+$/;
		if(uadd.value.match(letters))
		{
			return true;
		}
		else
		{
			alert('User address must have alphanumeric characters only');
			uadd.focus();
			return false;
		}
	}
}
