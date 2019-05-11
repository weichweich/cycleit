import { Component, OnInit, Input } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { Bicycle } from '../../model/bicycle';

@Component({
  selector: 'app-bicycle-item',
  templateUrl: './bicycle-item.component.html',
  styleUrls: ['./bicycle-item.component.scss'],
})
export class BicycleItemComponent implements OnInit {
  @Input() bicycle: Bicycle;

  constructor() { }

  ngOnInit() {
  }

}
