import {Component, OnInit} from '@angular/core';
import {SalariedService} from "./salaried.service";

@Component({
  selector: 'app-salaried',
  templateUrl: './salaried.component.html',
  styleUrls: ['./salaried.component.css']
})
export class SalariedComponent implements OnInit {

  salariedList: any;

  constructor(private salariedService: SalariedService) {
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(){
    this.salariedService.findAll().subscribe(salarieds => {
      this.salariedList = salarieds;
    });
  }

  getDistinctSalariedByKey(key: string) {
    this.salariedService.getDistinctByKey(key).subscribe(salarieds => {
      this.salariedList = salarieds;
    });
  }

}
