// 1. Đặt tâm điểm vào ô nhập họ tên khi mới vào trang
document.getElementById("hoTen").focus();

// 4. Khi người dùng nhập xong tên và chuyển điều khiển ra khỏi ô Họ và tên thì chuẩn hóa họ tên (bỏ các dấu cách không cần thiết, viết hoa các chữ cái đầu các từ)
document.getElementById("hoTen").onblur = function () {
    this.value = ChuanhoaTen(this.value);
};

//3. Khi người dùng nhập xong một ô và gõ Enter thì chương trình chuyển điều khiển sang ô tiếp theo
function DoKeyup(e, myself, nextcontrolid) {
    if (window.event) e = window.event;
    if (e.keyCode == 13) {
        document.getElementById(nextcontrolid).focus();
    }
}

document.getElementById("hoTen").onkeyup = function (e) {
    DoKeyup(e, this, 'diaChi');
};

document.getElementById("diaChi").onkeyup = function (e) {
    DoKeyup(e, this, 'nam');
};

document.getElementById("nam").onkeyup = function (e) {
    DoKeyup(e, this, 'nu');
};

document.getElementById("nu").onkeyup = function (e) {
    DoKeyup(e, this, 'ngaySinh');
};

document.getElementById("ngaySinh").onkeyup = function (e) {
    DoKeyup(e, this, 'email');
};

document.getElementById("email").onkeyup = function (e) {
    DoKeyup(e, this, 'codinh');
};

// 5. Khi người dùng nhập xong email thì kiểm tra định dạng email là ten[.ten]*@ten[.ten]*. Nếu email được nhập không đúng định dạng thì thông báo lỗi ngay sau ô nhập email.
// 6. Khi người dùng nhập các số vào ngày sinh thì tự động thêm các dấu cách / khi đã nhập đủ ngày, hay đã nhập đủ tháng.
// 7. Khi người dùng gõ lại mật khẩu xong thì kiểm tra mật khẩu gõ lại có trùng mật khẩu không. Nếu không trùng thì hiển thị thông báo “Mật khẩu gõ lại không đúng” ngay sau ô nhập lại mật khẩu
// 8. Khi người dùng bấm Chấp nhận, kiểm tra các thông tin đã được nhập hay chưa (trừ địa chỉ và điện thoại). Nếu thông tin nào chưa được nhập thì hiển thị thông báo ngay sau ô nhập thông in đó.


// BEGIN: check validateHoTen
const hoTen = document.getElementById("hoTen");
hoTen.onchange = function () {
    validateHoTen(hoTen);
};
hoTen.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // Kiểm tra nếu phím ấn là Enter (mã phím 13)
        validateHoTen(hoTen);
    }
});

function validateHoTen(hoTen) {
    if (hoTen.value == "") {
        document.getElementById("erHoTen").innerHTML = "Quý vị chưa nhập họ tên";
    } else document.getElementById("erHoTen").innerHTML = "";
}

// END: check validateHoTen

// BEGIN: check validateBIRTHDAY
const ngaySinh = document.getElementById("ngaySinh");
ngaySinh.oninput = function () {
    formatDate(ngaySinh)
};

ngaySinh.onchange = function () {
    validateNgaySinh(ngaySinh)
};
ngaySinh.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        validateNgaySinh(ngaySinh)
    }
});

function formatDate(ngaySinh) {
    let value = ngaySinh.value;
    value = value.replace(/\//g, '');

    if (value.length >= 2 && value.charAt(2) !== '/') {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }

    if (value.length >= 5 && value.charAt(5) !== '/') {
        value = value.slice(0, 5) + '/' + value.slice(5);
    }

    value = value.slice(0, 10);

    ngaySinh.value = value;
}

function validateNgaySinh(ngaySinh) {
    if (ngaySinh.value == "") {
        document.getElementById("erNgaySinh").innerHTML = "Quý vị chưa nhập ngày sinh";
        // ngaySinh.focus();
    } else if (!laNgayThang(ngaySinh.value)) {
        document.getElementById("erNgaySinh").innerHTML = "Ngày sinh không đúng định dạng";
    } else document.getElementById("erNgaySinh").innerHTML = "";
}

// END: check validateBIRTHDAY

// BEGIN: check validateEmail
const emailInput = document.getElementById("email");
const emailError = document.getElementById("erEmail");
emailInput.onchange = function () {
    validateEmail(emailInput);
};
emailInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // Kiểm tra nếu phím ấn là Enter (mã phím 13)
        validateEmail(emailInput);
    }
});

function validateEmail(inputEmail) {
    var email = inputEmail.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
        emailError.innerHTML = "Quý vị chưa nhập email";
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Email không hợp lệ";
    } else {
        emailError.innerHTML = "";
    }
}

// END: check validateEmail

// BEGIN: check validateUserName
const userName = document.getElementById("username");
userName.onchange = function () {
    validateUserName(userName);
};
userName.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        validateUserName(userName);
    }
});

function validateUserName(userName) {
    if (userName.value == "") {
        document.getElementById("erUserName").innerHTML = "Quý vị chưa nhập tên sử dụng";
    } else if (!laTenSD(userName.value)) {
        document.getElementById("erUserName").innerHTML = "Tên sử dụng không đúng định dạng";
    } else document.getElementById("erUserName").innerHTML = "";
}

// END: check validateUserName

// BEGIN: check validatePASS, REPASS
const pass = document.getElementById("pass");
const rePass = document.getElementById("repass");
pass.onchange = function () {
    validatePass(pass)
};
pass.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        validatePass(pass)
    }
});
rePass.onchange = function () {
    validateRePass(pass, rePass)
};
rePass.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        validateRePass(pass, rePass)
    }
});

function validatePass(pass) {
    if (pass.value == "") {
        document.getElementById("erPass").innerHTML = "Quý vị chưa nhập mật khẩu";
    } else document.getElementById("erPass").innerHTML = "";
}

function validateRePass(pass, rePass) {
    if (rePass.value == "") {
        document.getElementById("erRepass").innerHTML = "Quý vị chưa gõ lại mật khẩu";
    } else if (pass.value !== rePass.value) {
        document.getElementById("erRepass").innerHTML = "Mật khẩu gõ lại không đúng";
    } else document.getElementById("erRepass").innerHTML = "";

}

// END: check validatePASS, REPASS

function Chapnhan() {
    let okie = true; //chua co loi
    //xoa cac thong bao loi
    document.getElementById("erHoTen").innerHTML = "";
    document.getElementById("erNgaySinh").innerHTML = "";
    document.getElementById("erEmail").innerHTML = "";
    document.getElementById("erUserName").innerHTML = "";
    document.getElementById("erPass").innerHTML = "";
    document.getElementById("erRepass").innerHTML = "";

    //kiem tra cac truong bat buoc nhap
    if (document.getElementById("pass").value == "") {
        document.getElementById("erPass").innerHTML = "Quý vị chưa nhập mật khẩu";
        document.getElementById("pass").focus();
        okie = false;
    } else if (document.getElementById("repass").value == "") {
        document.getElementById("erRepass").innerHTML = "Quý vị chưa gõ lại mật khẩu";
        document.getElementById("repass").focus();
        okie = false;
    } else if (document.getElementById("pass").value !== document.getElementById("repass").value) {
        document.getElementById("erRepass").innerHTML = "Mật khẩu gõ lại không đúng";
        document.getElementById("pass").focus();
        okie = false;
    }

    if (document.getElementById("username").value == "") {
        document.getElementById("erUserName").innerHTML = "Quý vị chưa nhập tên sử dụng";
        document.getElementById("username").focus();
        okie = false;
    } else if (!laTenSD(document.getElementById("username").value)) {
        document.getElementById("erUserName").innerHTML = "Tên sử dụng không đúng định dạng";
        document.getElementById("username").focus();
        okie = false;
    }

    if (document.getElementById("email").value == "") {
        document.getElementById("erEmail").innerHTML = "Quý vị chưa nhập e-mail";
        document.getElementById("email").focus();
        okie = false;
    } else if (!laEmail(document.getElementById("email").value)) {
        document.getElementById("erEmail").innerHTML = "E-mail không đúng định dạng";
        document.getElementById("email").focus();
        okie = false;
    }

    if (document.getElementById("ngaySinh").value == "") {
        document.getElementById("erNgaySinh").innerHTML = "Quý vị chưa nhập ngày sinh";
        document.getElementById("ngaySinh").focus();
        okie = false;
    } else if (!laNgayThang(document.getElementById("ngaySinh").value)) {
        document.getElementById("erNgaySinh").innerHTML = "Ngày sinh không đúng định dạng";
        document.getElementById("ngaySinh").focus();
        okie = false;
    }

    if (document.getElementById("hoTen").value == "") {
        document.getElementById("erHoTen").innerHTML = "Quý vị chưa nhập họ tên";
        document.getElementById("hoTen").focus();
        okie = false;
    }


    //submit form
    if (okie) document.getElementById("myForm").submit();
}

function laEmail(s) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(s);
}

function laTenSD(s) {
    return true;
}

function laNgayThang(d) {
    s = d.split('/');

    if (s.length != 3) return false; //phai co 3 phan
    if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

    //chuyen thanh cac so nguyen
    ngay = parseInt(s[0]);
    thang = parseInt(s[1]);
    nam = parseInt(s[2]);

    //kiem tra
    if (thang > 12 || thang < 1) return false;
    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        if (ngay > 31) return false;
    } else if (thang == 2) {
        if (nam % 4 == 0 && nam % 100 != 0) {
            if (ngay > 29) return false;
        } else if (ngay > 28) return false;
    } else if (ngay > 30) return false;

    if (ngay < 1) return false;

    date = new Date();
    if (nam > date.getFullYear() || nam < 1950) return false;

    return true;
}


//chuan hoa ten
function ChuanhoaTen(ten) {
    dname = ten;
    ss = dname.split(' ');
    dname = "";
    for (i = 0; i < ss.length; i++)
        if (ss[i].length > 0) {
            if (dname.length > 0) dname = dname + " ";
            dname = dname + ss[i].substring(0, 1).toUpperCase();
            dname = dname + ss[i].substring(1).toLowerCase();
        }
    return dname;
}

//bam nut bo qua
function Boqua() {
    document.location.href = "";
}

document.getElementById("FileUpload1").onchange = function () {
    let preview = document.querySelector("img.preview");
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
        preview.classList.remove("nodisplay");
    }
};