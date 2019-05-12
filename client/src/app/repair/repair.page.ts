import { Component, OnInit } from '@angular/core';
import { HansPeterProfile } from '../mock-profile';
import { Bicycle } from '../model/bicycle';
import { BicycleModel } from '../model/bicycle-model';
import { Observable } from 'rxjs';
import { CycleitService } from '../api/cycleit.service';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.page.html',
  styleUrls: ['./repair.page.scss'],
})
export class RepairPage implements OnInit {
  models: BicycleModel[];

  results: Observable<any>;
  constructor(private cycleitService: CycleitService) {
    cycleitService.getBicycleModelsByManufacturerId(1).subscribe(x => {
      this.models = x;
    });
  }

  ngOnInit() {
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.cycleitService.getProfile(1);
    this.results.subscribe((profile) => {
      console.log(profile)
    });
  }
}
