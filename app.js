class Casino {
    constructor(name, isFakeCoin = false, timesPlayed = 0) {
        this.name = name;
        this.timesPlayed = timesPlayed;
        this.isFakeCoin = isFakeCoin
    }

    playGame(betAmount) {
        let result;
        if (this.isFakeCoin) {// When isFakeCoin is true casino wins
            result = true;
        } else {
            result = Math.random() >= 0.5;
        }
        this.timesPlayed++;
        if (result) {
            console.log('Casino wins');
            return false;
        } else {
            console.log(`Player wins bet amount ${betAmount}`);
            return true;
        }
        
    }

}


// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);


// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
