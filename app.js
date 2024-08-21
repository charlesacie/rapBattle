
let drakeHealth = 100;
console.log (drakeHealth)
let kendrickHealth = 100;

const drakeAttack1 = document.getElementById('drake-attack1');
console.log (drakeAttack1)
const drakeAttack2 = document.getElementById('drake-attack2');
const drakeAttack3 = document.getElementById('drake-attack3');


const kendrickAttack1 = document.getElementById('kendrick-attack1');
const kendrickAttack2 = document.getElementById('kendrick-attack2');
const kendrickAttack3 = document.getElementById('kendrick-attack3');

const drakeHealthDisplay = document.getElementById('drake-health');
const kendrickHealthDisplay = document.getElementById('kendrick-health');

const drakeSound1 = document.getElementById('0-To-100');
const drakeSound2 = document.getElementById('imUpset');
const drakeSound3 = document.getElementById('top5');

const kendrickSound1 = document.getElementById('WopWopWopWop');
const kendrickSound2 = document.getElementById('ahh');
const kendrickSound3 = document.getElementById('notlikeUs');

const drakeLoseSound = document.getElementById('aubsLoser'); 
const kendrickLoseSound = document.getElementById('kenloses'); 

drakeAttack1.addEventListener('click', () => {
    kendrickHealth -= 10;
    drakeSound1.play();
    updateHealth();
});

drakeAttack2.addEventListener('click', () => {
    kendrickHealth -= 15;
    drakeSound2.play(); 
    updateHealth();
});

drakeAttack3.addEventListener('click', () => {
    kendrickHealth -= 20;
    drakeSound3.play(); 
    updateHealth();
});

kendrickAttack1.addEventListener('click', () => {
    drakeHealth -= 10; 
    kendrickSound1.play(); 
    updateHealth();
});

kendrickAttack2.addEventListener('click', () => {
    drakeHealth -= 15;
    kendrickSound2.play(); 
    updateHealth();
});

kendrickAttack3.addEventListener('click', () => {
    drakeHealth -= 20;
    kendrickSound3.play(); 
    updateHealth();
});


function updateHealth() {
    drakeHealthDisplay.textContent = `Health: ${drakeHealth}`;
    kendrickHealthDisplay.textContent = `Health: ${kendrickHealth}`;

   
    if (drakeHealth <= 0) {
        alert('Kendrick wins!');
        drakeLoseSound.play();
        setTimeout(resetGame, 3000); 
    } else if (kendrickHealth <= 0) {
        alert('Drake wins!');
        kendrickLoseSound.play();
        setTimeout(resetGame, 3000);
    }
}

function resetGame() {
    drakeHealth = 100;
    kendrickHealth = 100;
    updateHealth();
}