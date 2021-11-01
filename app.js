const p1 = {
    update : 0,
    button : document.querySelector('#p1button'),
    score : document.querySelector('#p1score')
}
const p2 = {
    update :0,
    button : document.querySelector('#p2button'),
    score : document.querySelector('#p2score')
}

const reset = document.querySelector('#reset');
const range = document.querySelector('#range');

let winningScore = 5;
let isGameOver = false;


function updateScore(player, opponent){
    if(!isGameOver){
        player.update++;
        if(player.update===winningScore){
            isGameOver = true;
            player.score.classList.add("winner");
            opponent.score.classList.add("loser");
            opponent.button.disabled = true;
            player.button.disabled = true;
            player.button.style.backgroundColor='green';
            opponent.button.style.backgroundColor= 'red';  
        }
        player.score.textContent = player.update;
        }
}

range.addEventListener('change', function(){
    winningScore = parseInt(range.value);
    resett();
})

p1.button.addEventListener('click', function(){ 
  updateScore(p1,p2);
})

p2.button.addEventListener('click', () =>{ 
   updateScore(p2,p1);
})


reset.addEventListener('click',resett)

function resett(){
    isGameOver=false;
    for(let p of [p1,p2]){
        p.update = 0;
        p.score.textContent = p.update;
        p.score.classList.remove("winner", "loser");
        p.button.disabled =false;
    }
   
    p2.button.style.backgroundColor='#00d1b2';
        p1.button.style.backgroundColor= '#3298dc'; 
}

