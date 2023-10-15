const keypad = document.Keypad;

let currentResult = 0;
let checkNewNum = false;
let PendingOp = "";

// Hàm cập nhật màn hình
function updateScreen(value) {
    keypad.screen.value = value;
}

function addNumber(Num) {
    const numValue = parseFloat(Num);
    updateScreen(checkNewNum ? numValue : (keypad.screen.value === "0" ? numValue : keypad.screen.value + numValue));
    checkNewNum = false;
}

// Hàm thực hiện các phép toán
function sol(Op) {
    const Readout = parseFloat(keypad.screen.value);
    if (!checkNewNum || PendingOp === "=") {
        checkNewNum = true;
        switch (PendingOp) {
            case '+':
                currentResult += Readout;
                break;
            case '-':
                currentResult -= Readout;
                break;
            case '/':
                if (Readout !== 0) {
                    currentResult /= Readout;
                } else {
                    updateScreen("Error");
                    return;
                }
                break;
            case '*':
                currentResult *= Readout;
                break;
            default:
                currentResult = Readout;
                break;
        }
        updateScreen(currentResult);
        PendingOp = Op;
    }
}

function Decimal() {
    let curReadOut = keypad.screen.value;
    curReadOut = checkNewNum ? "0." : (curReadOut.indexOf(".") === -1 ? curReadOut + "." : curReadOut);
    updateScreen(curReadOut);
    checkNewNum = false;
}

// Hàm xóa số vừa nhập
function ClearEntry() {
    const currentScreenValue = keypad.screen.value;
    if (currentScreenValue.length > 1) {
        const newScreenValue = currentScreenValue.substring(0, currentScreenValue.length - 1);
        updateScreen(newScreenValue);
    } else {
        updateScreen("0");
    }
}


function ClearAll() {
    currentResult = 0;
    PendingOp = "";
    updateScreen("0");
    checkNewNum = true;
}

function Negative() {
    updateScreen(parseFloat(keypad.screen.value) * -1);
}

function Percent() {
    const Readout = parseFloat(keypad.screen.value);
    if (currentResult !== 0) {
        updateScreen((Readout / 100) * currentResult);
    }
}
