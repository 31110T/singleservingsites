document.onmousemove = function mousePosition(event) {
    let x = event.offsetX;
    let y = event.offsetY;

    // if (x & 1) {
    //     x = "▒"
    // } else {
    //     x = "█"
    // }
    // if (y & 1) {
    //     y = "▓"
    // } else {
    //     y = "░"
    // }

    document.getElementById("move").insertAdjacentHTML('afterbegin', ` ${x} <button onclick="changeBody()">  change my body</button `);
    document.getElementById("move").insertAdjacentHTML('afterbegin', y);


}

function changeBody() {
    document.getElementById("move").style.display = "none";

    document.onmousemove = function changeMove(event) {
        let x = event.offsetX;
        let y = event.offsetY;

        document.getElementById('center').style.display = "block";
        document.getElementById('outmove').innerHTML = "this is where you are <br> 0 0";
        document.getElementById('outmove').style.width = "100px"
        var circle = `<div class="patternunit" 
        // style=" transform:skewX(${x}deg);  
        // transform:skewY(${y}deg); 
        transform:matrix(${x},${y},${x},${y},${x}x,${y}y);">    <p>this page has a head and a body and you have altered my body</p></div>`;

        document.getElementById('centercircle').innerHTML = circle;
    }
}


var i = 1;
var appendlineFunction = function() {
    var line = `<div class="patternunit2" style="
   animation: infinite 20s animateMe; 
   left: ${Math.round() * 10};
   "></div>`;
    document.getElementById("center").insertAdjacentHTML("beforeend", line);

    if (i >= 10) {
        // defining the maximum amount of cycles
        clearInterval(myAnimating);
    }
    i++;
};
var myLine = setInterval(appendlineFunction, 200);




// function getDate() {
//     
// }

// window.onload = function mousePosition() {
//     setInterval(mousePosition, 2100);
//     //setInterval(getDate, 100);
// }



// // 1. Store interface element in a variable
// var element3 = document.querySelector('#move');
// // 2. Define the functionality that will happen on click
// var example3Event = function(event) {
//     // x and y coordinates for cursor
//     var x = event.offsetX / 5;
//     var y = event.offsetY / 5;

//     var elem = document.getElementById("wrapper");
//     elem.style.transform = 'skew(' + x + 'deg)';

// };
// // 3. Connect function and click event to interface element
// element3.addEventListener('mousemove', example3Event);




// var i = 1;

// function iterateCircle() {
//     var circle = `<div class="patternunit" style="
//    left:${i * 20}px;"></div>`;
//     document.getElementById("box").insertAdjacentHTML("beforeend", circle);

//     if (i >= 10) {
//         // defining the maximum amount of cycles
//         clearInterval();
//     }
//     i++;

// };
// var myCircle = setInterval(iterateCircle, 1000);



// Getting 'Info' div in js hands

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
// var i = 1;

// function tellPos(p) {
//     document.getElementById("info").insertAdjacentHTML("beforeend", 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY);

//     addEventListener('mousemove', tellPos, false);

//     if (i >= 10) {
//         // defining the maximum amount of cycles
//         clearInterval();
//     }
//     i++;

// };
// var position = setInterval(tellPos, 1000);