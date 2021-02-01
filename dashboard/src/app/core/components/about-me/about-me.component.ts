import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/core/models/user';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input() userInfos?:RootObject;
  constructor() { }

  ngOnInit(): void {
  }

}
