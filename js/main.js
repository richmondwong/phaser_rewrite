var map;
var layer;
var player;
var player2;
var cursors;


var PlayState = {

init: function(){
  this.input.maxPointers =1;
  this.stage.disableVisibilityChange = true;
},

preload: function(){
  this.load.tilemap('map','assets/level1.csv');
  this.load.image('tileset','assets/tileset.png');
  this.load.spritesheet('player','assets/player.png',24,26)
  this.load.spritesheet('test','assets/test.png', 24,26)
},

create: function(){
  this.stage.backgroundColor = '#3A5963';

  map = this.add.tilemap('map',64,64);
  map.addTilesetImage('tileset');
  layer = map.createLayer(0);
  layer.resizeWorld();

  map.setCollisionBetween(0,2);


  player = this.add.sprite(600,560,'player', 9);//position of the player
  player.anchor.setTo(0.5,0.5);
  player.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, false);

  player2 = this.add.sprite(300,560,'test', 3);//position of the player
  player2.anchor.setTo(0.5,0.5);
  player2.animations.add('walking2', [0, 1, 2], 3, false);


  this.physics.enable(player, Phaser.Physics.ARCADE)
  this.physics.arcade.enable(player);
  this.camera.follow(player);
  player.body.collideWorldBounds = true;

  this.physics.enable(player2, Phaser.Physics.ARCADE)
  this.physics.arcade.enable(player2);
  this.camera.follow(player2);
  player2.body.collideWorldBounds = true;

  cursors = this.input.keyboard.createCursorKeys()
},

update: function(){
  this.physics.arcade.collide(player,layer)
  this.physics.arcade.collide(player2,layer)

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  player2.body.velocity.x = 0;
  player2.body.velocity.y = 0;

  var aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A)
  var dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D)
  var sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S)
  var wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W)



  if (cursors.left.isDown){
     player.body.velocity.x = -350;
     player.play('walking')
   }
  if (cursors.right.isDown){
     player.body.velocity.x = 350
     player.play('walking')
   }
  if (cursors.up.isDown){
     player.body.velocity.y = -350;
     player.play('walking')
   }
   if (cursors.down.isDown){
     player.body.velocity.y = 350;
     player.play('walking')
   }



  if (aKey.isDown){
     player2.body.velocity.x = -350;
     player2.play('walking2')
   }
  if (dKey.isDown){
     player2.body.velocity.x = 350
     player2.play('walking2')
   }
  if (wKey.isDown){
     player2.body.velocity.y = -350;
     player2.play('walking2')
   }
   if (sKey.isDown){
     player2.body.velocity.y = 350;
     player2.play('walking')
   }

  this.handleCollisions()
},

handleCollisions: function(){
  this.game.physics.arcade.collide(player, player2)
}


}




window.onload = function() {
    let game = new Phaser.Game(1960, 800, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    // game.state.start('play', true, false, {level: 0});
    game.state.start('play');
};
