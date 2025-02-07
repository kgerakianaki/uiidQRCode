import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  uuid:string='';
  constructor() {}

  //Generation of UUID
  generateUUID() {
    this.uuid = uuidv4();  // Generates a UUID
    console.log('Generated UUID:', this.uuid);
  }

}
