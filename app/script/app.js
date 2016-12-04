function handleClick(){
	var userName = document.getElementById("user").value
	var Password = document.getElementById("pass").value
	console.log(userName, Password);
	if(userName === "Abdul" & Password === "123"){
		console.log("correct");
		window.location.replace("file:///C:/workspace/sampleweb/app/template/cart.html")
	}
		else{
			console.log("incorrect");
		}
	}

