import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url = 'http://localhost:4200/data/events.json';
  
  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }

  GetHttpHeaders() : HttpHeaders{
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Request-Headers', '*');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    return headers;
  }

  getEvent(id: number): Observable<any[]>{
    const url = 'http://localhost:4200/data/events.json';
  
    const obj = this.http.get<any>(url);
   
    return obj
  }
}
