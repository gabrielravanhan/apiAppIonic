import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  public buscarTodosUsuarios(pagina: number) {
    if (pagina <= 0) {
      pagina = 1;
    }

    return this.http.get(`${this.url}?page=${pagina}`);
  }
}
