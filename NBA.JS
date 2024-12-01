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

const ulParent = document.createElement('ul');
const body = document.querySelector('body')
body.appendChild(ulParent);
for( match of matchesClassico){
     const ilMatch = document.createElement('li')
    const names = (match.homeTeam.goals > match.awayTeam.goals) ? 
    `<b>${match.homeTeam.teamName}</b>@${match.awayTeam.teamName}`: `${match.homeTeam.teamName}@<b>${match.awayTeam.teamName}</b>`
    const goals = `${match.homeTeam.goals} - ${match.awayTeam.goals}`;
    if(match.homeTeam.isWinner){
        ilMatch.classList.add('winner')
    }
    else {
        ilMatch.classList.add('loser')
    }
    ilMatch.innerHTML = `${names}/${goals}`;
    ilMatch.style.fontSize = '20px';
    ilMatch.style.textAlignLast = 'center';
    ulParent.appendChild(ilMatch);


}