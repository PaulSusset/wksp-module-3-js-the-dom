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
JSLink.rel = 'stylesheet';
JSLink.href = "./styles.css";
JSLink.classList.add('css');

h1.classList.add('titleStyle');
h2.classList.add('subTStyle');
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
