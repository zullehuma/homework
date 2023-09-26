button = document.getElementById("troll_button");

function troll(){
    button.textContent = "Mhmm.....";
    document.getElementById("text").innerHTML = "Andrew tate says 'DO IT YOUR SELF!'";
    document.getElementById("andrew_tate").src = "andrew_tate.gif";
    var audio = document.createElement("audio");
    audio.src = "Andrew Tate Theme - TOP G.mp3";
    audio.autoplay = true;
    audio.volume = 0.2;
    audio.loop = true;

    audio.play();
}