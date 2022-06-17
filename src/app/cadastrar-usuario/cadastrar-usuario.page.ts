import { UserService } from './../services/user.service';
import { IUser } from './../models/IUser.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  public usuario: IUser = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public async salvarUsuario() {
    this.userService.cadastrarUsuario(this.usuario).subscribe(retorno => {
      this.usuario = retorno;
    });
  }
}
