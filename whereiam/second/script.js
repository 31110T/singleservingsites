// function changeBody() {
//     document.getElementById("move").style.display = "none";

//     document.onmousemove = function changeMove(event) {
//         let x = event.offsetX;
//         let y = event.offsetY;

//         document.getElementById('screen2').style.display = "block";
//         document.getElementById('outmove').innerHTML = "this is where you are <br> 0 0";
//         document.getElementById('outmove').style.width = "100px"
//         var circle = `<div class="patternunit" 
//         // style=" transform:skewX(${x}deg);  
//         // transform:skewY(${y}deg); 
//         transform:matrix(${x},${y},${x},${y},${x}x,${y}y);">    <p>this page has a head and a body and you have altered my body</p></div>`;

//         document.getElementById('centercircle').innerHTML = circle;
//     }
// }


// var i = 1;
// var appendlineFunction = function() {
//     var line = `<div class="patternunit2" style="
//    animation: infinite 20s animateMe; 
//    left: ${Math.round() * 10};
//    "></div>`;
//     document.getElementById("screen2").insertAdjacentHTML("beforeend", line);

//     if (i >= 10) {
//         // defining the maximum amount of cycles
//         clearInterval(myAnimating);
//     }
//     i++;
// };
// var myLine = setInterval(appendlineFunction, 200);

var i = 1;

function iterateObj() {


    var obj = `<div class="obj"
    style="
    background-color:${i};
    "></div>`;
    if (i & 1) {
        i = "#000000"
    } else {
        i = "#ffffff"
    }
    document.getElementById("screen2").insertAdjacentHTML("beforeend", obj);

    if (i >= 10) {
        // defining the maximum amount of cycles
        clearInterval();
    }
    i++;

};
var myObj = setInterval(iterateObj, 1);