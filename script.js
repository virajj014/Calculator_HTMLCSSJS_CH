let bracketflag = 0;
function addtodisplay(myval) {
    var display = document.getElementById("display");

    if (myval == "AC") {
        display.value = "";
    }
    else if (myval == "()") {

        if (bracketflag == 0) {
            display.value += "(";
            bracketflag = 1;
        }
        else {
            display.value += ")";
            bracketflag = 0;
        }
    }
    else if (myval == "=") {
        try {
            display.value = eval(display.value);
        }
        catch {
            display.value = "Invalid Format";
        }
    }

    else {
        display.value += myval;
    }
}