import { Component, OnInit, Input } from '@angular/core';

import {RepairCase} from '../../model/repair-case';

@Component({
  selector: 'app-repair-case-item',
  templateUrl: './repair-case-item.component.html',
  styleUrls: ['./repair-case-item.component.scss'],
})
export class RepairCaseItemComponent implements OnInit {
  @Input() repairCase: RepairCase;

  constructor() { }

  ngOnInit() {
  }
  
}
