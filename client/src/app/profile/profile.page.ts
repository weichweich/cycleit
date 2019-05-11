import { Component, OnInit } from '@angular/core';
import {CycleitService} from '../api/cycleit.service'
import { Observable } from 'rxjs';
import { Profile } from "../model/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  results: Observable<any>;
  constructor(private cycleitService :CycleitService) { }

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
