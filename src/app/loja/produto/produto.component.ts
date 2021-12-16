import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  idProduto;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    
   this.idProduto = route.params.value.id;
   }

  ngOnInit() {
  }
  voltar() {
    this.router.navigate(['/produto/'])
  }

}
