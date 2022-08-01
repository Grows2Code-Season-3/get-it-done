import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Get It Done";
  numTasks: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
