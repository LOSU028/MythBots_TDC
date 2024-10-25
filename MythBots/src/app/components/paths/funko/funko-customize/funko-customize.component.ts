import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-funko-customize',
  standalone: true,
  imports: [RouterLink, CommonModule, AppComponent],
  templateUrl: './funko-customize.component.html',
  styleUrl: './funko-customize.component.scss'
})
export class FunkoCustomizeComponent {

  options = [
    {
      image: '',
      description: ''
    }
  ]
}
