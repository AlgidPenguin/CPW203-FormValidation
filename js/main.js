window.onload = function () {
    var regBtn = document.querySelector("form > button");
    regBtn.onclick = main;
};
function main() {
    clearErrorSpans();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy";
    }
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
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
