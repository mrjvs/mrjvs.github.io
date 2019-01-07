function openBox() {
    document.getElementById('box-container').classList.add('open');
}

function nextCard(el) {
    var hiddencard = document.getElementsByClassName('card-hide');
    if (hiddencard.length > 0) {
        hiddencard[0].parentNode.removeChild(hiddencard[0]);
    }
    el.classList.add('card-hide');
    var notshowncard = document.getElementsByClassName('card-notshown');
    if (notshowncard.length > 0) {
        notshowncard[0].classList.remove('card-notshown');
    }
}