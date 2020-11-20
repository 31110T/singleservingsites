function eraseScript() {
    var headingCon = document.querySelector("h1").outerHTML;
    var headingString = String(headingCon);
    document.querySelector("h1").innerHTML = " <textarea readonly>" + headingString + "</textarea>";
}

function eraseP() {
    var pCon = document.querySelector("body").outerHTML;
    var pString = String(pCon);
    document.querySelector("p").innerHTML = " <textarea readonly>" + pString + "</textarea>";
}