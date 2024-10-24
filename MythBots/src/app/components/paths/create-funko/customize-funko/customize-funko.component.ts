import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customize-funko',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './customize-funko.component.html',
  styleUrl: './customize-funko.component.scss'
})
export class CustomizeFunkoComponent {

  options = [
    {
      image: '',
      description: ''
    }
  ]
}
