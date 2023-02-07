function start_classify() {

    // this is used for turning on the miscrophone of the user
    navigator.mediaDevices.getUserMedia({
        audio: true
    });



    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5ZNKuOzTT/model.json", model_ready);
}


function model_ready() {
    console.log("Model is Ready");
    classifier.classify(got_results);
}

function got_results(error, results) {
    // this shows if there is any error or not in the codes
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        label = results[0].label;
        confidence = (results[0].confidence * 100).toFixed(2);


        //this is used to change the color of the label to random colors
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        r_color = "rgb(" + r + "," + g + "," + b + ")";


        document.getElementById("hear").style.color = r_color;
        document.getElementById("Accuracy").style.color = r_color;

        document.getElementById("hear").innerHTML = "I can hear - " + label;
        document.getElementById("Accuracy").innerHTML = "Accuracy - " + confidence + "%";
        // rgb(r,g,b)
        // r = random number 0-255


        Alien_1 = document.getElementById("alien1");
        Alien_2 = document.getElementById("alien2");
        Alien_3 = document.getElementById("alien3");
        Alien_4 = document.getElementById("alien4");


        //Switch
        //Background Noise
        //Scissors
        //Clap

        if (label == "Switch") {
            //this is used to make the aliens move when they hear a specific sound

            Alien_1.src = "aliens-01.gif";
            Alien_2.src = "aliens-02.png";
            Alien_3.src = "aliens-03.png";
            Alien_4.src = "aliens-04.png";
        } else if (label == "Scissors") {
            Alien_1.src = "aliens-01.png";
            Alien_2.src = "aliens-02.gif";
            Alien_3.src = "aliens-03.png";
            Alien_4.src = "aliens-04.png";
        } else if (label == "Clap") {
            Alien_1.src = "aliens-01.png";
            Alien_2.src = "aliens-02.png";
            Alien_3.src = "aliens-03.gif";
            Alien_4.src = "aliens-04.png";
        } else if (label == "Background Noise") {
            Alien_1.src = "aliens-01.png";
            Alien_2.src = "aliens-02.png";
            Alien_3.src = "aliens-03.png";
            Alien_4.src = "aliens-04.gif";
        }


    }
}