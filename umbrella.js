// function for handle colors of Background & Button

function handleChangeColor(color) {
    var iconUpload = document.getElementById("uplaod")
    var loaderUpdateIcon = document.getElementById("loaderUpdate")
    var colorUpdate = document.getElementById("body");
    var updatedImage = document.getElementById("umbrella_img")
    var buttonColor = document.getElementById("button")
    document.getElementById("loader").style.visibility = "visible"
    updatedImage.style.visibility = "hidden"
    var output = document.getElementById('uploadFile')
    output.style.visibility = "hidden"
    setTimeout(() => {
        document.getElementById("loader").style.visibility = "hidden"
        updatedImage.style.visibility = "visible"
        if (color == 'blue') {
            updatedImage.src = "image/Blue umbrella.png"
            colorUpdate.style.backgroundColor = "lightblue"
            buttonColor.style.backgroundColor = "rgb(49, 195, 244)"
        } else if (color == 'pink') {
            updatedImage.src = "image/Pink umbrella.png"
            colorUpdate.style.backgroundColor = "pink"
            buttonColor.style.backgroundColor = "rgb(222, 58, 146)"
        }
        if (color === 'yellow') {
            updatedImage.src = "image/Yello umbrella.png"
            colorUpdate.style.backgroundColor = "rgb(224, 235, 179)"
            buttonColor.style.backgroundColor = "rgb(224, 224, 85)"
        }
    }, 1000)
}

// updateList add the logo 

function updateList() {
    var updatedImage = document.getElementById("umbrella_img")
    var iconUpload = document.getElementById("upload_img")
    var loaderUpdateIcon = document.getElementById("loaderUpdate")
    var input = document.getElementById('file-input');
    var output = document.getElementById('uploadFile');
    updatedImage.style.visibility = "hidden"
    if (input.value.length) {
        var filename = document.getElementById('button')
        filename.innerHTML = input.files.item(0).name
        loaderUpdateIcon.style.visibility = "visible"
        iconUpload.style.visibility = "hidden"
        setTimeout(() => {
            var loader = document.getElementById("loader").style.visibility = "hidden"
            updatedImage.style.visibility = "visible"
            var output = document.getElementById('uploadFile')
            output.style.visibility = "visible"
            var oFReader = new FileReader();
            oFReader.readAsDataURL(document.getElementById("file-input").files[0]);
            oFReader.onload = function (oFREvent) {
                output.src = oFREvent.target.result;
                output.style.width = "50px";
                output.style.height = "50px";
            }
            loaderUpdateIcon.style.visibility = "hidden"
            iconUpload.style.visibility = "visible"

        }, 2000)
    }
    else {
        loader.style.visibility = "hidden"
        updatedImage.style.visibility = "visible"
    }
}

// hanldeLoader handle the loading button when we upload logo

function hanldeLoader(value) {
    var iconUpload = document.getElementById("upload_img")
    var loaderUpdateIcon = document.getElementById("loaderUpdate")
    var updatedImage = document.getElementById("umbrella_img")
    var output = document.getElementById('uploadFile')
    if (true) {
        iconUpload.style.visibility = "hidden"
        loaderUpdateIcon.style.visibility = "visible"
        document.getElementById("loader").style.visibility = "visible"
        updatedImage.style.visibility = "hidden"
        output.style.visibility = "hidden"
    };

    setTimeout(() => {
        value = false;
        if (value == false) {
            iconUpload.style.visibility = "visible"
            loaderUpdateIcon.style.visibility = "hidden"
            updateList()
        }
    }, 1000)
    iconUpload.style.visibility = "hidden"
}