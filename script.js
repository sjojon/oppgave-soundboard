//model
const sounds = ['Birds', 'Flute', 'Retro', 'Trombone', 'Fanfare', 'Vacuum'];

//view
function view() {
    document.getElementById('app').innerHTML = /*html*/`
    <audio id="Birds" src="sounds/birds-singing.wav"></audio>
    <audio id="Flute" src="sounds/melodical-flute.wav"></audio>
    <audio id="Retro" src="sounds/retro-game-over.wav"></audio>
    <audio id="Trombone" src="sounds/sad-game-over-trombone.wav"></audio>
    <audio id="Fanfare" src="sounds/trumpet-fanfare.wav"></audio>
    <audio id="Vacuum" src="sounds/vacuum-swoosh-transition.wav"></audio>
    <div id="buttons"></div>
    `;
}
view();

//controller
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}