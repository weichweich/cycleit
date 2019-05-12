import { Component, OnInit, Input } from '@angular/core';
import { Bicycle } from 'src/app/model/bicycle';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HansPeterProfile } from '../../mock-profile';

@Component({
  selector: 'app-repair-choose-parts',
  templateUrl: './repair-choose-parts.page.html',
  styleUrls: ['./repair-choose-parts.page.scss'],
})
export class RepairChoosePartsPage implements OnInit {
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
