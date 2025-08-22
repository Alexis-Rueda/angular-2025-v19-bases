import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    // NgClass
  ]
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  addCharacter() {
    if (!this.name || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((last) => {
      return [ ...last, newCharacter ];
    });
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // });

}
