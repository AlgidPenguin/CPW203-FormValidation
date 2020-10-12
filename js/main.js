window.onload = function () {
    var regBtn = document.querySelector("form > button");
    regBtn.onclick = main;
};
function main() {
    clearErrorSpans();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errorSpan = txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function clearErrorSpans() {
    var errorSpans = document.querySelectorAll("form > span");
    for (var i = 0; i < errorSpans.length; i++) {
        var currSpan = errorSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
