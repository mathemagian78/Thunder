export default class dogRoom extends Phaser.Scene {

    private puppy;
    private carrotButton;
    private parkButton;
    private snowButton;

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
        
        this.snowButton = this.add.image(200, 50, "snowButton");
        this.snowButton.setScale(0.2, 0.2);
        this.snowButton.setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.toSnow());

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
        this.scene.bringToTop("MainScene");
        this.scene.wake("MainScene");
        this.scene.sleep("dogRoom");
    }

    toPark(){
        this.scene.bringToTop("frisbee");
        this.scene.wake("frisbee");
        this.scene.sleep("dogRoom");        
    }

    toSnow(){
        this.scene.bringToTop("whackAmole");
        this.scene.wake("whackAmole");
        this.scene.sleep("dogRoom");        
    }
}