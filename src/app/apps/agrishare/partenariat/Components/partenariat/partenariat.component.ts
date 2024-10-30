import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";

@Component({
  selector: 'app-partenariat',
  standalone: true,
  imports: [],
  templateUrl: './partenariat.component.html',
  styleUrl: './partenariat.component.css'
})
export class PartenariatComponent {
  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }
}
