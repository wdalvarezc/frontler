import { Component } from '@angular/core';
import { ItemService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

interface Item {
  id?: number;
  nombre: string;
  correo: string;
  edad: string;
}

@Component({
  selector: 'app-item-list',
  standalone: true,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  imports: [CommonModule, RouterModule]  // Importar CommonModule aquí
})
export class ItemListComponent {
  items$: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items$ = this.itemService.getItems();
  }

  deleteItem(id: number | undefined): void {
    if (id !== undefined) {
      this.itemService.deleteItem(id).subscribe(() => {
        this.items$ = this.itemService.getItems();  // Actualizar lista
      });
    } else {
      console.error('Item ID is undefined');
    }
  }
  
}
