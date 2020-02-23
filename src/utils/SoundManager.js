/**
 * A singleton class that manages all game sounds.
 * It also provides an easy interface for hadling basic audio functionalities.
 * 
 * Main roles:
 *  - can play sounds by path with some additional options like: volume, looping
 *  - can toggle sound play/pause
 ***/

export default class SoundManager {

  constructor() {
    if (SoundManager.instance) {
      return SoundManager.instance;
    }

    this.currentSound = null;

    // Sounds can be toggled by different parts of the game (ex. when mute sound button is pressed).
    this.isSoundEnabled = true;

    SoundManager.instance = this;
  }

  isPlaying() {
    if (this.currentSound) {
      return !this.currentSound.paused;
    }

    return false;
  }

  playSoundOnce(soundPath, volume = 1.0) {
    if (soundPath && this.isSoundEnabled) {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      audio.play();
    }
  }

  playSound(soundPath, volume = 1.0, loop = false) {
    if (soundPath && this.isSoundEnabled) {
      this.currentSound = new Audio(soundPath);
      this.currentSound.volume = volume;
      this.currentSound.loop = loop;
      this.currentSound.play();
    }
  }

  stopAllSounds() {
    if (this.currentSound) {
      this.currentSound.pause();
    }

    this.isSoundEnabled = false;
  }

  startAllSounds() {
    if (this.currentSound) {
      this.currentSound.play();
    }

    this.isSoundEnabled = true;
  }
}

SoundManager.instance;