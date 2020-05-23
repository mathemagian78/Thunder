export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    //add background 
    this.load.image("background", "assets/environment_forest_alt1.png");
    //add ThunderRoom bg
    this.load.image("Room", "assets/Room.png");
    //add button to ThunderRoom
    this.load.image("toRoom", "assets/roomButton.png")
    //add button to carrot game
    this.load.image("carrotTime", "assets/carrotTime.png")

    //add text font
    this.load.bitmapFont("letters", "assets/font.png", "assets/font.xml");

    //add Thunder sprite
    this.load.spritesheet("Bun", "assets/Thunder2.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    //add Celery sprite
    this.load.spritesheet("Fox", "assets/Celery.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    //add carrot image
    this.load.image("carrot", "assets/carrot.png");

    //add egg sprite
    this.load.spritesheet("egg", "assets/screenshot_1.png",{
      frameWidth: 200,
      frameHeight: 220
    });

    //add puff animation
    this.load.spritesheet("Poof", "assets/Poof.png", {
      frameWidth: 255,
      frameHeight: 250
    });
    
    //add skull puff animation
    this.load.spritesheet("skull", "assets/Skull.png",{
      frameWidth: 200,
      frameHeight: 300
    });

    //add growing carrot sprite
    this.load.spritesheet("grow", "assets/fox-SWEN-bright.png", {
      frameWidth: 50,
      frameHeight: 75
    });

    //add musics and sound effects
    this.load.audio("music", "assets/carrotChase.wav");
    this.load.audio("winner", "assets/win.wav");
    this.load.audio("bell", "assets/pleasing-bell.wav");
    this.load.audio("warp", "assets/wave.wav");
    this.load.audio("pop", "assets/pop.ogg");
    this.load.audio("barks", "assets/thunderbark.wav");
    this.load.audio("bark", "assets/oneBark.wav");
  }

  create() {
    //Tell user we're working on it
    this.add.text(20, 20, "Working on it!!!");
    //start the game
    this.scene.start('MainScene');
    this.scene.start("dogRoom");
    this.scene.sleep("dogRoom");
    this.scene.bringToTop("MainScene");
  }
}
