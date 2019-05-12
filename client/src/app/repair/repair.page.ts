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
    this.bicycles = HansPeterProfile.bikes;
    cycleitService.getBicycleByUserId(1).subscribe(x => {
      this.bicycles = x;
    });
    cycleitService.getModel(1).subscribe(x => {
      this.models = x;
    });
  }

  ngOnInit() {
  }

  choose_workstation(shop:RepairShop) {
    this.cycleitService.createRepairCase(new RepairCase({
        "defect":this.defect,
        "bicycleConfig": 1,
        "user":1,
        "repairShop":shop.id,
        
      })).subscribe(x =>{

            console.log("Submitted");
      }
      );
      this.presentAlert(shop);
      this.shops = []

  }
  async presentAlert(shop) {
    const alert = await this.alertController.create({
      header: 'Submission',
      message: 'Your order is submitted to ' + shop.name,
      buttons: ['OK']
    });

    await alert.present();
  }
  push_submit() {
        this.cycleitService.getRepairShops().subscribe( x =>{
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
