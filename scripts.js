var planet;
var projArr = ['img1.png','img2.png','img3.png','img4.png','img5.png','img6.png','img7.png','img8.png','img9.png','img10.png'];
var projName = ['Project1','Project2','Project3','Project4','Project5','Project6','Project7','Project8','Project9','Project10']; //must be same size with projArr
let bgColor = "black";
let bgImage = "bg";
let scrollSpd = 200; //speed of travel to and from planets projects
let currPos = -200; //basis for movement limit; if zoom is already at min or max; current position of zoom
var distance = 800; //distance of each planet projects to each other
var min = -200; //minimum value of zoom// starts here when loaded
var max = (min - (distance * (projArr.length-1)))-500; //maximum value of zoom// contact slide pops up here //500 is just an allowance for the last slide to look good
let planetPos = [["10vw","50vw"],["10vw","20vw"],["25vw","30vw"],["30vw","60vw"],["10vw","50vw"],["20vw","30vw"],["10vw","60vw"],["10vw","20vw"],["25vw","30vw"],["18vw","45vw"]]; //top left; needs to be user managed since its up to them to place the PPS wherever they want
let planetDepth = []; //will contain the depth of each project planet based on user's inputted number of values in projArr. Updates with a new value (+ or - scroll speed) when user scrolls.

let universe= document.getElementById("universe");
let planetCt = projArr.length-1;

var temp = projArr.length-1;

window.onload = function() {
    init();
    loadPlanets();
}

function init() {
    //Setting the universe background
    $("#universe").css('background-color',bgColor);
    /*
    Uncomment below if you want to use image instead.
    $("#universe").css('background-image', 'url(media/' + bgImage + '.jpg)');
    $("#universe").css('background-repeat', 'no-repeat');
    $("#universe").css('background-size', '100% 100%');
    */
}

function loadPlanets() {
    for(let i = 0; i < projArr.length; i++){
        planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.backgroundImage = "url(media/" + projArr[i] + ")";
        planet.style.backgroundRepeat = "no-repeat";
        planet.style.backgroundSize = "100% 100%";
        planet.style.top = planetPos[i][0];
        planet.style.left = planetPos[i][1];
        planet.innerText = projName[i];
        planet.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0," + (min - (distance * i)) + ",1)";
        planetDepth[i] = min - (distance * i);
        planet.style.zIndex = temp--;
        universe.appendChild(planet);
    }
}

window.addEventListener("wheel", function(e) {
    if (e.deltaY < 0) { if(currPos > max){ currPos-=scrollSpd; zoom("in"); }}
    else if (e.deltaY > 0) {if(currPos < min){ currPos+=scrollSpd; zoom("out"); }}
})

function zoom(dir){
    if(dir == "in"){
        for(var i = 0; i <= projArr.length-1; i++){ //let all projects hop the speed towards the screen
            planetDepth[i] += scrollSpd;
            $('.planet').get(i).style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0," + planetDepth[i] + ", 1)";
        }
    }
    else if(dir == "out"){
        for(var i = 0; i <= projArr.length-1; i++){ //let all projects hop the speed towards the screen
            planetDepth[i] -= scrollSpd;
            $('.planet').get(i).style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0," + planetDepth[i] + ", 1)";
        }
    }
}