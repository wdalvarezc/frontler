import { Component } from '@angular/core';
import { ItemService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

interface Item {
  id?: number;
  nombre: string;
  correo: string;
  edad: string;
}

@Component({
  selector: 'app-item-form',
  standalone: true,
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  imports: [FormsModule]  // Añadir otros módulos si es necesario
})
export class ItemFormComponent {
  item: Item = {
    nombre: '',
    correo: '',
    edad: ''
  };
  isEditMode = false;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.itemService.getItems().subscribe(items => {
        this.item = items.find(i => i.id === +id) || {
          nombre: '',
          correo: '',
          edad: ''
        };
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.itemService.updateItem(this.item).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.itemService.addItem(this.item).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
