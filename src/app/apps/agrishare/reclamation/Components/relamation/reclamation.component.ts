import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";

@Component({
  selector: 'app-reclamation',
  standalone: true,
  imports: [],
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.css'
})
export class ReclamationComponent {

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }
}
