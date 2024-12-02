const matchesClassico = [
    {
        homeTeam : {
            teamName : "manU",
            goals : 3,
            isWinner : true
        },
        awayTeam : { 
            teamName : "liverPool",
            goals : 2,
            isWinner: false

        }
    },
    {
        homeTeam : {
            teamName: "manU",
            goals: 1,
            isWinner: true
        },
        awayTeam : {
            teamName : "liverPool",
            goals : 0,
            isWinner : false,
        }
    },
    {
        homeTeam : {
            teamName : "manU",
            goals : 0,
            isWinner : false
        },
        awayTeam : {
            teamName : "liverPool",
            goals : 7,
            isWinner : true
        }
    }
]
const chart = (data, teamName) => {
const ulParent = document.createElement('ul');

for( const match of data){
   const liMatch = document.createElement('li');
   const scoreLine = getScoreLine(match, teamName);
   if(isWinner(match, teamName)){ liMatch.classList.add('winner')} 
   else{liMatch.classList.add('loser')}
   liMatch.innerHtml = scoreLine;
   ulParent.appendChild(liMatch);
}
 return ulParent;
}
const isWinner = ( {homeTeam, awayTeam}, target) => {
      const theTarget = homeTeam.teamName === target  ? homeTeam: awayTeam;
      const otherTeam = homeTeam.teamName !== target  ? homeTeam: awayTeam;
      const winner = (theTarget.goals > otherTeam.goals )
      return winner;
}
const getScoreLine = ({homeTeam, awayTeam}, target) => {
    const data = {homeTeam, awayTeam};

    const scoreLine = isWinner(data, target) ? `<b>${homeTeam.teamName}(${homeTeam.goals}) </b> -${awayTeam.teamName} (${awayTeam.goals})` : `${homeTeam.teamName}(${homeTeam.goals}) -<b>${awayTeam.teamName}(${awayTeam.goals})</b>`;
     return scoreLine;
}

document.body.appendChild(chart(matchesClassico), 'liverPool');
document.body.appendChild(chart(matchesClassico), 'manU');