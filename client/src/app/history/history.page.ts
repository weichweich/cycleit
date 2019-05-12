import { Component, OnInit } from '@angular/core';
import { CycleitService } from '../api/cycleit.service'

import {RepairCase} from '../model/repair-case'
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  repairCases: RepairCase[];

  constructor(private cycleitService :CycleitService) {
      cycleitService.getRepairCases(1).subscribe(x => {
          this.repairCases = x;
      });
  }

  ngOnInit() {
  }

}
