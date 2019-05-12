import { Component, OnInit, Input } from '@angular/core';
import { Bicycle } from 'src/app/model/bicycle';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HansPeterProfile } from '../../mock-profile';
import { CycleitService } from 'src/app/api/cycleit.service';
import { RepairShop } from 'src/app/model/repair_shop';

@Component({
  selector: 'app-repair-choose-parts',
  templateUrl: './repair-choose-parts.page.html',
  styleUrls: ['./repair-choose-parts.page.scss'],
})
export class RepairChoosePartsPage implements OnInit {
  bicycle: Bicycle;
  defect: string;
  shops: RepairShop[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cycleitService: CycleitService,
  ) {
    this.getBicycle();
  }

  ngOnInit() {

  }

  getBicycle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cycleitService.getBicycleById(id).subscribe(
      bike => {
        console.log(bike, "pls")
        this.bicycle = bike;
      }
    );
  }

  push_submit() {
    this.cycleitService.getRepairShops().subscribe(x => {
      this.shops = x;
      console.log("Shops arrived");
    }
    )
    // Call our service function which returns an Observable
    // this.cycleitService.createRepairCase(new RepairCase({
    //   "defect":this.defect,
    //   "bicycleConfig": 1,
    //   "user":1,
    // })).subscribe(x =>{
    //     this.cycleitService.getRepairShops().subscribe( x =>{
    //       this.shops = x;
    //       console.log("Shops arrived");
    //     }
    //     )

    //   console.log("test")
    // });

  }

}
