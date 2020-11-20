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

    document.getElementById("positions").insertAdjacentHTML('afterbegin', ` 
    <div class="trail" style= "
    left:${x}px;  
    top:${y}px;
    font-size: ${y/20}px;
    ">(${x+40},${y+40})
    </div>  `);
    // document.getElementById("move").insertAdjacentHTML('afterbegin', y);
}