import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styleUrls: [ "./css/app.css" ]
})

export class AppComponent {
  name: string;
  artists: any;

  onClick(myItem, myElement) {
    this.name=myItem.name;
    myElement.style.backgroundColor="#FECE4E"
  }

  addArtist(artist){
    if(artist !== ''){
      this.artists.push({ name: artist, school: "School of hard knocks"})
    }
  }
  constructor() {
    this.name = 'Lance Armstrong';
    this.artists = [
      {
        name: 'Adam Anderson',
        school: 'East High'
      },
      {
        name: 'Bob Knight',
        school: 'Southlake'
      },
      {
        name: 'Chris Smith',
        school: 'Harvard'
      }
    ]
}
