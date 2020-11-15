const round = document.querySelector("#round_number");
const ty_result = document.querySelector("#ty_result");
const ai_result = document.querySelector("#ai_result");
let remis;
let counterTab = [];

const resetStats = () => {
    remis = 0;
    round.textContent = 0;
    ty_result.textContent = 0;
    ai_result.textContent = 0;
    counterTab = [0,0,0];
};
resetStats();
const iconTab = [`<i class='icon-hand-paper-o'></i>`,`<i class='icon-hand-grab-o'></i>`,`<i class='icon-hand-scissors-o'></i>`];
const winningTab = [[1,2],[2,0],[0,1]];

[...document.querySelectorAll('.game-element')].forEach(function(element, index){
    element.addEventListener('click', function() {
        const ai = Math.floor(Math.random()*3);
        round.textContent++;
        document.querySelector("#ty_choice").innerHTML = iconTab[index];
        document.querySelector("#ai_choice").innerHTML = iconTab[ai];
        if(index === ai){
            remis++;
        }else{
            if(winningTab[index][0] === ai){
                ty_result.textContent++;
            }
            else{
                ai_result.textContent++;
            }
        }
        counterTab[index]++;
    });
});

document.querySelector("#reset").addEventListener('click', resetStats);
document.querySelector("#stats").addEventListener('click', () => alert(`TWOJE STATYSTYKI:\n\nWygrane: ${ty_result.textContent}\nPrzegrane: ${ai_result.textContent}\nRemisy: ${remis}\n\nPapiery: ${counterTab[0]}\nKamienie: ${counterTab[1]}\nNożyczki: ${counterTab[2]}`));


//0 - papier
//1 - kamień
//2 - nożyczki

// 0 wygrywa z 1 przegrywa z 2
// 1 wygyrwa z 2 przegrywa z 0
// 2 wygrywa z 0 przegrywa z 1

// [[1,2],
//  [2,0],
//  [0,1]]
