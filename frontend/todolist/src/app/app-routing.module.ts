import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './itens/item-list/item-list.component';
import { ItemFormComponent } from './itens/item-form/item-form.component';

const routes: Routes = [
  {path: 'itens', component: ItemListComponent},
  {path: 'item/create', component: ItemFormComponent},
  {path: 'item/:id', component: ItemFormComponent},
  {path: '',
    redirectTo: '/itens',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
