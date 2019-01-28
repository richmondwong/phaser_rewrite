//this file is for loading all resourses png,csv


Game.Preloader =function(game){
  // this.preloadBar = null ;
};

Game.Preloader.prototype = {
  preload:function(){
    // this.preloadBar = this.add.sprite(this.world.centerX,
    //                                   this.world.centerY,'preloadBar');

    // this.preloadBar.anchor.setTo(0.5,0.5);
    // this.time.advancedTiming = true ;
    // this.load.setPreloadSprite(this.preloadBar);
    //load all assets
    this.load.tilemap('map','assets/level1.csv');
    this.load.image('tileset','assets/tileset.png');
    // this.load.spritesheet('player','assets/player.png',24,26)

    this.load.spritesheet('player','assets/player.png',24,26)
    this.load.spritesheet('player2','assets/player2.png', 24,26)
  },

  create:function(){
    this.state.start('Level1');
  }


}
