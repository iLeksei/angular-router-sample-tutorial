import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {CRISES} from "./mock-crises";
import {MessageService} from "../message.service";
import {Crisis} from "./crisis";
import {Hero} from "../heroes/hero";

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CrisisService: fetched heroes');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}
