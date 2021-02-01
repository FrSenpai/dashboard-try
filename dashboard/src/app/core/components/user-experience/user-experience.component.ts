import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/core/models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.css']
})
export class UserExperienceComponent implements OnInit {
  @Input() userInfos?:RootObject;
  constructor() { }

  ngOnInit(): void {
  }

}
