window.onload = function () {
    var regBtn = document.querySelector("form > button");
    regBtn.onclick = main;
};
function changeHeading() {
    var heading = this;
    var red = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    heading.style.color = "rgb(" + red + "," + green + "," + blue + ")";
}
function main() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    msgHeading.onclick = changeHeading;
    setTimeout(function () {
        msgHeading.remove();
    }, 4000);
    clearErrorSpans();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    checkValidDate();
}
function checkValidDate() {
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
