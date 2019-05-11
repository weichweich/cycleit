import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bicycle } from 'src/app/model/bicycle';

import { HansPeterProfile } from '../../mock-profile';

@Component({
  selector: 'app-bicycle-details',
  templateUrl: './bicycle-details.page.html',
  styleUrls: ['./bicycle-details.page.scss'],
})
export class BicycleDetailsPage implements OnInit {
  bicycle: Bicycle;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBicycle();
  }

  getBicycle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bicycle = HansPeterProfile.bikes[id];
    // Call service e.g. getBicycleById(id)
  }

}
