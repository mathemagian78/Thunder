import snowman from "../objects/snowman";

export default class whackAmole extends Phaser.Scene {

    private puppy;
    private carrotButton;
    private parkButton;
    private snowmen;

    constructor() {
        super({ key: 'whackAmole' });
    }

    create() {

        //set up background
        let bg = this.add.image(0, 0, "snow");
        bg.setOrigin(0, 0);
        bg.setScale(2.75, 4);    

        this.snowmen = this.physics.add.group();

        let snowGeorge = new snowman(this);
        snowGeorge.body.setCollideWorldBounds(true);
        snowGeorge.setScale(4);


        
        
        
    }
    

}