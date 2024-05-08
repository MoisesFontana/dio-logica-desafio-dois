const rankTable = [
   { victories: 10, rank: "Ferro" },
   { victories: 20, rank: "Bronze" },
   { victories: 50, rank: "Prata" },
   { victories: 80, rank: "Ouro" },
   { victories: 90, rank: "Diamante" },
   { victories: 100, rank: "Lendário" }
]
//===============================================
//=== Mude a quantidade de vitórias aqui ========
//===============================================
const numberOfVictories = 100;

//============================================
//=== Mude a quantidade de derrotas aqui =====
//============================================
const numberOfDefeats = 0;


function calculateWinningBalance(numberOfVictories, numberOfDefeats) {
   return balance = numberOfVictories - numberOfDefeats;
}

function calculateHeroRank(winningBalance) {
   if (winningBalance >= 101) {
      return "Imortal";
   }

   for (let i = 0; i < rankTable.length; i++) {
      if (winningBalance <= rankTable[i].victories) {
         return rankTable[i].rank;
      }
   }
}

let winningBalance = calculateWinningBalance(numberOfVictories, numberOfDefeats);
let heroRank = calculateHeroRank(winningBalance);

console.log("O Herói tem um saldo de **" + winningBalance + "** e está no nível **" + heroRank + "**!");