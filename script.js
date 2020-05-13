let urlText = document.getElementById('urlText');
let urlInput = document
    .getElementById('urlInput')
    .value;
let imageCont = document.getElementById('avatarId');
function imgChange() {

    imageCont.src = urlInput;
    urlText.href = urlInput;
}

function imgRand() {
    const id = Math.round(Math.random() * (10 - 5)) + 5;
    let imageScr = `img/${id}.jpg`;
    imageCont.src = imageScr;
}
