import {Component, inject} from '@angular/core';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {async} from "rxjs";

@Component({
  selector: 'app-fetch',
  template: `<h2>Your Country</h2>
  <p *ngIf="countries$ | async as countries">Country: {{countries[0].name}} </p>`,
  standalone: true,
  imports: [
    NgForOf,

    NgIf, AsyncPipe
  ]
})
export class FetchComponent {
  countries$ = inject(HttpClient).get<{name: string}[]>('https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8');
}
