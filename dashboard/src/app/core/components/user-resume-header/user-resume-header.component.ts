import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-resume-header',
  templateUrl: './user-resume-header.component.html',
  styleUrls: ['./user-resume-header.component.css']
})
export class UserResumeHeaderComponent implements OnInit {
  @Input() userInfos?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
