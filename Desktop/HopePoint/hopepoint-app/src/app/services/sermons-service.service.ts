import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Video } from '../models/videos';

@Injectable({
  providedIn: 'root'
})
export class SermonsService {
  sermonsUrl = string;


  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.sermonsUrl, {headers: this.GetHttpHeaders()})
  }

  GetHttpHeaders() : HttpHeaders{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return headers;
  }
 
  
}
