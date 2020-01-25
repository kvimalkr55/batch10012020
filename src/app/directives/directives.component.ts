import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  heroes = [];
  emotion = 'happy';
  enterData = '';
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
  constructor(private commHtpp: CommonserviceService) {
    this.heroes = ['chiru', 'pavan'];
    this.commHtpp.getClients()
    .subscribe( sucess => {
      console.log(sucess);
    })
         
   }

  ngOnInit() {
  }

  onUpdateData(event){
    this.enterData = event.target.value;
}



}
