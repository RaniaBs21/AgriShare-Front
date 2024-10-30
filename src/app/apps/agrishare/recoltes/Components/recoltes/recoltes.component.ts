import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";

@Component({
  selector: 'app-recoltes',
  standalone: true,
  imports: [],
  templateUrl: './recoltes.component.html',
  styleUrl: './recoltes.component.css'
})
export class RecoltesComponent {

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }
}
