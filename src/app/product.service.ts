import { Injectable } from '@angular/core';
import { Album } from './album';
import { Http } from '@angular/http';
import { Product } from './product';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";

  _productsUrl: string = "../assets/products.json";

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) =>
      <Album>response.json());
  }

  getProducts() {
    
  }
}
