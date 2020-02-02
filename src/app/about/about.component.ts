import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 name;
 colorName;
 flag = false;
 colors = [
   'blue','red', 'green'
 ];
 usersDetails = [
   {
     color:'green',
     gender: 'F',
     name: 'one',
     image: './../../assets/images.jpg',
     description: 'Some example text some example text. John Doe is an architect and engineer'
   },
   {
    color:'pink',
    gender: 'M',
    name: 'two',
    image: './../../assets/images.jpg',
    description: 'Some example text some example text. John Doe is an architect and engineer'
  },
  {
    color:'yellow',
    gender: 'F',
    name: 'three',
    image: './../../assets/images.jpg',
    description: 'Some example text some example text. John Doe is an architect and engineer'
  },
  {
    color:'blue',
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

  colorChange(data){
    alert(data);
    this.colorName = data;
  }

}
