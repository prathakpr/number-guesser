let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = ()=> Math.floor(Math.random()*10);

const compareGuesses = (user,computer,target) => 
{
  if(user === computer) return true;
  else if( Math.abs(target - user) < Math.abs(target - computer) ) return true;
  else return false;
}

const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber +=1;

