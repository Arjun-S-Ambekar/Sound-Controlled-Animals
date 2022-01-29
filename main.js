function classify(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UrKm07Rw4/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Loaded!");
}