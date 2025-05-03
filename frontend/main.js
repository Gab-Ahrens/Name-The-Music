/**
 * Main entry point for the modular frontend
 */
import eventBus from './utils/eventBus.js';

// Define game events
export const EVENTS = {
  GAME_START: 'game:start',
  GAME_END: 'game:end',
  NEXT_ROUND: 'game:nextRound',
  SUBMIT_ANSWER: 'game:submitAnswer',
  PLAY_MUSIC: 'music:play',
  PAUSE_MUSIC: 'music:pause',
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing modular frontend...');
  
  // Initially we'll load the welcome screen
  // This will be replaced with actual component initialization
  const appContainer = document.getElementById('app') || document.body;
  appContainer.innerHTML = '<div class="loading">Loading modular components...</div>';
  
  // Subscribe to events (placeholder for now)
  eventBus.on(EVENTS.GAME_START, () => {
    console.log('Game started');
  });
  
  console.log('Frontend initialized');
}); 