var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    //tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    //tabPanels[panelIndex].style.backgroundColor=colorCode;
}

function generateQRCode() {
  // Obtém o texto digitado pelo usuário
  var text = document.getElementById("text").value;

  // Limpa o código QR anterior
  document.getElementById("qrcode").innerHTML = "";

  // Instancia a biblioteca QRCode.js para gerar o código QR
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

function generatelinkQR(text) {
  
  // Limpa o código QR anterior
  document.getElementById("qrcode").innerHTML = "";

  // Instancia a biblioteca QRCode.js para gerar o código QR
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

 function gerarCodigo() {
  var tipo = document.getElementById("tipo").value;
  var valor = document.getElementById("valor").value;

  if (tipo == "ean13") {
    if (!/^\d{13}$/.test(valor)) {
      alert("O valor do EAN13 deve conter 13 dígitos numéricos.");
      return;
    }
  }

  JsBarcode("#canvas", valor, {
    format: tipo,
    displayValue: true,
    fontSize: 20,
    margin: 10
  });
}

function gerarTexto() {
  var tipo = document.getElementById("tipo").value;
  var valor = "";

  if (tipo == "ean13") {
    valor = "789" + Math.floor(Math.random() * 10000000000);
  } else {
    valor = Math.floor(Math.random() * 1000000000);
  }

  document.getElementById("valor").value = valor;
}


document.getElementById('qr-scan-button').addEventListener('click', function() {
  var input = document.getElementById('qr-input');
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
});

showPanel(0,'#d7d4d4'); 