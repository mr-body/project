class tools{

	audio(file) {
	  const audio = new Audio(`../${url}`);
	  audio.play();
	}

	setCookie(name, value, daysToExpire) {
	  const date = new Date();
	  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
	  const expires = "expires=" + date.toUTCString();
	  document.cookie = name + "=" + value + ";" + expires + ";path=/";
	}

	getCookie(name) {
	  const cookieName = name + "=";
	  const decodedCookie = decodeURIComponent(document.cookie);
	  const cookieArray = decodedCookie.split(';');

	  for (let i = 0; i < cookieArray.length; i++) {
	    let cookie = cookieArray[i];
	    while (cookie.charAt(0) === ' ') {
	      cookie = cookie.substring(1);
	    }
	    if (cookie.indexOf(cookieName) === 0) {
	      return cookie.substring(cookieName.length, cookie.length);
	    }
	  }
	  return "";
	}

	qrcode(text,box) {
	  // Limpa o código QR anterior
	  box.innerHTML = "";

	  // Instancia a biblioteca QRCode.js para gerar o código QR
	  var qrcode = new QRCode(box, {
	    text: text,
	    width: 100,
	    height: 100,
	    colorDark: "#161616",
	    colorLight: "#ffffff",
	    correctLevel: QRCode.CorrectLevel.H
	  });
	}

	qrReader(openfile){
	  var input = openfile
	  if (input.files && input.files[0]) {
	    var reader = new FileReader();
	    reader.onload = function(e) {
	      var img = new Image();
	      img.onload = function() {
	        var canvas = document.createElement('canvas');
	        canvas.width = img.width;
	        canvas.height = img.height;
	        canvas.getContext('2d').drawImage(img, 0, 0);
	        var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
	        var code = jsQR(imageData.data, imageData.width, imageData.height);
	        if (code) {
	          alert('QR Code scanned successfully. Result: ' + code.data);
	        } else {
	          alert('No QR Code found in the image.');
	        }
	      };
	      img.src = e.target.result;
	    };
	    reader.readAsDataURL(input.files[0]);
	  }
	}

	barcode(text, type, box) {
	  if (type === "ean13") {
	    if (!/^\d{13}$/.test(text)) {
	      alert("O valor do EAN13 deve conter 13 dígitos numéricos.");
	      return;
	    }
	  }

	  JsBarcode(box, text, {
	    format: type,
	    lineColor: "#000",
	    width: 2,
	    height: 50,
	    displayValue: true
	  });
	}


}