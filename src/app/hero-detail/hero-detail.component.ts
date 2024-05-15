import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// interfaces
import { Hero } from '../hero';

// services
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      (hero: Hero) => {
        this.hero = hero;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
