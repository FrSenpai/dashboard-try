import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-resume-header',
  templateUrl: './user-resume-header.component.html',
  styleUrls: ['./user-resume-header.component.css']
})
export class UserResumeHeaderComponent implements OnInit {
  @Input() userInfos: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
