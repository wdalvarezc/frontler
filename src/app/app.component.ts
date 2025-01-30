import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  // Asegúrate de agregar RouterModule en los imports
})
export class AppComponent {
  title = 'Mi aplicación';
}

