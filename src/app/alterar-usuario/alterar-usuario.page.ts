/* eslint-disable @typescript-eslint/dot-notation */
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { IUser } from './../models/IUser.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

  public usuario: IUser = {};
  public id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.buscarUsuario(this.id).subscribe(dados => {
      this.usuario.name = dados['data'].first_name + ' ' + dados['data'].last_name;
      this.usuario.id = dados['data'].id;
    });
  }

  public salvar() {
    this.userService.alterarUsuario(this.usuario).subscribe(retorno => {
      this.usuario = retorno;
    });
  }
}
