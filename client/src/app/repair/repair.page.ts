import { Component, OnInit } from '@angular/core';
import { HansPeterProfile } from '../mock-profile';
import { Bicycle } from '../model/bicycle';
import { Observable } from 'rxjs';
import { CycleitService } from '../api/cycleit.service';
import { BicycleModel } from '../model/bicycle-model';
import { RepairCase } from '../model/repair-case';
import { RepairShop } from '../model/repair_shop';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.page.html',
  styleUrls: ['./repair.page.scss'],
})
export class RepairPage implements OnInit {
  bicycles: Bicycle[];
  models: BicycleModel;
  defect: string;
  shops: RepairShop[];


  results: Observable<any>;
  constructor(private cycleitService: CycleitService, public alertController: AlertController) {
    this.bicycles = []
    cycleitService.getBicycleByUserId(1).subscribe(x => {
      this.bicycles = x;
    });
    cycleitService.getModel(1).subscribe(x => {
      this.models = x;
    });
  }

  ngOnInit() {
  }
}
