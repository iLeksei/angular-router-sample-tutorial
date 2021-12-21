import { Component, OnInit } from '@angular/core';
import {CrisisService} from "../crisis.service";
import {MessageService} from "../../message.service";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Crisis} from "../crisis";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCrises();
      })
    );
  }
}
