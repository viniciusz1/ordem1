import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos = [
    1, 3 , 40, 30, 50 , 38 , 58909, 32, 54
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  abrirProduto(produto){
    
    this.router.navigate(['/produto/', produto])

}
voltar() {
  this.router.navigate(['/'])
}
}
