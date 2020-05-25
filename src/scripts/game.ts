import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import dogRoom from './scenes/dogRoom';
import frisbee from './scenes/frisbee';
import whackAmole from './scenes/whackAmole';
import GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 700;


const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MainScene, dogRoom, frisbee, whackAmole],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
