import { Injectable } from '@angular/core';
import { Cities } from '../models/cities';
import { Countries } from '../models/countries';
import { Tourists } from '../models/tourists';
import { Child } from '../models/child';
import { Meals } from '../models/meals';
import { Categories } from '../models/categories';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockserviceService {

  constructor() {
  }

  getCities() {
    const cities: Cities[] = [
      {id: 'Киев', itemName: 'Киев'},
      {id: 'Днепр', itemName: 'Днепр'},
      {id: 'Харьков', itemName: 'Харьков'}
    ];
    return cities;
  }

  getCountries() {
    const countries: Countries[] = [
      {id: 'Турция', itemName: 'Турция'},
      {id: 'Египет', itemName: 'Египет'},
      {id: 'Польша', itemName: 'Польша'}
    ];
    return countries;
  }

  getTourists() {
    const tourists: Tourists[] = [
      {id: '1', itemName: '1'},
      {id: '2', itemName: '2'},
      {id: '3', itemName: '3'}
    ];
    return tourists;
  }

  getChildren() {
    const children: Child[] = [
      {id: '1', itemName: '1'},
      {id: '2', itemName: '2'},
      {id: '3', itemName: '3'}
    ];
    return children;
  }

  getMeals() {
    const meals: Meals[] = [
      {id: 'BB', itemName: 'BB'},
      {id: 'AI', itemName: 'AI'},
      {id: 'UAI', itemName: 'UAI'}
    ];
    return meals;
  }

  getCategories() {
    const categories: Categories[] = [
      {id: '3', itemName: '3'},
      {id: '4', itemName: '4'},
      {id: '5', itemName: '5'}
    ];
    return categories;
  }


  getAppoloData(apollo: Apollo) {
    return apollo.watchQuery({
      query: gql`
      {
        tours {
          id
          fromCountry
          toCity
        }
      }
    `
    });
  }
}
