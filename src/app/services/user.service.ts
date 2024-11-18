import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {User} from '../interfaces/user.interface'

@Injectable({providedIn: 'root'})
export class UserService {
  BD_URL: String = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.DB_URL}/product`);
  }

  getbyid(user_id: string): Observable<User>{
    return this.httpClient.get(`${DB_URL}/USER/${user_id}`);
  }

  createUser(username: string, email:string, password:string) Observable<User>{
    return this.httpClient.post<User>(`${this.BD_URL}/user/create`,user);
  }

  deleteUser(user_id: string): Observable<User>{
    return this.httpClient.delete<User>(`${this.BD_URL}/user/delete?userID=${user_id}}`);
  }

  actualizar(user_id:string, email: string,biography?: string,
    profilePicture?:string): Observable<User>{
    return this.httpClient.put<User>(`${this.BD_URL}/user/update?userID=${user_id}`,User}); 
  }


}
