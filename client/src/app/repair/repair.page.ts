import { Component, OnInit } from '@angular/core';
import { HansPeterProfile } from '../mock-profile';
import { Bicycle } from '../model/bicycle';
import { Observable } from 'rxjs';
import { CycleitService } from '../api/cycleit.service';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.page.html',
  styleUrls: ['./repair.page.scss'],
})
export class RepairPage implements OnInit {
  bicycles: Bicycle[];

  results: Observable<any>;
  constructor(private cycleitService: CycleitService) {
    this.bicycles = HansPeterProfile.bikes;
    cycleitService.getBicycleByUserId(1).subscribe(x => {
      this.bicycles = x;
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
