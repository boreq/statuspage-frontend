import { Component, OnInit } from '@angular/core';

import { Status } from '../status';
import { StatusService } from '../status.service';

// How often the page is updated [ms].
const updateEvery = 30 * 1000;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  status: Status[];

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.update();
  }


  private update() {
    this.statusService.getStatus()
      .subscribe((status) => this.handleStatus(status));
    setTimeout(() => this.update(), updateEvery);
  }

  private handleStatus(status: Status[]) {
    this.status = status;
  }

}
