import { FavouriteService } from './../_service/favourite.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  providers: [FavouriteService]
})

export class FavouriteComponent implements OnInit {
  favouriteLists: any;

  constructor(private _service: FavouriteService, private _location: Location) { }

  ngOnInit() {
    // this.favouriteLists = JSON.parse(localStorage.getItem("favourites"));
    this.getFavourites();
  }


  getFavourites() {
      this._service.getFavourites().subscribe(response => {
          const res = response.result.data.info;
          this.favouriteLists = res;
          console.log('-------------------------------');
       },
     err => {
        console.log('error msg');
        // this.donationlistprovider.showErrorToast(err);
    });

    }

  goBackCall() {
    this._location.back();
  }

}
