//get the camera of the client device
var video = document.querySelector("video");
var constraints = { video: { facingMode: "environment", width: 640, height: 480 } };
navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    //if the client device does not have a camera or the user does not allow the camera to be used alert the user 
    .catch(function (err) { alert("No camera available"); });