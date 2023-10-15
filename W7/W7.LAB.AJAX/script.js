document.getElementById("btn1").onclick = function () {
  this.disabled = true;
  var xmlhttp = getXmlHttpObject();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        document.getElementById("div1").innerHTML = this.responseText;
      } else {
        document.getElementById("div1").innerHTML =
          "Lỗi khi tải dữ liệu: " + this.status;
      }
    }
  };
  xmlhttp.open(
    "GET",
    "http://112.137.129.155/lects/webappdev/ajax/abc.htm",
    true
  );
  xmlhttp.send(null);
};

function getXmlHttpObject() {
  let xmlhttp = null;
  try {
    xmlhttp = new XMLHttpRequest();
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        console.log("Trình duyệt không hỗ trợ AJAX!");
        return null;
      }
    }
  }
  return xmlhttp;
}
