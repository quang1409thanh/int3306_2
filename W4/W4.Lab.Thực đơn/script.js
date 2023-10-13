sel_ = null;
function avoid(r) {
    if (sel_ != null) {
        sel_.className = "expand";
    }
    sel_ = r;
    sel_.className = "portalSelected";
    document.getElementById("content").innerHTML = sel_.innerHTML;
}

function tdMouseOver(r) {
    if (r != sel_) {
        r.className = 'portalHover';
    }
}

function tdMouseOut(r) {
    if (r != sel_) {
        r.className = 'expand';
    }
}
