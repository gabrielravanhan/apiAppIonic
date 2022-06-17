/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibir-usuario',
  templateUrl: './exibir-usuario.page.html',
  styleUrls: ['./exibir-usuario.page.scss'],
})
export class ExibirUsuarioPage implements OnInit {

  public id = 0;
  public user: any = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.buscarUsuario(this.id).subscribe(dados => {
      this.user = dados['data'];
      console.log(this.user);
    });
  }

}
