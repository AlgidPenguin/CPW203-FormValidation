window.onload = function() {
    let regBtn = <HTMLElement>document.querySelector("form > button");

    regBtn.onclick = main;
}

/**
 * Change the heading to a random color when clicked
 */
function changeHeading() {
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);

    heading.style.color = "rgb(" + red + "," + green + "," + blue + ")";
}

function main():void {
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    
    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    msgHeading.onclick = changeHeading;


    setTimeout(function(){
        msgHeading.remove();
    }, 4000)

    clearErrorSpans();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    
    checkValidDate();
}

function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy";
    }
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

/**
 * Resets all the error spans back to default
 */
function clearErrorSpans():void {
    let errorSpans = document.querySelectorAll("form > span");

    for(let i = 0; i < errorSpans.length; i++) {
        let currSpan = <HTMLElement>errorSpans[i];
        
        if(currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }

        else {
            currSpan.innerText = "";
        }
    }
}

function isValidDate(input:string):boolean{
    // mm/dd/yyyy

    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}
