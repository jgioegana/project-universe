var planet;
var link;
var projArr = [
    'img1.png','img2.png','img3.png',
    'img4.png','img5.png','img6.png',
    'img7.png','img8.png','img9.png',
    'img10.png'
];
var projName = [
    'Alpha','Beta','Charlie',
    'Delta','Echo','Foxtrot',
    'Golf','Hotel','India',
    'Juliett'
];
var projLink = [
    'https://www.gioreyes.me','https://www.gioreyes.me','https://www.gioreyes.me',
    'https://www.gioreyes.me','https://www.gioreyes.me','https://www.gioreyes.me',
    'https://www.gioreyes.me','https://www.gioreyes.me','https://www.gioreyes.me',
    'https://www.gioreyes.me'
];
let planetPos = [
    ["20vh","50vw"],["20vh","20vw"],["50vh","30vw"],
    ["60vh","60vw"],["20vh","50vw"],["40vh","30vw"],
    ["20vh","60vw"],["20vh","20vw"],["50vh","30vw"],
    ["39vh","45vw"]
];
let bgColor = "black";
let bgImage = "media/bg.jpg";
let scrollSpd = 200;
var currPos = -200;
let distance = 800;
var min = -200;
var max = (min - (distance * (projArr.length-1)))-500;
let planetDepth = [];

let universe= document.getElementById("universe");
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
    $("#universe").css('background-image', 'url(bgImage)');
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

        link = document.createElement('a');
        link.style.textDecoration = "none";
        link.style.color = "white";
        link.href = projLink[i];
        link.innerText = projName[i];
        planet.append(link);

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
        for(var i = 0; i <= projArr.length-1; i++){
            planetDepth[i] += scrollSpd;
            $('.planet').get(i).style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0," + planetDepth[i] + ", 1)";
        }
    }
    else if(dir == "out"){
        for(var i = 0; i <= projArr.length-1; i++){
            planetDepth[i] -= scrollSpd;
            $('.planet').get(i).style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0," + planetDepth[i] + ", 1)";
        }
    }
}