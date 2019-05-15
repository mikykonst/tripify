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
      {id: 'Киев', name: 'Киев'},
      {id: 'Днепр', name: 'Днепр'},
      {id: 'Харьков', name: 'Харьков'}
    ];
    return cities;
  }

  getCountries() {
    const countries: Countries[] = [
      {id: 'Турция', name: 'Турция'},
      {id: 'Египет', name: 'Египет'},
      {id: 'Польша', name: 'Польша'}
    ];
    return countries;
  }

  getTourists() {
    const tourists: Tourists[] = [
      {id: '1', name: '1'},
      {id: '2', name: '2'},
      {id: '3', name: '3'}
    ];
    return tourists;
  }

  getChildren() {
    const children: Child[] = [
      {id: '1', name: '1'},
      {id: '2', name: '2'},
      {id: '3', name: '3'}
    ];
    return children;
  }

  getMeals() {
    const meals: Meals[] = [
      {id: 'BB', name: 'BB'},
      {id: 'AI', name: 'AI'},
      {id: 'UAI', name: 'UAI'}
    ];
    return meals;
  }

  getCategories() {
    const categories: Categories[] = [
      {id: '3', name: '3'},
      {id: '4', name: '4'},
      {id: '5', name: '5'}
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
