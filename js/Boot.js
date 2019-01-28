var Game ={};

// Game.init = function(){
//   game.stage.disableVisibilityChange = true;
// };

Game.Boot = function(game){

};

Game.Boot.prototype = {
  init:function(){

    this.input.maxPointers =1;
    this.stage.disableVisibilityChange = true;
  },
  // preloader:function(){
  //   // this.load.image('preloaderBar','assets/preloader.png');
  //
  // },
  preload:function(){
    // this.load.image('preloaderBar','assets/preloader.png');

  },
  create: function(){
    this.state.start('Preloader');
  }

}
