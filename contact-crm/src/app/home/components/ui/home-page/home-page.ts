import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../../../shared/services/home-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  homeService = inject(HomeService);

  numberOfContacts = this.homeService.numberOfContacts;
  numberOfFavorites = this.homeService.numberOfFavorites;
  numberOfCategories = this.homeService.numberOfCategories;
  lastContactRecorded = this.homeService.lastContactRecorded;

  ngOnInit(): void {
    this.homeService.refreshContacts();
  }
}
