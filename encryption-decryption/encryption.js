/* ollabs script v1.0.0 - 2021-14-11 */
/* https://github.com/ollabs */

	function startencode(jadibhsmesin){
		  //biar kagak kebaca
		  var dbgaramone="garam";
		  var dbgaramtwo="gula";
		  var ab=btoa(jadibhsmesin);
		  var z1=btoa(dbgaramone);
		  var z2=btoa(dbgaramtwo);
		  var xx=btoa(z1+z2+ab);
   txt=btoa(xx);
   return txt;
	}

	function startdecode(biarkebaca){
	//dibalikin lagi biar terbaca
		var dbgaramone="garam";
		var dbgaramtwo="gula";
		var z1=btoa(dbgaramone);
		var z2=btoa(dbgaramtwo);
	var m=atob(biarkebaca);
	var n=atob(m);
	var x=n.replace(z1+z2,"");
	txt=atob(x);
  return txt;
	}


