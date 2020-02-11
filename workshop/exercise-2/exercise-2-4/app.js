// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (i=0; i<FROGS; i++){
    let laneId = 'lane'+(i+1)
    let spanId = 'span'+(i+1)
    let newLI = document.createElement('li');
    newLI.innerText = 'lane '+(i+1);
    // newLI.classList.add('Lane'+i)
    document.querySelector('#track').appendChild(newLI);
    newLI.id = laneId
    let span = document.createElement('span');
    span.id = spanId
    document.querySelector('#'+laneId).appendChild(span);
}
let racers = [];

for (i=1; i<=FROGS; i++){
    racers.push(frogStable[Math.floor(Math.random(frogStable) * frogStable.length)]);
}

for (i = 1; i<=racers.length; i++){
    key = '#lane'+ i;
    spanKey = '#span' + i;
    let newDiv1 = document.createElement('div');
    newDiv1.innerText = racers[(i-1)].name;
    document.querySelector(spanKey).appendChild(newDiv1)
    newDiv1.id = key + 'frog';
    let newDiv = document.createElement('div');
    newDiv.innerText = racers[(i-1)].number;
    document.querySelector(spanKey).appendChild(newDiv)
    newDiv.id = key + 'number';
    document.querySelector(spanKey).style.background = racers[(i-1)].color;
}
racers.forEach(function(prog){
    prog.progress = 0;
})
const spanFrog = document.querySelectorAll('#track > li > span')
for (i=0; i < spanFrog.length; i++ ){
    spanFrog[i].classList.add('frog');
};
const frogStyling = document.querySelectorAll('.frog');
for (i=0; i<frogStyling.length; i++){
    frogStyling[i].style.flexDirection = 'column';
}

function racingFrog (racer, i){
    let progress = racer.progress;
    trackLength = track.offsetWidth;
    
    // console.log(hopLength)
    const gunshot = setInterval(function() {
        let hopLength = (Math.floor(Math.random() * 100) / trackLength * 100);
        progress += hopLength;
        if (progress >= 100){
            progress = 100;
            
            console.log(racer.name + ' Finished');
            clearInterval(gunshot);
            ranking.push(racer);
        }
        document.getElementById(`span${i+1}`).style.left = `${progress}%`;
    }, Math.random() * 1000);
    
}

racers.forEach(function(racer, i){
    racingFrog(racer, i);
});
const ranking = [];
const raceEnd = setInterval(function(){
    if (ranking.length === FROGS){
        console.log(`${ranking[0].name} is victorious!`);
        console.log(`${ranking[1].name} is second!`);
        console.log(`${ranking[2].name} is third!`);
        clearInterval(raceEnd);
    }
}, 200)
