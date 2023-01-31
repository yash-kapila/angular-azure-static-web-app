import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-azure-static-web-app';

  planets$ = this.http.get(`/api/planets/`).pipe(
    map((response: any) => response.results)
  );

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}
}
