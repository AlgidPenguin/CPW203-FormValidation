window.onload = function() {
    let regBtn = <HTMLElement>document.querySelector("form > button");

    regBtn.onclick = main;
}

function main():void {
    alert("Reg button was clicked");
}