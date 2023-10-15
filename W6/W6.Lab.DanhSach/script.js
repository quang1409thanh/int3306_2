const checkList = document.querySelectorAll(".check");

function handleCheck(check) {
    const cnt = countChecked();
    if (check.checked) {
        check.parentNode.parentNode.classList.add("checked");
        if (cnt === checkList.length) {
            document.querySelector(".checkAll").checked = true;
        } else {
            document.querySelector(".checkAll").checked = false;
        }
        document.querySelector("#delete").classList.remove("hide");
    } else {
        check.parentNode.parentNode.classList.remove("checked");
        if (cnt === checkList.length) {
            document.querySelector(".checkAll").checked = true;
        } else {
            document.querySelector(".checkAll").checked = false;
        }
        if (cnt === 0) {
            document.querySelector("#delete").classList.add("hide");
        }
    }
}

function countChecked() {
    let result = 0;
    for (let check of checkList) {
        if (check.checked) {
            result++;
        }
    }
    return result;
}

for (let check of checkList) {
    check.onchange = function (e) {
        handleCheck(this);
    }
}

document.querySelectorAll(".row").forEach((element) => {
    element.addEventListener("click", function (event) {
        // e.stopPropagation();
        if (event.target.tagName !== "INPUT") {
            const input = element.querySelector("input");
            input.checked = !input.checked;
            handleCheck(input);
        }
    })
})

document.querySelector(".checkAll").onchange = function () {
    const list = document.querySelectorAll(".check");
    for (let e of list) {
        if (this.checked) {
            if (!e.checked) {
                e.parentNode.parentNode.classList.add("checked");
            }
        } else {
            if (e.checked) {
                e.parentNode.parentNode.classList.remove("checked");
            }
        }
        e.checked = this.checked;
    }
    if (this.checked) {
        document.querySelector("#delete").classList.remove("hide");
    } else {
        document.querySelector("#delete").classList.add("hide");
    }
}

document.getElementById("delete").onclick = function () {
    const list = document.querySelectorAll(".check");
    for (let e of list) {
        if (e.checked) {
            e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
        }
    }
    this.classList.add("hide");
}

