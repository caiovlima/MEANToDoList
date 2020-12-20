import { Item } from './models/item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = 'https://to-do-applist.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Item[]>(this.URL);
  }

  getById(id: string) {
    const url = `${this.URL}item/${id}`;
    return this.http.get<Item>(url);
  }

  create(item: Item) {
    return this.http.post<Item>(`${this.URL}item/create`, item);
  }

  update(item: Item) {
    return this.http.put<Item>(`${this.URL}item/${item._id}`, item);
  }

  remove(id: string) {
    const url = `${this.URL}item/${id}`;
    return this.http.delete<Item>(url);
  }

}
