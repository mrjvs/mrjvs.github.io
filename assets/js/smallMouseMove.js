var movementRadius = 20
function moveElements(event) {

    if (window.innerWidth <= 940) return;

    var str = calculateTranslate(event.clientX, event.clientY, window.innerWidth, window.innerHeight);
    var elements = document.getElementsByClassName('move-mouse');
    for (var i = 0, l = elements.length; i < l; i++) {
        elements[i].style.transform = str;
    }
}

function calculateTranslate(x, y, screenWidth, screenHeight) {

    var pixelsX = ( x / screenWidth * movementRadius ) - (movementRadius / 2);
    var pixelsY = ( y / screenHeight * movementRadius ) - (movementRadius / 2);

    return 'translate(' + pixelsX + 'px, ' + pixelsY + 'px)';
}

document.onmousemove = moveElements;