import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [MarsRoverApiPhotos]
})

export class RoverFormComponent {
  photos: any[];
  noPhotos: boolean = false;
  constructor(private marsRoverPhotos: MarsRoverApiPhotos) { }

  getRoverImages(date: string, camera: string) {
    this.photos = null;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      if (response.json().photos.length > 0) {
        this.photos = response.json();
      }
    });
  }
}