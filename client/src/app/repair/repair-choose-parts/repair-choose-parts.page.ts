import { Component, OnInit, Input } from '@angular/core';
import { Bicycle } from 'src/app/model/bicycle';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { CycleitService } from 'src/app/api/cycleit.service';
import { RepairShop } from 'src/app/model/repair_shop';
import { RepairCase } from 'src/app/model/repair-case';


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
    private alertController: AlertController,
    public navCtrl: NavController
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

  choose_workstation(shop: RepairShop) {
    this.cycleitService.createRepairCase(new RepairCase({
      "defect": this.defect,
      "bicycleConfig": 1,
      "user": 1,
      "repairShop": shop.id,
      "price": 20,
    })).subscribe(x => {

      console.log("Submitted");
    }
    );
    this.presentAlert(shop);
    this.shops = []

    this.navCtrl.back();
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
