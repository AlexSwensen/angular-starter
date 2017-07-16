import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  text = 'foo';
  inputText: string;

  characters = [
    {
      name: 'Bilbo Baggins',
      profession: 'Theif'
    },
    {
      name: 'Gandalf',
      profession: 'Wizard!'
    },
    {
      name: 'George Lucas',
      profession: 'Best Director of all time!'
    }
  ];

  list = [

  ];


  submitClicked(event) {
    console.log('submitClicked', event);
    this.list.push(this.inputText);
  }

  delete(index) {
    this.list.splice(index, 1);
  }

}
