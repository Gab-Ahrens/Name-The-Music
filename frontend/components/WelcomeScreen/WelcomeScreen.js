import Component from '../../utils/Component.js';
import eventBus from '../../utils/eventBus.js';
import { EVENTS } from '../../main.js';
import './WelcomeScreen.css';

/**
 * Welcome Screen Component
 * Displays the initial game screen with instructions
 */
export default class WelcomeScreen extends Component {
  constructor(container, props = {}) {
    super(container, props);
  }
  
  createElement() {
    const element = document.createElement('div');
    element.className = 'welcome-screen card fade-in';
    
    element.innerHTML = `
      <h1 class="title">𝄞 Que Música É Essa? ♬</h1>
      <div class="instructions">
        <p>Bem-vindo! Para testar seu conhecimento musical, tente advinhar o título e o artista de cada música.</p>
        <ul>
          <li>Cada resposta correta vale 5 pontos</li>
          <li>O jogo tem 10 rodadas</li>
          <li>Preste atenção na acentuação gráfica</li>
        </ul>
      </div>
      <button id="start-game-btn" class="btn btn-primary start-btn">Começar o jogo!</button>
    `;
    
    return element;
  }
  
  bindEvents() {
    const startButton = this.element.querySelector('#start-game-btn');
    startButton.addEventListener('click', this.handleStart.bind(this));
  }
  
  handleStart() {
    eventBus.emit(EVENTS.GAME_START);
  }
} 