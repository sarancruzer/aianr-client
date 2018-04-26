import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reactionCount: any;
  favouriteCount: any;
  taskCount: any;
  constructor(private _router: Router) { }

  ngOnInit() {

   this.reactionCount =  localStorage.getItem('reactions').length;
    this.favouriteCount = localStorage.getItem('favourites').length;
    // this.taskCount = localStorage.getItem('tasks').length;

    console.log('this.reactionCount.length');
    console.log(this.reactionCount);

    console.log('this.favouriteCount.length');
    console.log(this.favouriteCount);

  }

  navigate(url) {
    this._router.navigate([url]);
  }

}
