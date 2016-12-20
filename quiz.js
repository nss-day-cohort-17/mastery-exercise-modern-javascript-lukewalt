// global variables


// When your user interface first loads,
//--provide 2 text inputs to name the two robots that will do battle.
// You must also provide a select element underneath each text input
//--so that the user can select one of the 6 robot models you defined.

$(document).ready(function() {
    /*
    Show the initial view that accepts robot names
    */
    $("#name-robot").show();

    /*
    When any button with card__link class is clicked,
    move on to the next view.
    */
    $(".card__link").click(function(e) {
        var nextCard = $(this).attr("next");
        var moveAlong = false;

        switch (nextCard) {
            case "card--class":
                moveAlong = ($("#player-name").val() !== "");
                warrior.playerName = $("#player-name").val();
                // console.log(warrior);
                break;

            case "card--weapon":
                moveAlong = ($("#player-name").val() !== "");

                warrior.class = new Gauntlet.GuildHall[selectedClass]
                // console.log(warrior);
                break;

            case "card--battleground":
                moveAlong = ($("#player-name").val() !== "");
                warrior.weapon = new Gauntlet.Armory[selectedWeapon]
                console.log(warrior);
                displayStats();
                break;
        }

        if (moveAlong) {
          $(".card").hide();
          $("." + nextCard).show();
        }
    });
});


// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
