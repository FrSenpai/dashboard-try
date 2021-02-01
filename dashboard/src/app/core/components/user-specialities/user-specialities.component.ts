import { Component, Input, OnInit } from '@angular/core';
import { RootObject} from 'src/app/core/models/user';

@Component({
  selector: 'app-user-specialities',
  templateUrl: './user-specialities.component.html',
  styleUrls: ['./user-specialities.component.css']
})
export class UserSpecialitiesComponent implements OnInit {
  @Input() userInfos?:RootObject;
  constructor() { }

  ngOnInit(): void {
  }

}
