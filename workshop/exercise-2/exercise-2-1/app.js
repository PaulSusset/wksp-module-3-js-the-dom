// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (i=0; i<FROGS; i++){
    let laneId = 'lane'+(i+1)
    let newLI = document.createElement('li');
    newLI.innerText = 'Lane';
    // newLI.classList.add('Lane'+i)
    document.querySelector('#track').appendChild(newLI);
    newLI.id = laneId
    let span = document.createElement('span');
    console.log(span)
    document.querySelector('#'+laneId).appendChild(span);
}
    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane
