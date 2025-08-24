import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('dragonBallCharacters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {

  characters = signal<Character[]>( loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    const characters = this.characters();
    localStorage.setItem('dragonBallCharacters', JSON.stringify(characters));
  })

  addCharacter(character: Character) {
    this.characters.update(characters => [...characters, character]);
  }

}
