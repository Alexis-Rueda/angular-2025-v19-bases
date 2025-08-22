import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  characters = input.required<Character[]>();
  listName = input.required<string>();

}
