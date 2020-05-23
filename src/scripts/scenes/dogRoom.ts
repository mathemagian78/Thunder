export default class dogRoom extends Phaser.Scene {

    private puppy;
    private button;

    constructor() {
        super({ key: 'dogRoom' });
    }

    create() {

        //set up background
        let bg = this.add.image(0, 0, "Room");
        bg.setOrigin(0, 0);
        bg.setScale(2.75, 4);

        this.button = this.add.image(50, 50, "carrotTime");
    this.button.setScale(0.2, 0.2);
    this.button.setInteractive({ useHandCursor: true })
    .on('pointerdown', () => this.toRoom());


        

        this.puppy = this.add.sprite(400, 400, "Bun");
        this.puppy.setScale(5, 5);
        this.puppy.play("bunHopSL");

        this.puppy.setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.wiggling())
        .on('pointerout', () => this.up())
        ;


        this.anims.create({
            key: "wiggle",
            frames: this.anims.generateFrameNumbers("Bun", { start: 10, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        
    }
    up(){
        this.puppy.play("bunHopSL");
    }
    wiggling(){
        this.puppy.play("wiggle");
    }

    toRoom(){
        this.scene.launch("mainScene");
        this.scene.sleep("dogRoom");
        this.scene.wake("mainScene");
    }


}