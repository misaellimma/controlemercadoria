import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaComponent } from './venda.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: VendaComponent }
];

@NgModule({
  declarations: [
    VendaComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class VendaModule { }
