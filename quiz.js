// global variables
var typeSelect;
var combatant1;
var combatant2;
var userName1;
var userName2;

// Gathers Player 1 info
$("#player-1-ready").click(function(e){

    typeSelect = $(".p1-select-bot option:selected").text();

    userName1 = $('#player-one-name').val();

    combatant1 = new Battledome.RobotGuild[typeSelect](userName1);
    console.log(combatant1);
})

// Gathers Player 2 info
$("#player-2-ready").click(function(e){

    typeSelect = $(".p2-select-bot option:selected").text();

    userName2 = $('#player-two-name').val();

    combatant2 = new Battledome.RobotGuild[typeSelect](userName2);
    console.log(combatant2)

})

//   When your user interface first loads,
//    provide 2 text inputs to name the two robots that will do battle.
//  You must also provide a select element underneath each text input
//    so that the user can select one of the 6 robot models you defined.
$('document').ready(function(){
    var p1 = false;
    var p2 = false;

    // Stage Player 1
    $('#player-1-ready').click(function(e){
        if ($("#player-one-name").val() == "") {
            alert("Must enter name for Robot")
        } else {
            $('.card').append("<h3> Player Name: "+ combatant1.playerName +"</h3>"
                                + "<p> Robot: " + combatant1.name + "</p>"
                                + "<p> Health: " + combatant1.healthBonus +"</p>"
                                + "<p> Strength: " + combatant1.strengthBonus +"</p>"
                                + "<p> Speed: " + combatant1.speed +"</p>"
                                + "<p> Intelligence: " + combatant1.intelligenceBonus + "</p>");

            $('.robot-card').toggle("slow");
            $('#player-one-healthCount').append(combatant1.healthBonus)
            p1 = true;
        }
    })

    // Stage Player 2
    $('#player-2-ready').click(function(e){
        if ($("#player-two-name").val() == "") {
            alert("Must enter name for Robot")
        } else {
            $('.card2').append("<h3> Player Name: " + combatant2.playerName + "</h3>"
                                + "<p> Robot: " + combatant2.name + "</p>"
                                + "<p> Health: " + combatant2.healthBonus +"</p>"
                                + "<p> Strength: " + combatant2.strengthBonus +"</p>"
                                + "<p> Speed: " + combatant2.speed +"</p>"
                                + "<p> Intelligence: " + combatant2.intelligenceBonus + "</p>");

            $('.robot-card2').toggle("slow");

            p2 = true;

        }
    })

    //Enter Dome
    $('#enter-dome').click(function(){
        if (p1 || p2) {
            console.log(p1, p2);
            $('#name-robot').hide();
            $('#battledome').removeAttr("style");
            $('.healthHead').append('<h5 class="col-xs-2" id="healthName1">' + combatant1.playerName + ' : ' + combatant1.name + '</h5>'
                                    + '<h1 class="battle-heading col-xs-8">WAR</h1>'
                                    + '<h5 class="col-xs-2" id="healthName2">' + combatant2.playerName + ' : ' + combatant2.name + '</h5>');
            $('#player-two-healthCount').append(combatant2.healthBonus)
        } else {
            alert("Ready Your Players")
        }
    })
});


function checkHealth(player) {
    if (player.healthBonus <= 0) {
        $("#attack-button").attr("disabled", "true")
        $("#playAgain").removeClass("hidden-class")
        return false
    }
    return true
}


// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
$('#attackButton').click(function(){

    var p1CurrentHealth = combatant1.healthBonus -= combatant2.strengthBonus;
    var p2CurrentHealth = combatant2.healthBonus -= combatant1.strengthBonus;
    checkHealth(combatant2)

    if (checkHealth(combatant2)) {
        $('#player-two-healthCount').html(p2CurrentHealth)
        setTimeout(function() {
            $('#player-one-healthCount').html(p1CurrentHealth)}, 1000)

            if (!checkHealth(combatant1)) {
                setTimeout(function(){
                    $("#battledome").append(`<div class="winner"> ${combatant2.playerName} WINNER <br><a id="playAgain" href="http://localhost:8080/">
                        <span>Play Again</span></a></div>`)
                }, 1000)
            }
    } else {
        setTimeout(function(){
            $("#battledome").append(`<div class="winner"> ${combatant1.playerName} WINNER <br><a id="playAgain" href="http://localhost:8080/">
                <span>Play Again</span></a></div>`)
        }, 1000)
    }

});
