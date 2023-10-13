sel_ = null; //menu duoc chon

function MO(r) {
    if (r != sel_) r.className = "thucdon-dechuot";
}

function MOut(r) {
    if (r != sel_) r.className = "thucdon-binhthuong";
}

function MC(r) {
    if (sel_ != null)  //thuc don hien tai duoc chon
        sel_.className = "thucdon-binhthuong";

    sel_ = r; //thuc don moi duoc chon
    sel_.className = "thucdon-duocchon";

    //thuc hien cac viec khi noi dung nay duoc chon
    //document.getElementById("alo").innerHTML = sel_.innerHTML;

    frm = document.getElementById("frame");
    if (sel_.id == "m1") {
        frm.src = "https://thanhnien.vn/";
    } else if (sel_.id == "m2") {
        frm.src = "http://dantri.com.vn";
    } else if (sel_.id == "m3") {
        frm.src = "https://kenh14.vn/";
    } else if (sel_.id == "m4") {
        frm.src = "https://www.facebook.com/";
    }
}
