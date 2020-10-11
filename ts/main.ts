window.onload = function() {
    let regBtn = <HTMLElement>document.querySelector("form > button");

    regBtn.onclick = main;
}

function main():void {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}

/**
 * Returns true if the textbox with the given id
 * has text inside, false otherwise
 * @param id The id of the <input type="text"> to validate
 * @param errMsg Desired message to display in the sibling
 * span of the textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);

    let txtBoxValue = txtBox.value;

    if (txtBoxValue == "") {
        let errorSpan = <HTMLElement>txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}
