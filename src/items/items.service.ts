import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private apiUrl = 'http://localhost:3000/items'; 

  constructor(private http: HttpClient) {}

  // Método para obtener los items
  getItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}