# Encryption-Decryption-javascript
Encryption Decryption javascript pertukaran data aman

# Encryption/Decryption data menggunakan Javascript

Banyak berbagai macam cara untuk mengamankan data agar tetap aman,
baik saat dalam pengiriman maupun data yang disimpan di dalam database.

Salah satu cara di antaranya yaitu:
 kita akan menggunakan Javascript sebagai Encryption/Decryption,
 untuk penggunaan yang akan mengenkripsi dan mendekripsi informasi di sisi klien menggunakan JavaScript.
 Informasi terenkripsi akan disimpan dalam database di server.
 
 kita akan membuat script sederhana agar mudah kita fahami.
 


Related projects:



#### Javascript 

Idealnya kita bisa melakukan 

untuk menghasilkan string yang disandikan, dan sesuatu seperti:

```
 startencode(data) 
 ```
 dan untuk memecahkan kode nanti.
 
 ```
  startdecode(data)
   ```
   

Berikut contoh code lengkap sederhana javascript yang akan kita buat:
### encode

````
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
	


# Decode
	
	

```

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
```

### Ex


# Ok

Saya rasa dengan code javascript tersebut,kita bisa membuat sebuah teka-teki code sandi alogaritma pengolahan data.
#Nb -
 -Kita bisa menggunakan javascript dan php dengan fungsi yang sama untuk bisa melakukan komunikasi dan pertukaran data antara sisi client dan server menggunakan Encryption/Decryption.
 -Kurangnya dan lebihnya silahkan di koreksi dan di tambahkan.
 -Semoga bisa bermanfaat 
 
