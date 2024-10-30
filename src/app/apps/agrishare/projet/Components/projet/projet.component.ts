import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }
}
