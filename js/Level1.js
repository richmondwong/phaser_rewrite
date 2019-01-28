Game.Level1 = function(game){};



var map;
var layer;

var player;
var player2;
var cursors;
// var playerSpeed = 150;
// var jumpTimer = 0;

Game.Level1.prototype = {
  create:function(){
    this.stage.backgroundColor = '#3A5963';

    map = this.add.tilemap('map',64,64);
    map.addTilesetImage('tileset');
    layer = map.createLayer(0);
    layer.resizeWorld();

    map.setCollisionBetween(0,2);


    player = this.add.sprite(600,560,'player');//position of the player
    player.anchor.setTo(0.5,0.5);

    player2 = this.add.sprite(300,560,'player2');//position of the player
    player2.anchor.setTo(0.5,0.5);

    player.animations.add('idle',[0,1],1,true);

    this.physics.enable(player, Phaser.Physics.ARCADE)
    this.physics.arcade.enable(player );
    this.camera.follow(player);
    player.body.collideWorldBounds = true;

    cursors = this.input.keyboard.createCursorKeys()


  },

  update:function(){
     this.physics.arcade.collide(player,layer)

     player.body.velocity.x = 0;
     player.body.velocity.y = 0;

     if (cursors.left.isDown){
        player.body.velocity.x = -350;
      }
     if (cursors.right.isDown){
        player.body.velocity.x = 350
      }
     if (cursors.up.isDown){
        player.body.velocity.y = -350;
      }
      if (cursors.down.isDown){
        player.body.velocity.y = 350;
      }


     // game.input.onUp.add(function(){
     //   player.body.velocity.y = -350;
     // })

     // this.game.input.onDown.add(function(){
     //   player.body.velocity.x = 350
     // })

     // this.game.input.onDown.add(function(){
     //   player.body.velocity.x = 350
     //   player.body.velocity.y = -350;
     // })

//      if (this.game.input.mousePointer.isDown)
//    {
//        //  400 is the speed it will move towards the mouse
//        this.game.physics.arcade.moveToPointer(player, 400);
// }

//      if (this.game.input.onDown)
//    {
//        //  400 is the speed it will move towards the mouse
//        this.game.physics.arcade.moveToPointer(player, 400);
// }


  }

}
