import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  abrirProdutos(){
    this.router.navigate(['/loja/produto/'])
}
abrirGerenciarClientes(){
  this.router.navigate(['/gerenciar-clientes/'])
}
abrirGerenciarProdutos(){
  this.router.navigate(['/gerenciar-produtos/'])
  }
}
