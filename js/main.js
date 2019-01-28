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
  this.game.load.image('bullet', 'assets/bullet.png')
  this.game.load.image('bullet2', 'assets/bullet.png')
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

  bullet = this.game.add.weapon(10, 'bullet')
  // bullet.fireLimit = 20
  // var shotsRemain = laser.fireLimit - laser.shots;
  // shotRemainText.text = 'Shots Left ' + shotsRemain;
  bullet2 = this.game.add.weapon(10, 'bullet')


  player = this.add.sprite(600,560,'player', 9);//position of the player
  player.anchor.setTo(0.5,0.5);
  player.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, false);
  player.health = 100

  player2 = this.add.sprite(300,560,'test', 3);//position of the player
  player2.anchor.setTo(0.5,0.5);
  player2.animations.add('walking2', [0, 1, 2], 3, false);
  player2.health = 100


  this.physics.enable(player, Phaser.Physics.ARCADE)
  this.physics.arcade.enable(player);
  this.camera.follow(player);
  player.body.collideWorldBounds = true;

  this.physics.enable(player2, Phaser.Physics.ARCADE)
  this.physics.arcade.enable(player2);
  this.camera.follow(player2);
  player2.body.collideWorldBounds = true;

  bullet.trackSprite(player);
  bullet.bulletSpeed = 500
  // bullet.fireLimit = 10
  bullet2.trackSprite(player2);
  bullet2.bulletSpeed = 500


  cursors = this.input.keyboard.createCursorKeys()
  aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A)
  dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D)
  sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S)
  wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W)

  // spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  fireButton2 = this.input.keyboard.addKey(Phaser.KeyCode.TILDE);

},

update: function(){

  this.physics.arcade.overlap(player2, bullet.bullets, this.playerHit, null, this)
  this.physics.arcade.overlap(player, bullet2.bullets, this.playerHit2, null, this)

  this.physics.arcade.collide(player,layer)
  this.physics.arcade.collide(player2,layer)

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  player2.body.velocity.x = 0;
  player2.body.velocity.y = 0;


  if (cursors.left.isDown){
     player.body.velocity.x = -250;
     player.play('walking')
     // bullet.fireAngle = 180
     bullet.fireAngle = Phaser.ANGLE_LEFT
     // bullet.fireAngle = 0
   }
  if (cursors.right.isDown){
     player.body.velocity.x = 250
     player.play('walking')
     // bullet.fireAngle = 0
     bullet.fireAngle = Phaser.ANGLE_RIGHT
     // bullet.fireAngle = 180
   }
  if (cursors.up.isDown){
     player.body.velocity.y = -250;
     player.play('walking')
     // bullet.fireAngle = -90
     bullet.fireAngle = Phaser.ANGLE_UP
     // bullet.fireAngle = 90
   }
   if (cursors.down.isDown){
     player.body.velocity.y = 250;
     player.play('walking')
     // bullet.fireAngle = 90
     bullet.fireAngle = Phaser.ANGLE_DOWN
     // bullet.fireAngle = -90
   }
   if (fireButton.isDown){
    bullet.fire()
   }



  if (aKey.isDown){
     player2.body.velocity.x = -250;
     player2.play('walking2')
     bullet2.fireAngle = Phaser.ANGLE_LEFT
   }
  if (dKey.isDown){
     player2.body.velocity.x = 250
     player2.play('walking2')
     bullet2.fireAngle = Phaser.ANGLE_RIGHT
   }
  if (wKey.isDown){
     player2.body.velocity.y = -250;
     player2.play('walking2')
     bullet2.fireAngle = Phaser.ANGLE_UP
   }
   if (sKey.isDown){
     player2.body.velocity.y = 250;
     player2.play('walking2')
     bullet2.fireAngle = Phaser.ANGLE_DOWN
   }
   if (fireButton2.isDown){
    bullet2.fire()
   }

  this.handleCollisions()
},

handleCollisions: function(){
  this.game.physics.arcade.collide(player, player2)
},

playerHit: function(enemyPlayer, bullet){
  // bullet.kill()
  // enemyPlayer.kill()
  enemyPlayer.damage(1)
  console.log(enemyPlayer.health)

  // if (enemyPlayer.health === 0){
  //   enemyPlayer.kill()
  // }
  // else {
  //   return
  // }
},

playerHit2: function(enemyPlayer2, bullet){
  // bullet.kill()
  // enemyPlayer2.kill()
}



}




window.onload = function() {
    let game = new Phaser.Game(1960, 800, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    // game.state.start('play', true, false, {level: 0});
    game.state.start('play');
};
