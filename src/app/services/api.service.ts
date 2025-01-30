  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable, tap } from 'rxjs';
  
  interface Item {
    id?: number;
    nombre: string;
    correo: string;
    edad: string;
  }
  
  @Injectable({
    providedIn: 'root',
  })
  export class ItemService {
    private apiUrl = 'https://backler-e15b2f0f3e77.herokuapp.com/api/usuarios';  // Cambia esta URL por la de tu API real
  
    constructor(private http: HttpClient) {}
  
    getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.apiUrl).pipe(
        tap(data => console.log(data))  // Esto imprimirá los datos en la consola
      );
    }    
  
    addItem(item: Item): Observable<Item> {
      return this.http.post<Item>(this.apiUrl, item);
    }
  
    updateItem(item: Item): Observable<Item> {
      return this.http.put<Item>(`${this.apiUrl}/${item.id}`, item);
    }
  
    deleteItem(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  }
  