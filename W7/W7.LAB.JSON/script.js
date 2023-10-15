const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    this.disabled = true;
    const xmlHttpObject = getXmlHttpObject();

    if (!xmlHttpObject) {
        console.log("Trình duyệt không hỗ trợ AJAX!");
        return;
    }

    xmlHttpObject.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                try {
                    const obj = JSON.parse(this.responseText);
                    const tbody = document.querySelector("#tbl1 tbody");
                    tbody.innerHTML = "";

                    obj.forEach((item) => {
                        const r = document.createElement("tr");
                        const c1 = document.createElement("td");
                        const c2 = document.createElement("td");
                        const c3 = document.createElement("td");
                        c1.textContent = item.name;
                        c2.textContent = item.age;
                        c3.textContent = item.cars.length;

                        item.cars.forEach((car) => {
                            const carInfo = document.createElement("div");
                            carInfo.textContent = car.name + " - " + car.models;
                            c3.appendChild(carInfo);
                        });

                        r.appendChild(c1);
                        r.appendChild(c2);
                        r.appendChild(c3);
                        tbody.appendChild(r);
                    });
                } catch (e) {
                    console.log("Lỗi khi xử lý dữ liệu: " + e.message);
                }
            } else {
                console.log("Lỗi khi tải dữ liệu: " + this.status);
            }
        }
    };
    xmlHttpObject.open(
        "GET",
        "https://raw.githubusercontent.com/quang1409thanh/jsonSer/main/data.json",
        true
    );
    xmlHttpObject.send(null);
});

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
