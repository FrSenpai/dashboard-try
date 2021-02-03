import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public screenHeight:number;
  public screenWidth:number;
  constructor() { 
    this.screenHeight = innerHeight;
    this.screenWidth = innerWidth;
  }

  ngOnInit(): void {
    
  }

  public checkResolution():Boolean {
    return (this.screenWidth > 890) 
  }


  public onResize(event:any):void {
    if (event.type === "resize") {
      this.screenWidth = event.target.innerWidth;
      this.screenHeight = event.target.innerHeight;
    }
  }
}
