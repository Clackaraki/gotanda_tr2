//ゲームに関する設定
let random = Math.random() * 10;
let waiting=1500;


class OP extends Phaser.Scene {
  constructor() {
// 自動実行をオンに
        super({ key: 'OP', active: true });
  }
  
  preload() {
      //背景の画像
      this.load.atlas('knight', 'https://labs.phaser.io/assets/animations/knight.png', 'https://labs.phaser.io/assets/animations/knight.json');
      this.load.image('bg', 'https://labs.phaser.io/assets/skies/clouds.png');
      this.load.spritesheet('tiles', 'https://labs.phaser.io/assets/tilemaps/tiles/fantasy-tiles.png', { frameWidth: 64, frameHeight: 64 });
  }

  create(){
      //this.add.image(400,300,'bg');
  this.add.image(400, 16, 'bg').setOrigin(0.5, 0);
  this.add.text(400, 8, 'Click to play. Update Event on frame0004', { color: '#ffffff' })
    .setOrigin(0.5, 0);

  for (let i = 0; i < 13; i++) {
    this.add.image(64 * i, 536, 'tiles', 1)
      .setOrigin(0);
  }

  this.add.text(80, 100, 'Sample Game', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setFontSize(100).setColor('#ff0000');
  this.add.text(100, 300, 'Click to Start Game').setFontSize(32).setColor('#ff0000');  

  //  Our coin animation
  const coinConfig = {
      key: 'coin',
      frames: this.anims.generateFrameNumbers('tiles', { start: 42, end: 47 }),
      frameRate: 12,
      repeat: -1
  };
  this.anims.create(coinConfig);

  const { width, height } = this.game.canvas;
    // 画面を埋めるようなZoneを作成
  const zone = this.add.zone(width/2, height/2, width, height);

  // Zoneをクリックできるように設定
  zone.setInteractive({
      useHandCursor: true  // マウスオーバーでカーソルが指マークになる
  });
  
  // ZoneをクリックしたらMainSceneに遷移
  zone.on('pointerdown', () => {
    this.scene.start("MainScene")
  });
  console.log(waiting)
  }
    
  update(){
  }
}

class MainScene extends Phaser.Scene {
  constructor() {
// active: false にするとシーンは自動実行されない、最初の画面以外
        super({ key: 'MainScene', active: false });
  }
  
  preload() {
  }

  create(){
    this.add.image(400, 16, 'bg').setOrigin(0.5, 0);
    this.add.text(400, 8, 'Click to play. Update Event on frame0004', { color: '#ffffff' })
      .setOrigin(0.5, 0);
  
    for (let i = 0; i < 13; i++) {
      this.add.image(64 * i, 536, 'tiles', 1)
        .setOrigin(0);
    }
    this.gameOver =false;

     //  Our attack animation
  const attackConfig = {
    key: 'attack',
    frames: this.anims.generateFrameNames('knight', { prefix: 'attack_B/frame', start: 0, end: 12, zeroPad: 4 }),
    frameRate: 16
  };


  this.anims.create(attackConfig);

  //  Our coin animation
  const coinConfig = {
    key: 'coin',
    frames: this.anims.generateFrameNumbers('tiles', { start: 42, end: 47 }),
    frameRate: 12,
    repeat: -1
  };


  this.anims.create(coinConfig);

  const lancelot = this.add.sprite(300, 536, 'knight', 'attack_C/frame0000')
  lancelot.setOrigin(0.5, 1);
  lancelot.setScale(7);

  const lancelot2 = this.add.sprite(500, 536, 'knight', 'attack_C/frame0000')
  lancelot2.setOrigin(0.5, 1);
  lancelot2.setScale(-7, 7);

  var controller = this;

  this.restart = this.add.text(300, 400, 'Click to restart', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setFontSize(30).setColor('#0000ff');
  this.restart.visible = false;  

  var timedEvent;
  var timedEvent2; 

  timedEvent = this.time.addEvent({
    delay: random * 1000, // マイクロセカンド, 3000 = 3秒
    callback: () => {
      this.startText = this.add.text(360, 180, '!!', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setFontSize(100).setColor('#FF0000');
      this.startText.visible = false; // 最初は消しておく
      this.startText.visible = true; // 表示したいタイミングで True にすると表示される
      timedEvent2 = this.time.addEvent({
        delay:waiting, // マイクロセカンド, 3000 = 3秒
        callback: () => {
          this.startText.visible = false,
          this.startText = this.add.text(150, 180, 'YOU LOSE', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setFontSize(100).setColor('#0000ff');
          this.startText.visible = false; // 最初は消しておく
          this.startText.visible = true; // 表示したいタイミングで True にすると表示される
          lancelot2.play('attack', true);
          controller.tweens.add({
            targets: lancelot,
            //x: -100,
            alpha: 0,
            ease: 'Power2',
            duration: 1000
          });
          this.gameOver =true;
        },
        loop: false,
      });
    },
    loop: false,
  });
  
  const { width, height } = this.game.canvas;
  // 画面を埋めるようなZoneを作成
  let zone = this.add.zone(width/2, height/2, width, height);
  // Zoneをクリックできるように設定
  zone.setInteractive({
              useHandCursor: true  // マウスオーバーでカーソルが指マークになる
  });

  zone.on('pointerdown', () => {
    if(1 <=waiting){
      waiting=waiting-100;
    }      this.startText.visible = false,
          this.startText = this.add.text(150, 180, 'YOU WIN!', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setFontSize(100).setColor('#FF0000');
          this.startText.visible = false; // 最初は消しておく
          this.startText.visible = true; // 表示したいタイミングで True にすると表示される
    console.log(timedEvent.getElapsed());
    lancelot.play('attack', true);
    controller.tweens.add({
      targets: lancelot2,
      alpha: 0,
      ease: 'Power2',
      duration: 1000
    });
    // 負け予約の取り消し
    timedEvent2.remove(false);
    //timedEvent.remove(false);
    this.gameOver = true;
  });
  }
    
  update(){
    if (this.gameOver) {
      this.restart.visible = true;

      const { width, height } = this.game.canvas;

      // 画面を埋めるようなZoneを作成
      let zone = this.add.zone(width/2, height/2, width, height);

      // Zoneをクリックできるように設定
      zone.setInteractive({
          useHandCursor: true  // マウスオーバーでカーソルが指マークになる
      });

      // Zoneをクリックしたら必要なデータを初期化しTitleSceneに遷移
      zone.on('pointerdown', () => {
          // 必要な初期化後に、タイトル画面（TitleScene）へ遷移
          this.scene.start("OP");
      });
      return;
    }
  }
}

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#026bc6',
  pixelArt: true,
  scene: [OP, MainScene],
};

//ゲームオブジェクトの生成
var game = new Phaser.Game(config);
