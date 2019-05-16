import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MockserviceService } from '../../services/mockservice.service';
import { Cities } from '../../models/cities';
import { Countries } from '../../models/countries';
import { Categories } from '../../models/categories';
import { Meals } from '../../models/meals';
import { SearchData } from '../../models/search-data';
import { Tourists } from '../../models/tourists';
import { Child } from '../../models/child';

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
  adults: Tourists[];
  children: Child[];

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
    this.adults = this.mockService.getTourists();
    this.children = this.mockService.getChildren();

    this.nightsFrom = [
      {id: '2', itemName: '2'},
      {id: '3', itemName: '3'},
      {id: '4', itemName: '4'},
      {id: '5', itemName: '5'},
      {id: '6', itemName: '6'},
      {id: '7', itemName: '7'},
      {id: '8', itemName: '8'}
    ];

    this.nightsTo = [
      {id: '2', itemName: '2'},
      {id: '3', itemName: '3'},
      {id: '4', itemName: '4'},
      {id: '5', itemName: '5'},
      {id: '6', itemName: '6'},
      {id: '7', itemName: '7'},
      {id: '8', itemName: '8'}
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
    this.searchData.nightsTo = nightsTo;
  }

  updateCategories(categories) {
    this.searchData.category = categories;
  }

  updateAdults(adults: any) {
    this.searchData.tourists.adults = adults;
  }

  updateChildren(children: any) {
    this.searchData.tourists.children = children;
  }
}
