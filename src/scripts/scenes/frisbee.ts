export default class frisbee extends Phaser.Scene {

    private puppy;
    private button;
    private bar;
    private value;
    private direction;
    private bg;
    private flyer;
    private isDisk;

    constructor() {
        super({ key: 'frisbee' });
    }

    create() {

        //set up background
        this.bg = this.add.tileSprite(0, 0, 800, 700, "park");
        this.bg.setOrigin(0, 0);
        this.bg.setScale(2.75, 4);
        this.bg.setScrollFactor(0);

        //add puppy
        this.puppy = this.add.sprite(400, 400, "Bun");
        this.puppy.setScale(5, 5);
        this.puppy.play("bunHopSL");
        this.puppy.setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.oscillateStart())
        .on('pointerup', () => this.throw());

        //add bar
        this.bar = this.add.graphics();
        this.value = 0;
        var color = 0xffff00;
        var alpha = 1;
        this.bar.fillStyle(color, alpha);
        this.bar.fillRect(32, 32, 25, 0);
        this.direction = 4;

        this.isDisk = false;
        
        //add frisbee animation
        this.anims.create({
            key: "spin",
            frames: this.anims.generateFrameNumbers("disc", { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1,
            hideOnComplete: false
        });

    }


    draw ()
    {
        this.bar.clear();


        if (this.value < 150)
        {
            this.bar.fillStyle(0xff0000);
        }
        else
        {
            this.bar.fillStyle(0x00ff00);
        }
        //  BG
        this.bar.fillStyle(0xffff00);
        this.bar.fillRect(32, 32, 25, this.value);

    }

    oscillateStart(){
        if(this.direction == 4){
            if(this.isDisk == true){
            this.flyer.destroy();
            this.isDisk = false;
            }
            this.direction = 1;
            this.oscillate();
        }

    }

    throw(){
        if(this.isDisk == false){
        this.direction = 3;
        this.flyer = this.add.sprite(460, 250, "disc");
        this.isDisk = true;
        this.flyer.setScale(2);
        this.flyer.play("spin");
        this.puppy.play("bunHopR");

        this.adjustDisc();
        }
    }


    oscillate(){
        if(this.direction == 1){
            this.value += 10;
            if(this.value == 200){
                this.direction = 0;
            }
            this.time.addEvent({
                delay: 10,
                callback: this.oscillate,
                callbackScope: this,
                loop: false
            });
        }
        else if(this.direction == 0){
            this.value -= 10;
            if(this.value == 0){
                this.direction = 1;
            }
            this.time.addEvent({
                delay: 10,
                callback: this.oscillate,
                callbackScope: this,
                loop: false
            });
        }
    }

    adjustDisc(){
        if(this.flyer.y <= 415){
        this.flyer.y +=2;
        if(this.value >= 10){
            this.value -= 0.5;
        }

        this.time.addEvent({
            delay: 100,
            callback: this.adjustDisc,
            callbackScope: this,
            loop: false
        });
        }

        else{
            this.puppy.play("bunHopSL");
            this.direction = 4;
            this.value = 0;
            this.isDisk = true;
        }
    }


    update(){
        this.draw();
        if(this.direction == 3){
            this.bg.tilePositionX += this.value/20;            
        }
    }
}