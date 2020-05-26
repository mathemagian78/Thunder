import snowman from "../objects/snowman";

export default class whackAmole extends Phaser.Scene {

    private puppy;
    private carrotButton;
    private parkButton;
    private snowmen;
    private score;
    private scoreLabel;

    constructor() {
        super({ key: 'whackAmole' });
    }

    create() {

        //set up background
        let bg = this.add.image(0, 0, "snow");
        bg.setOrigin(0, 0);
        bg.setScale(2.75, 4);    

        this.score = 0;
        this.scoreLabel = this.add.bitmapText(10, 5, "snowLetters", "SCORE " + this.score, 16);

        this.doYouWannaBuildaSnowman();
        this.doYouWannaBuildaSnowman();
        this.doYouWannaBuildaSnowman();

        

        this.anims.create({
            key: "take",
            frames: this.anims.generateFrameNumbers("snowman", { start: 0, end: 2 }),
            frameRate: 3,
            repeat: 0,
            hideOnComplete: false
        });
        
    }

    doYouWannaBuildaSnowman(){
        var snowGeorge = new snowman(this);
        snowGeorge.body.setCollideWorldBounds(true);
        snowGeorge.setScale(4);

        snowGeorge.setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.whack(snowGeorge));

        
    }
    
    whack(snowman){
        snowman.play("take");
        snowman.once("animationcomplete", ()=>{ 
            this.resetObj(snowman);
            snowman.setTexture("snowman", 0);
            this.score += 5;
            this.scoreLabel.text = "SCORE " + this.score;
        });
    }

    resetObj(obj){
        obj.x = Phaser.Math.Between(0, 800); 
        obj.y = Phaser.Math.Between(0, 700);
    }

}