import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ : Object;
  constructor(private data : DataService) { }
 

  ngOnInit() {
    this.data.getUsers().subscribe( response =>{
        this.user$ = response;
        console.log(this.user$);
    });
  }
}
