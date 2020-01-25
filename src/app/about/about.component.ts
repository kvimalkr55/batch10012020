import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 name;
 usersDetails = [
   {
     name: 'one',
     image: './../../assets/images.jpg',
     description: 'Some example text some example text. John Doe is an architect and engineer'
   },
   {
    name: 'two',
    image: './../../assets/images.jpg',
    description: 'Some example text some example text. John Doe is an architect and engineer'
  },
  {
    name: 'three',
    image: './../../assets/images.jpg',
    description: 'Some example text some example text. John Doe is an architect and engineer'
  },
  {
    name: 'four',
    image: './../../assets/images.jpg',
    description: 'Some example text some example text. John Doe is an architect and engineer'
  }
 ]
  constructor() {
    this.name = 'on'; 
   }

  ngOnInit() {
  }

  getServer(){
    if(this.name == 'on'){
      return this.name = 'off';
    }
      return this.name = 'on';
  }

}
