function imgChange() {
    let urlText = document.getElementById('urlText');

    let urlInput = document
        .getElementById('urlInput')
        .value;
    let imageCont = document.getElementById('avatarId');
    imageCont.src = urlInput;
    urlText.href = urlInput;
}