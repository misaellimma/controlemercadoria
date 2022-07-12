import { Component, OnInit } from '@angular/core';

interface Venda {
  idVenda: string;
  dataCadastro: string;
  valor: number;
}



@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  vendas: Venda[] = [
    {
      idVenda: '1',
      dataCadastro: '2021-03-21 08:00:00.000',
      valor: 120,
    },
    {
      idVenda: '2',
      dataCadastro: '2021-03-03 19:00:00.000',
      valor: 120,
    },
    {
      idVenda: '3',
      dataCadastro: '2021-03-08 06:00:00.000',
      valor: 120,
    },
    {
      idVenda: '4',
      dataCadastro: '2021-03-09 06:00:00.000',
      valor: 120,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
