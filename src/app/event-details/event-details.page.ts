import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage {
  event: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el evento pasado a través de la navegación
    this.event = history.state.event;
  }
}
