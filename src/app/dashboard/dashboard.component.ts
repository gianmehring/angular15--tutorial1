import { Component } from '@angular/core';

// interfaces
import { Hero } from '../hero';

// services
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((heroes: Hero[]) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
