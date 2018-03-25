import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { Status } from './status';

@Injectable()
export class StatusService {

  private statusApiUrl = environment.baseApiUrl + '/status.json';

  constructor(private http: HttpClient) { }

  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.statusApiUrl);
  }

}
