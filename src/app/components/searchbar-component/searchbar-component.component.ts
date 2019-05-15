import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MockserviceService } from '../../services/mockservice.service';
import { Cities } from '../../models/cities';
import { Countries } from '../../models/countries';
import { Categories } from '../../models/categories';
import { Meals } from '../../models/meals';
import { SearchData } from '../../models/search-data';

@Component({
  selector: 'app-searchbar-component',
  templateUrl: './searchbar-component.component.html',
  styleUrls: ['./searchbar-component.component.scss'],
  providers: [NgbDropdownConfig]
})
export class SearchbarComponentComponent implements OnInit {
  searchData: SearchData;
  cities: Cities[];
  countries: Countries[];
  categories: Categories[];
  meals: Meals[];
  nightsFrom: any[];
  nightsTo: any[];

  mockService: MockserviceService;

  constructor(fb: FormBuilder, dropdownConfig: NgbDropdownConfig, mockService: MockserviceService) {
    dropdownConfig.autoClose = false;
    this.mockService = mockService;
  }

  ngOnInit() {
    this.cities = this.mockService.getCities();
    this.countries = this.mockService.getCountries();
    this.meals = this.mockService.getMeals();
    this.categories = this.mockService.getCategories();

    this.nightsFrom = [
      {id: '2', name: '2'},
      {id: '3', name: '3'},
      {id: '4', name: '4'},
      {id: '5', name: '5'},
      {id: '6', name: '6'},
      {id: '7', name: '7'},
      {id: '8', name: '8'}
    ];

    this.nightsTo = [
      {id: '2', name: '2'},
      {id: '3', name: '3'},
      {id: '4', name: '4'},
      {id: '5', name: '5'},
      {id: '6', name: '6'},
      {id: '7', name: '7'},
      {id: '8', name: '8'}
    ];

    this.searchData = {
      city: ['Kiev'],
      country: ['Turkey'],
      nightsFrom: ['3'],
      nightsTo: ['3'],
      dates: {
        from: new Date(),
        to: new Date()
      },
      category: ['3'],
      meals: ['BB'],
      tourists: {
        adults: ['1'],
        children: ['0']
      }
    };
  }

  search() {
    console.log(this.searchData);
  }

  updateDates(dates) {
    this.searchData.dates.from = dates.from;
    this.searchData.dates.to = dates.to;
  }

  updateCity(city) {
    this.searchData.city = city;
  }

  updateCountry(country) {
    this.searchData.country = country;
  }

  updateMeals(meals) {
    this.searchData.meals = meals;
  }

  updateFrom(nightsFrom) {
    this.searchData.nightsFrom = nightsFrom;
  }

  updateTo(nightsTo) {
    debugger;
    nightsTo > this.searchData.nightsFrom ? this.searchData.nightsTo = nightsTo
      : alert('До должно быть больше чем от!');
  }

  updateCategories(categories) {
    this.searchData.category = categories;
  }
}
