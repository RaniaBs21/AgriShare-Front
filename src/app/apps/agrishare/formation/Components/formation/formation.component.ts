import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }
}
