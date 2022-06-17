import { IUser } from './../models/IUser.model';
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

  public buscarUsuario(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  public cadastrarUsuario(usuario: IUser) {
    return this.http.post(this.url, usuario);
  }
}
