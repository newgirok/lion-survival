// Phaser 게임의 entry point는 `루트폴더/src/index.js` 입니다.
// index.js에서는 Phaser.Game 객체를 만들어야 합니다. 이때 Game의 configuration을 설정해야 합니다.
import Config from "./Config";

const game = new Phaser.Game(Config);

export default game;