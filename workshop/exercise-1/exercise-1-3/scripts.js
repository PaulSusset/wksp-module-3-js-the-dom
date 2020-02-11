console.log('...crickets...');
const paragraph1 = document.createElement('p');
const paragraph2 = document.createElement('p');
const paragraph3 = document.createElement('p');
const paragraph4 = document.createElement('p');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const image = document.createElement('img');
const anchor = document.createElement('a');
const JSLink = document.createElement('link');


paragraph1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
paragraph2.innerText = 'IMDB Rating: 9.5';
paragraph3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
paragraph4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
h1.innerText = 'The best How I Met Your Mother episode (according to fans)';
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';
image.src = src="./images/robin-sparkles.jpg";
image.alt = 'alt="Robin Sparkles';
anchor.href = 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/';
anchor.innerText = 'Source';
// JSLink.rel = 'stylesheet';
// JSLink.href = "./styles.css";
// JSLink.classList.add('css');

h1.classList.add('titleStyle');
h2.classList.add('subTStyle');
h2.classList.add('titleStyle');
paragraph1.classList.add('pStyle');
paragraph2.classList.add('pStyle');
paragraph3.classList.add('pStyle');
paragraph4.classList.add('pStyle');
image.classList.add('robin');
anchor.classList.add('link');

document.getElementById('main').appendChild(h1);
document.getElementById('main').appendChild(paragraph1);
document.getElementById('main').appendChild(h2);
document.getElementById('main').appendChild(paragraph2);
document.getElementById('main').appendChild(image);
document.getElementById('main').appendChild(paragraph3);
document.getElementById('main').appendChild(paragraph4);
document.getElementById('main').appendChild(anchor);
document.querySelector('head').appendChild(JSLink);


const bodies = document.querySelector('body');
bodies.style.background = 'rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat';
bodies.style.backgroundSize = '100%';
bodies.style.fontFamily = '"Playfair Display", serif';

const divStyle = document.getElementById('main');
divStyle.style.background = "#fafafa";
divStyle.style.borderRadius = '4px';
divStyle.style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, .44)';
divStyle.style.minWidth = '320px';
divStyle.style.maxWidth = '600px';
divStyle.style.margin = '36px';
divStyle.style.padding = '4px 32px 32px';

const hStyling = document.querySelectorAll('.titleStyle');
for (let i=0; i < hStyling.length; i++){
    hStyling[i].style.fontFamily = '"Open sans", sans-serif';
    hStyling[i].style.textAlign = 'center';
    console.log(hStyling[i])
};
// hStyling.style.fontFamily = '"Open sans", sans-serif';
// hStyling.style.textAlign = 'center';

const subtitle = document.querySelector('.subTStyle')
subtitle.style.textAlign = 'left';

const pLoop = document.querySelectorAll('.pStyle')
console.log(pLoop)
for (let i=0; i < pLoop.length; i++){
    pLoop[i].style.fontSize = '17px';
    pLoop[i].style.lineHeight = '1.5em';
    console.log(pLoop)
};

const imgStyle = document.querySelector('.robin');
imgStyle.style.border = '#fafafa';
imgStyle.style.borderRadius = '4px';
imgStyle.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, .4)';
imgStyle.style.width = '100%';

const linkS = document.querySelector('.link');
linkS.style.color = '#174E7C';
linkS.style.display = 'block';
linkS.style.fontWeight = '700';
linkS.style.marginTop = 'auto';
linkS.style.textAlign = 'right';
linkS.style.textDecoration = 'none';