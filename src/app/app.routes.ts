import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';

export const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'add', component: ItemFormComponent },
  { path: 'edit/:id', component: ItemFormComponent }
];
