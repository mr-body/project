$(".newCode").click(async function() {
    let codigo = await eel.codeGenerator()();
    $("#codigo").html(codigo)
    mytools.qrcode(`${host}:${port}/${codigo}`,document.getElementById("qrcode"))
    $("#QuadroScanner").text(`http://${host}:${port}/scanner/${codigo}`);
});

async function getInfo()
{
  let codigo = await eel.codeGenerator()();
  $("#codigo").html(codigo)
  $("#sistema").html(systemName)
  $("#usuario").html(user)
  $(".hostPort").html(`${host}:${port}`)
  mytools.qrcode(`${host}:${port}/keyborad/${codigo}`,document.getElementById("qrcode"))
  $("#QuadroScanner").text(`http://${host}:${port}/scanner/${codigo}`);
}

getInfo()
