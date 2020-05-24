export default class dogRoom extends Phaser.Scene {

    private puppy;
    private carrotButton;
    private parkButton;

    constructor() {
        super({ key: 'dogRoom' });
    }

    create() {

        //set up background
        let bg = this.add.image(0, 0, "Room");
        bg.setOrigin(0, 0);
        bg.setScale(2.75, 4);

        this.carrotButton = this.add.image(50, 50, "carrotTime");
        this.carrotButton.setScale(0.2, 0.2);
        this.carrotButton.setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.toCarrots());


        this.parkButton = this.add.image(125, 50, "parkButton");
        this.parkButton.setScale(0.2, 0.2);
        this.parkButton.setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.toPark());
        

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

    toCarrots(){
        this.scene.bringToTop("mainScene");
        this.scene.wake("mainScene");
        this.scene.sleep("dogRoom");
    }

    toPark(){
        this.scene.bringToTop("frisbee");
        this.scene.wake("frisbee");
        this.scene.sleep("dogRoom");        
    }

}