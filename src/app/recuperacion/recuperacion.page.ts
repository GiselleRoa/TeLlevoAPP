import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  handleRefresh(event: any) {
    setTimeout(() => {
      // Cualquier llamada para cargar datos va aquí
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
  }

}
