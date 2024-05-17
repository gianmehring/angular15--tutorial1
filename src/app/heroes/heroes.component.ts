import { Component } from '@angular/core';

// interfaces
import { Hero } from '../hero';

// services
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(
      (hero: Hero) => { this.heroes.push(hero) }
    );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h:Hero) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
