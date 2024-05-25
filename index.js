// Game classes
import GameManager from './classes/GameManager.js';

let gameManager = new GameManager();

await gameManager.init();

console.log('everything inited');

gameManager.update();