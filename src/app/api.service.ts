import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api'; // URL del backend

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/hello`);
  }
}
