import { Component, OnInit } from '@angular/core';
import { Meals } from '../../models/meals';
import { Categories } from '../../models/categories';
import { Countries } from '../../models/countries';
import { MockserviceService } from '../../services/mockservice.service';
import { SearchData } from '../../models/search-data';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {

  searchData: SearchData;
  meals: Meals[];
  categories: Categories[];
  countries: Countries[];

  constructor(private mockService: MockserviceService) {
  }

  ngOnInit() {
    this.searchData = {
      meals: ['BB'],
      category: ['3'],
      country: ['Турция'],
      hotelName: ''
    };

    this.countries = this.mockService.getCountries();
    this.meals = this.mockService.getMeals();
    this.categories = this.mockService.getCategories();
  }

  updateMeals(meals) {
    this.searchData.meals = meals;
  }

  updateCategories(categories) {
    this.searchData.category = categories;
  }

  updateCountries(country) {
    this.searchData.country = country;
  }

  sendRequest() {
    console.log(this.searchData);
  }
}
