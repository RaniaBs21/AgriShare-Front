import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";

@Component({
  selector: 'app-ressources',
  standalone: true,
  imports: [],
  templateUrl: './ressources.component.html',
  styleUrl: './ressources.component.css'
})
export class RessourcesComponent {

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }
}
