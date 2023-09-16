import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('bounce',[
      state('start', style({transform: 'scale(1)'})),
      state('end', style({ transform: 'scale(1.2)'})),
      transition('start <=> end', animate('300ms ease-in-out')),
    ]),
  ],
})
export class HomePage implements OnInit{
  nombre: string = '';

  animationState = 'start';

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.nombreActual.subscribe((nombre) => {
      this.nombre  = nombre;
    })

    setTimeout(() => {
      this.animationState = 'end';
    }, 1000);
  }


}
