
// A base Robot function
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Each type must have a unique property, for example, if it is aerial or ground based.
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health.
//--- For example, one model can have health range of 50-80,
//--- and another one will have a range of 60-120.
//--- To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.


var Battledome = Battledome || {};
Battledome.RobotGuild = {};

/*
  Base function for a robsot
 */

Battledome.RobotGuild.BotClass = function() {
    this.type = null;
    this.class = null;
    this.healthBonus = null;
    this.strengthBonus = null;
};



/*
       #       # ######  ######  ####### #     # #######
      #       #  #     # #     # #     # ##    # #
     #       #   #     # #     # #     # # #   # #
    #       #    #     # ######  #     # #  #  # #####
   #       #     #     # #   #   #     # #   # # #
  #       #      #     # #    #  #     # #    ## #
 #       #       ######  #     # ####### #     # #######
 */


Battledome.RobotGuild.Drone = function() {
  this.name = "Drone";
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.base = "Aerial";
};
Battledome.RobotGuild.Drone.prototype = new Battledome.RobotGuild.BotClass();


// ------------------TYPES------------------------

Battledome.RobotGuild.GlobalHawk = function(name) {
  this.name = "GlobalHawk";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.playerName = name;
};
Battledome.RobotGuild.GlobalHawk.prototype = new Battledome.RobotGuild.Drone();


Battledome.RobotGuild.Neuron = function(name) {
  this.name = "Neuron";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.playerName = name;

};
Battledome.RobotGuild.Neuron.prototype = new Battledome.RobotGuild.Drone();

Battledome.RobotGuild.Hummingbird = function(name) {
  this.name = "Hummingbird";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.playerName = name;

};
Battledome.RobotGuild.Hummingbird.prototype = new Battledome.RobotGuild.Drone();

/*
       #       # ######  ### ######  ####### #######    #    #
      #       #  #     #  #  #     # #          #      # #   #
     #       #   #     #  #  #     # #          #     #   #  #
    #       #    ######   #  ######  #####      #    #     # #
   #       #     #     #  #  #       #          #    ####### #
  #       #      #     #  #  #       #          #    #     # #
 #       #       ######  ### #       #######    #    #     # #######
*/

Battledome.RobotGuild.Bipedal = function() {
  this.name = "Bipedal";
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.base = "Ground";
};
Battledome.RobotGuild.Bipedal.prototype = new Battledome.RobotGuild.BotClass();


// ------------------TYPES-----------------------


Battledome.RobotGuild.Watson = function(name) {
  this.name = "Watson";
  this.healthBonus = this.healthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.playerName = name;

};
Battledome.RobotGuild.Watson.prototype = new Battledome.RobotGuild.Bipedal();

Battledome.RobotGuild.Brutus = function(name) {
  this.name = "Brutus";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.playerName = name;

};
Battledome.RobotGuild.Brutus.prototype = new Battledome.RobotGuild.Bipedal();


Battledome.RobotGuild.Flash = function(name) {
  this.name = "Flash";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.playerName = name;

};
Battledome.RobotGuild.Flash.prototype = new Battledome.RobotGuild.Bipedal();


/*
       #       #    #    ####### #     #
      #       #    # #      #    #     #
     #       #    #   #     #    #     #
    #       #    #     #    #    #     #
   #       #     #######    #     #   #
  #       #      #     #    #      # #
 #       #       #     #    #       #
 */

Battledome.RobotGuild.Atv = function() {
   this.name = "Atv";
   this.healthBonus = this.healthBonus - 10;
   this.strengthBonus = this.strengthBonus - 20;
   this.base = "Wheels";

};
Battledome.RobotGuild.Atv.prototype = new Battledome.RobotGuild.BotClass();


// ------------------TYPES------------------------


Battledome.RobotGuild.DuneBuggy = function(name) {
    this.name = "DuneBuggy";
    this.healthBonus = this.healthBonus - 1;
    this.strengthBonus = this.strengthBonus - 30;
    this.playerName = name;

};
Battledome.RobotGuild.DuneBuggy.prototype = new Battledome.RobotGuild.Atv();


Battledome.RobotGuild.Ninja = function(name) {
    this.name = "Ninja";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus - 5;
    this.intelligenceBonus = this.intelligenceBonus + 37;
    this.playerName = name;

};
Battledome.RobotGuild.Ninja.prototype = new Battledome.RobotGuild.Atv();

Battledome.RobotGuild.GolfCart = function(name) {
    this.name = "GolfCart";
    this.healthBonus = this.healthBonus - 10;
    this.strengthBonus = this.strengthBonus - 5;
    this.intelligenceBonus = this.intelligenceBonus + 5;
    this.playerName = name;

};
Battledome.RobotGuild.GolfCart.prototype = new Battledome.RobotGuild.Atv();


/*
       #       # ######     #    #     # ######  ####### #     #
      #       #  #     #   # #   ##    # #     # #     # ##   ##
     #       #   #     #  #   #  # #   # #     # #     # # # # #
    #       #    ######  #     # #  #  # #     # #     # #  #  #
   #       #     #   #   ####### #   # # #     # #     # #     #
  #       #      #    #  #     # #    ## #     # #     # #     #
 #       #       #     # #     # #     # ######  ####### #     #
 */


var classesArray = ["GlobalHawk", "Barracuda", "Neuron", "Hummingbird", "Flash", "Brutus", "DuneBuggy", "Ninja", "GolfCart"];

Battledome.RobotGuild.Random = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (classesArray.length - 1));

  // Get the string at the index
  var randomClass = classesArray[random];

  // Composes the corresponding player class into the player object
  this.class = new Battledome.RobotGuild[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};
