import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  http = inject(HttpClient)

  getIcon(name: string): Observable<string> {
    return this.http.get(`assets/icons/${name}.svg`, { responseType: 'text' });
  }
}
