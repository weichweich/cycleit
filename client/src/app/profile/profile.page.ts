import { Component, OnInit } from '@angular/core';
import { CycleitService } from '../api/cycleit.service'
import { Observable } from 'rxjs';
import { Profile } from "../model/profile";
import { HansPeterProfile } from '../mock-profile';
import { Bicycle } from '../model/bicycle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
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
