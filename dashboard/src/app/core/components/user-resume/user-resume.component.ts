import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-resume',
  templateUrl: './user-resume.component.html',
  styleUrls: ['./user-resume.component.css']
})
export class UserResumeComponent implements OnInit {
  @Input() userInfos?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
