var map;
var layer;
var player;
var player2;
var cursors;
var currentHealthStatus;
var platforms;
  playerSpeed = 400
// var music;


var PlayState = {

init: function(){
  this.input.maxPointers =1;
  this.stage.disableVisibilityChange = true;

  const enable_gravity = 3200;
  this.game.physics.arcade.gravity.y = enable_gravity;

  this.game.physics.arcade.OVERLAP_BIAS = 20
},

render: function(){

  this.game.debug.body(player)
  this.game.debug.body(player2)
},

preload: function(){

  // this.game.load.json('level:1', 'assets/level00.json');

  this.game.load.audio('background_music', 'assets/background_music.ogg')

  this.game.load.image('ground', 'assets/ground.png');
    this.game.load.image('grass:8x1', 'assets/grass_8x1.png');
    this.game.load.image('grass:6x1', 'assets/grass_6x1.png');
    this.game.load.image('grass:4x1', 'assets/grass_4x1.png');
    this.game.load.image('grass:2x1', 'assets/grass_2x1.png');
    this.game.load.image('grass:1x1', 'assets/grass_1x1.png');


 //   this.game.load.json('level:1', 'assets/first_test_340pm.json');
  this.game.load.image('one', 'assets/1.png');
    this.game.load.image('two', 'assets/2.png');
    this.game.load.image('three', 'assets/3.png');
    this.game.load.image('four', 'assets/4.png');
    this.game.load.image('five', 'assets/5.png');
    this.game.load.image('six', 'assets/6.png');
    this.game.load.image('seven', 'assets/7.png');
    this.game.load.image('eight', 'assets/8.png');
    this.game.load.image('nine', 'assets/9.png');
    this.game.load.image('ten', 'assets/10.png');
    this.game.load.image('eleven', 'assets/11.png');
    this.game.load.image('twelve', 'assets/12.png');
    this.game.load.image('thirteen', 'assets/13.png');
    this.game.load.image('fourteen', 'assets/14.png');
    this.game.load.image('fifteen', 'assets/15.png');
    this.game.load.image('sixteen', 'assets/16.png');


    this.game.load.image('tree', 'assets/tree.png');
    this.game.load.image('skeleton', 'assets/skeleton.png');
    this.game.load.image('cactus_one', 'assets/cactus_one.png');

 // this.load.tilemap('level:1', 'assets/first_test_340pm.json');
  // this.load.tilemap('map','assets/level1.csv');
  // this.load.image('tileset','assets/tileset.png');

  this.game.load.image('bullet', 'assets/bullet.png')
  this.game.load.image('bullet2', 'assets/bullet.png')
  // this.load.spritesheet('player','assets/player.png',24,26)
  this.load.spritesheet('player','assets/dino_red.png',24,24)
  // this.load.spritesheet('player','assets/dino_red_flipped.png',24,24)
  this.load.spritesheet('test','assets/dino_green.png', 24, 24)
  this.game.load.image('health_green', 'assets/health_green.png')
  this.game.load.image('health_red', 'assets/health_red.png')

  this.game.load.image('background','assets/BG.png');

},

create: function(){

  // music = this.game.add.audio('background_music', 1, true)
  //  music.play()

  //total time until trigger
        // var inputTime = 100
        // this.timeInSeconds = inputTime + 1;
        //make a text field
        this.timeText = this.add.text(640, 25, "BEGIN!");
        // this.timeText = this.add.text(640, 25, `00:${this.timeInSeconds}`);
        //turn the text white
        this.timeText.fill = "#ffffff";
        //center the text
        this.timeText.anchor.set(0.5, 0.5);
        //set up a loop timer
        this.timer = this.time.events.loop(Phaser.Timer.SECOND, this.tick, this);


  groupPlatform = this.game.add.group()

   var backgroundImage = this.game.add.image(0,0, 'background');
   this.game.world.sendToBack(backgroundImage)


  // this.game.add.sprite(1152,867, 'fifteen');
  // this.game.add.sprite(1024,867, 'fifteen');
  // this.game.add.sprite(896,867, 'fifteen');
  // this.game.add.sprite(768,867, 'fifteen');
  // this.game.add.sprite(640,867, 'fifteen');
  // this.game.add.sprite(512,867, 'fifteen');
  // this.game.add.sprite(384,867, 'fifteen');
  // this.game.add.sprite(256,867, 'fifteen');
  // this.game.add.sprite(128,867, 'fifteen');
  // this.game.add.sprite(0,867, 'fifteen');


  // this.game.add.sprite(1152,650, 'fifteen');
  // this.game.add.sprite(1024,650, 'fifteen');
  // this.game.add.sprite(896,650, 'fourteen');

  // this.game.add.sprite(628,450, 'sixteen');
  // this.game.add.sprite(500,450, 'fifteen');
  // this.game.add.sprite(372,450, 'fourteen');

  // this.game.add.sprite(900, 390, "tree")
  // this.game.add.sprite(500, 900, "skeleton")
  // this.game.add.sprite(100, 755, "cactus_one")



var platform1 = this.game.add.sprite(1152,867, 'fifteen');
  var platform2 = this.game.add.sprite(1024,867, 'fifteen');
  var platform3 = this.game.add.sprite(896,867, 'fifteen');
  var platform4 = this.game.add.sprite(768,867, 'fifteen');
  var platform5 = this.game.add.sprite(640,867, 'fifteen');
  var platform6 = this.game.add.sprite(512,867, 'fifteen');
  var platform7 = this.game.add.sprite(384,867, 'fifteen');
  var platform8 = this.game.add.sprite(256,867, 'fifteen');
  var platform9 = this.game.add.sprite(128,867, 'fifteen');
  var platform10 = this.game.add.sprite(0,867, 'fifteen');

  var platform11 = this.game.add.sprite(1152,650, 'fifteen');
  var platform12 = this.game.add.sprite(1024,650, 'fifteen');
  var platform13 = this.game.add.sprite(896,650, 'fourteen');

  var platform14 = this.game.add.sprite(628,450, 'sixteen');
  var platform15 = this.game.add.sprite(500,450, 'fifteen');
  var platform16 = this.game.add.sprite(372,450, 'fourteen');

  this.game.add.sprite(900, 390, "tree")
  this.game.add.sprite(500, 900, "skeleton")
  cactus = this.game.add.sprite(100, 755, "cactus_one")

//   this.physics.enable(platform1, Phaser.Physics.ARCADE)
//   this.physics.enable(platform2, Phaser.Physics.ARCADE)
//   this.physics.enable(platform3, Phaser.Physics.ARCADE)
//   this.physics.enable(platform4, Phaser.Physics.ARCADE)
//   this.physics.enable(platform5, Phaser.Physics.ARCADE)
//   this.physics.enable(platform6, Phaser.Physics.ARCADE)
//   this.physics.enable(platform7, Phaser.Physics.ARCADE)
//   this.physics.enable(platform8, Phaser.Physics.ARCADE)
//   this.physics.enable(platform9, Phaser.Physics.ARCADE)
//   this.physics.enable(platform10, Phaser.Physics.ARCADE)
//   this.physics.enable(platform11, Phaser.Physics.ARCADE)
//   this.physics.enable(platform12, Phaser.Physics.ARCADE)
//   this.physics.enable(platform13, Phaser.Physics.ARCADE)
//   this.physics.enable(platform14, Phaser.Physics.ARCADE)
//   this.physics.enable(platform15, Phaser.Physics.ARCADE)
//   this.physics.enable(platform16, Phaser.Physics.ARCADE)
//   this.physics.enable(platform17, Phaser.Physics.ARCADE)
//   this.physics.enable(platform18, Phaser.Physics.ARCADE)
//   this.physics.enable(platform19, Phaser.Physics.ARCADE)



  groupPlatform.add(platform1)
  groupPlatform.add(platform2)
  groupPlatform.add(platform3)
  groupPlatform.add(platform4)
  groupPlatform.add(platform5)
  groupPlatform.add(platform6)
  groupPlatform.add(platform7)
  groupPlatform.add(platform8)
  groupPlatform.add(platform9)
  groupPlatform.add(platform10)
  groupPlatform.add(platform11)
  groupPlatform.add(platform12)
  groupPlatform.add(platform13)
  groupPlatform.add(platform14)
  groupPlatform.add(platform15)
  groupPlatform.add(platform16)

  this.game.physics.enable(groupPlatform)
  groupPlatform.setAll('body.allowGravity', false)
  groupPlatform.setAll('body.immovable', true)




  // this.loadLevel(this.game.cache.getJSON('level:1'));

  // this.stage.backgroundColor = '#3A5963';

  // map = this.add.tilemap('map',64,64);
  // map.addTilesetImage('tileset');
  // layer = map.createLayer(0);
  // layer.resizeWorld();

  // map.setCollisionBetween(0,2);

  bullet = this.game.add.weapon(10, 'bullet')
  // bullet.fireLimit = 20
  // var shotsRemain = laser.fireLimit - laser.shots;
  // shotRemainText.text = 'Shots Left ' + shotsRemain;
  bullet2 = this.game.add.weapon(10, 'bullet')



  player = this.add.sprite(550,830,'player', 9);//position of the player
  player.anchor.setTo(0.5,0.5);
  player.scale.setTo(4,4)
  player.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, true);
  // player.animations.add('attack', [17,18,19,20,21,22,23, 0],7,true)
  player.animations.add('attack', [17, 0],7,false)
  player.animations.add('death', [15, 14, 16, 15],4,false)
  player.health = 100
  player.maxhealth = 100

  player2 = this.add.sprite(300,830,'test', 3);//position of the player
  player2.anchor.setTo(0.5,0.5);
  player2.scale.setTo(4,4)
  player2.animations.add('walking2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 24, false);
  // player2.animations.add('attack2', [17,18,19,20,21,22,23, 0],7,false)
  player2.animations.add('death', [15, 14, 16, 15],4,false)
  player2.health = 100
  player2.maxhealth = 100


  this.physics.enable(player, Phaser.Physics.ARCADE)
  this.physics.arcade.enable(player);
  this.camera.follow(player);
  player.body.collideWorldBounds = true;

  this.physics.enable(player2, Phaser.Physics.ARCADE)
  this.physics.arcade.enable(player2);
  this.camera.follow(player2);
  player2.body.collideWorldBounds = true;

  bullet.trackSprite(player);
  bullet.bulletSpeed = 1000
  // bullet.fireLimit = 10
  bullet2.trackSprite(player2);
  bullet2.bulletSpeed = 1000

  var totalHealthBar = this.game.add.image(300, 20, 'health_red')
  totalHealthBar.fixedToCamera = true
  currentHealthStatus = this.game.add.image(300, 20, 'health_green')
  currentHealthStatus.fixedToCamera = true
  var healthText = this.game.add.text(210, 20, 'P2 Health', {fontSize: '20px', fill: '#ffffff'})
  healthText.fixedToCamera = true


  cursors = this.input.keyboard.createCursorKeys()
  aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A)
  dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D)
  sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S)
  wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W)


  // spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  fireButton2 = this.input.keyboard.addKey(Phaser.KeyCode.TILDE);
  meleeButton = this.game.input.keyboard.addKey(Phaser.Keyboard.P)
  meleeButton2 = this.game.input.keyboard.addKey(Phaser.Keyboard.Q)

  bullet.fireAngle = Phaser.ANGLE_RIGHT
  bullet2.fireAngle = Phaser.ANGLE_RIGHT

},

update: function(){



  this.aliveTest()
  this.handlePlatformCollisions()
  this.handlePlatformCollisions2()

//   cactus.key.x -= 30;

// this.game.add.tween(cactus)
//         .to({x: cactus.x + 60}, 800, Phaser.Easing.Sinusoidal.InOut)
//         .yoyo(true)
//         .loop()
//         .start();



  // this.handleCollisions()
  // this.game.physics.arcade.collide(player, groupPlatform);
  // groupPlatform.body.immovable = true
  // groupPlatform.body.allowGravity = false

  this.physics.arcade.overlap(player2, bullet.bullets, this.playerHit, null, this)
  this.physics.arcade.overlap(player, bullet2.bullets, this.playerHit2, null, this)

  // this.physics.arcade.overlap(player, player2, this.playerMelee, null, this)
  // this.physics.arcade.overlap(player, bullet2.bullets, this.playerHit2, null, this)

  this.physics.arcade.collide(player,layer)
  this.physics.arcade.collide(player2,layer)

  player.body.velocity.x = 0;
  // player.body.velocity.y = 0;

  player2.body.velocity.x = 0;
  // player2.body.velocity.y = 0;

  player.body.setSize(15,15,7, 7)
  player2.body.setSize(15,15,7, 7)


  if (cursors.left.isDown){
    // player.scale.x = player.scale.x * -1
     player.body.velocity.x = -playerSpeed;
    player.scale.setTo(-4, 4);
     player.play('walking')
     // bullet.fireAngle = 180
     bullet.fireAngle = Phaser.ANGLE_LEFT
     // player.scale.x *= -1
     // flipCharacter()
     // bullet.fireAngle = 0

    //  if (player.body.velocity.x < 0) {
    //     player.scale.x *= -1
    // }
   }
  if (cursors.right.isDown){
    // player.scale.x = player.scale.x * 1
     player.body.velocity.x = playerSpeed
     player.scale.setTo(4, 4)
     player.play('walking')
     // bullet.fireAngle = 0
     // player.scale.x *= 1
     bullet.fireAngle = Phaser.ANGLE_RIGHT

     // bullet.fireAngle = 180
   }
  if (cursors.up.isDown){
     // player.body.velocity.y = -250;
     // player.body.velocity.y = -600

    player.play('walking')
     // bullet.fireAngle = -90
    // bullet.fireAngle = Phaser.ANGLE_UP
     // bullet.fireAngle = 90
    const JUMP_SPEED = 1500;
    let canJump = player.body.touching.down;

    if (canJump) {
        player.body.velocity.y = -JUMP_SPEED;
    }

    return canJump;
   }
   // if (cursors.down.isDown){
   //   player.body.velocity.y = 250;
   //   player.play('walking')
   //   bullet.fireAngle = Phaser.ANGLE_DOWN

   // }
   if (fireButton.isDown){
    bullet.fire()
   }
   if (meleeButton.isDown){
    player.play('attack')
    this.playerMelee(player2)
   }



  if (aKey.isDown){
     player2.body.velocity.x = -playerSpeed;
     player2.play('walking2')
     bullet2.fireAngle = Phaser.ANGLE_LEFT
   }
  if (dKey.isDown){
     player2.body.velocity.x = playerSpeed
     player2.play('walking2')
     bullet2.fireAngle = Phaser.ANGLE_RIGHT
   }
  if (wKey.isDown){
     const JUMP_SPEED = 1500;
    let canJump = player2.body.touching.down;

    if (canJump) {
        player2.body.velocity.y = -JUMP_SPEED;
    }

    return canJump;
   }
   // if (sKey.isDown){
   //   player2.body.velocity.y = 250;
   //   player2.play('walking2')
   //   bullet2.fireAngle = Phaser.ANGLE_DOWN
   // }
   if (fireButton2.isDown){
    bullet2.fire()
   }

  this.handleCollisions()
},

handleCollisions: function(){
  this.game.physics.arcade.collide(player, player2)

},

handlePlatformCollisions: function(){
  this.game.physics.arcade.collide(player, groupPlatform)
  // this.game.physics.arcade.collide(player2, groupPlatform)
},

handlePlatformCollisions2: function(){
  this.game.physics.arcade.collide(player2, groupPlatform)
},

playerMelee: function(enemyPlayer){

  if (this.physics.arcade.collide(player, player2)){
    enemyPlayer.damage(1)
  // currentHealthStatus.scale.setTo(player2.health / player2.maxHealth, 1)
  this.player2AnimatedHealthBar()
  console.log(enemyPlayer.health)
  }
},

playerHit: function(enemyPlayer, bullet){
  bullet.kill()
  // enemyPlayer.kill()
  enemyPlayer.damage(5)
  this.player2AnimatedHealthBar()
  console.log("Enemy Player 2 Heatlth: " , enemyPlayer.health)

  if (enemyPlayer.health < 90){
     player.animations.add('death', [15, 14, 16, 15],4,true)
  }

  // if (enemyPlayer.health === 0){
  //   enemyPlayer.kill()
  // }
  // else {
  //   return
  // }
},

playerHit2: function(enemyPlayer2, bullet){
  bullet.kill()
  // enemyPlayer.kill()
  enemyPlayer2.damage(5)
  console.log("Player 1 Health: ", enemyPlayer2.health)
},

player2AnimatedHealthBar: function(){
  currentHealthStatus.scale.setTo(player2.health / player2.maxHealth, 1)
},

tick: function() {
        //subtract a second
        this.timeInSeconds--;
        //find how many complete minutes are left
        var minutes = Math.floor(this.timeInSeconds / 60);
        //find the number of seconds left
        //not counting the minutes
        var seconds = this.timeInSeconds - (minutes * 60);
        //make a string showing the time
        var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
        //display the string in the text field
        this.timeText.text = timeString;
        //check if the time is up
        if (this.timeInSeconds == 0) {
            //remove the timer from the game
            this.game.time.events.remove(this.timer);
            //call your game over or other code here!
            this.timeText.text="Game Over";
            this.game.state.restart()
        }
    },
    /**
     * add leading zeros to any number less than 10
     * for example turn 1 to 01
     */
addZeros: function(num) {
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    },

aliveTest: function(){

  if (player.alive === true && player2.alive === false){
    this.game.state.restart()
  }
  else if (player.alive === false && player2.alive === true){
    this.game.state.restart()
  }
}

// flipCharacter: function(){
//   if (player.body.velocity.x < 0) {
//         player.scale.x *= -1
//     }
//     else if (player.body.velocity.x > 0) {
//         player.scale.x *= 1
//     }
// }


}




window.onload = function() {
    // let game = new Phaser.Game(1960, 800, Phaser.AUTO, 'game');
    let game = new Phaser.Game(1280, 960, Phaser.AUTO, 'game');
    // ppppp
    game.state.add('play', PlayState);
    // game.state.start('play', true, false, {level: 0});
    game.state.start('play');
};
