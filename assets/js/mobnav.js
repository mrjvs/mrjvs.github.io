var elements = document.getElementsByClassName('closeModal');
for (var i = 0, l = elements.length; i < l; i++) {
    elements[i].onclick = () => { closeModal(); };
}

var elements2 = document.getElementsByClassName('openModal');
for (var i = 0, l = elements2.length; i < l; i++) {
    elements2[i].onclick = () => { openModal(); };
}

function openModal() {
    document.getElementById("ModalContainer").classList.add("ModalOpen");
    document.getElementById("ModalOverlay").classList.add("ModalOpen");
}

function closeModal() {
    document.getElementById("ModalContainer").classList.remove("ModalOpen");
    document.getElementById("ModalOverlay").classList.remove("ModalOpen");
}