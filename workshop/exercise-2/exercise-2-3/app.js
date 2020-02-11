// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (i=0; i<FROGS; i++){
    let laneId = 'lane'+(i+1)
    let spanId = 'span'+(i+1)
    let newLI = document.createElement('li');
    newLI.innerText = 'Lane';
    // newLI.classList.add('Lane'+i)
    document.querySelector('#track').appendChild(newLI);
    newLI.id = laneId
    let span = document.createElement('span');
    console.log(span)
    span.id = spanId
    document.querySelector('#'+laneId).appendChild(span);
}
let racers = [];

for (i=1; i<=FROGS; i++){
    racers.push(frogStable[Math.floor(Math.random(frogStable) * FROGS)]);
}
console.log(racers);

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
console.log(racers)

