// global variables

var combatant1 = new Battledome.RobotGuild.BotClass
var combatant2 = new Battledome.RobotGuild.BotClass
var userName1;
var userName2;

// When your user interface first loads,
//--provide 2 text inputs to name the two robots that will do battle.
// You must also provide a select element underneath each text input
//--so that the user can select one of the 6 robot models you defined.



$("#player-1-ready").click(function(e){
    console.log($(".p1-select-bot option:selected").text());
    combatant1.name = $('#player-one-name').val();
    console.log(combatant1)
})

$("#player-2-ready").click(function(e){
    console.log($(".p2-select-bot option:selected").text());
    combatant2.name = $('#player-two-name').val()
    console.log(combatant2);
})

// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
