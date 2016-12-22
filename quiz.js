// global variables
var typeSelect;
var combatant1;
var combatant2;
var userName1;
var userName2;


//   When your user interface first loads,
//    provide 2 text inputs to name the two robots that will do battle.
//  You must also provide a select element underneath each text input
//    so that the user can select one of the 6 robot models you defined.

$('document').ready(function(){
    $('#name-robot').show();

    $('#enter-dome').click(function(e){
        $('#name-robot').hide();

        // $('#battledome').show();
    })

})


$("#player-1-ready").click(function(e){

    typeSelect = $(".p1-select-bot option:selected").text();

    userName1 = $('#player-one-name').val();

    combatant1 = new Battledome.RobotGuild[typeSelect](userName1);
    console.log(combatant1);
})

$("#player-2-ready").click(function(e){

    typeSelect = $(".p2-select-bot option:selected").text();

    userName2 = $('#player-two-name').val();

    combatant2 = new Battledome.RobotGuild[typeSelect](userName2);
    console.log(combatant2)

})

// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
