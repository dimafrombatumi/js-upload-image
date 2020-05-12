function imgChange() {

    let urlInput = document
        .getElementById('urlInput')
        .value;
    let imageCont = document.getElementById('avatarId');
    imageCont.src = urlInput;
    let isUpload = true;
}

document.getElementById("test").innerHTML = '<ul><li>1</li><li>2</li><li>3</li></ul>';