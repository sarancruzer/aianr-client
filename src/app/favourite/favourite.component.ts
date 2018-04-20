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
          const res = response.result;
          if (res.statusCode === 200) {
            this.favouriteLists = res.data.info;
            // localStorage.setItem('favourites', JSON.stringify(res));
          }

          if (res.statusCode === 204) {
            this.favouriteLists = [];
            // localStorage.setItem('favourites', JSON.stringify(res));
          }
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
