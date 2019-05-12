import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bicycle } from 'src/app/model/bicycle';
import { CycleitService } from 'src/app/api/cycleit.service';

@Component({
  selector: 'app-bicycle-details',
  templateUrl: './bicycle-details.page.html',
  styleUrls: ['./bicycle-details.page.scss'],
})
export class BicycleDetailsPage implements OnInit {
  bicycle: Bicycle;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cycleitService: CycleitService
  ) {
    this.getBicycle();
  }

  ngOnInit() {

  }

  getBicycle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cycleitService.getBicycleById(id).subscribe(
      bike => {
        this.bicycle = bike;
      }
    );
  }

}
