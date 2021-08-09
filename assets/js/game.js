var fight = function() {
    //Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or Skip this battle? Enter 'FIGHT' or 'SKIP' to  choose.");
    var playerName = window.prompt("What is your robots name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

    console.log(playerName,playerHealth,playerAttack)

    var enemeyName = "Roberto"
    var enemyHealth = 50;
    var enemyAttack = 12;

    if (promptFight ==="fight" || promptFight === "FIGHT") {
        //remove enemys health by subtracting the amount set in the playerAttack Var
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " Attacked " + enemeyName + ". " + enemeyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemys health
        if(enemyHealth <= 0) {
            window.alert(enemeyName + " has died");
        }
        else{
            window.alert(enemeyName + " still has " + enemyHealth + " health left.");    
        }
        
        //remove players health by subtracting the amount set in the enemyAttack var
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemeyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check players health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died.");
    }
    else {
        window.alert (playerName + " still has " + playerHealth + "health left.");
    }
        //if player chooses to skip
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip this fight!");
        //subtract money from playermoney for skipping
        playerMoney = playerMoney - 2;
        }
        
    }
    //if no (false), ask question again by running fight() again
    else {
        fight()
    
    }
}



 fight();
