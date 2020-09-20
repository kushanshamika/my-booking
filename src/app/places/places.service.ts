import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Mirissa',
      'https://somethingoffreedom.com/wp-content/uploads/2018/01/Palm-tree-grove-Mirissa.jpg',
      'Mirissa is one of the main beach destinations in southern Sri Lanka.',
      199.00
    ),
    new Place(
      'p2',
      'Arugam Bay',
      'https://s29745.pcdn.co/wp-content/uploads/2016/07/Things-To-Do-in-Arugam-Bay.jpg.optimal.jpg',
      'Arugambay is a sunny and turkiz area at Sri Lanka.',
      210.00
    )
  ];

  get places() {
    return [... this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {... this._places.find(p => p.id === id)}; 
  }
}
