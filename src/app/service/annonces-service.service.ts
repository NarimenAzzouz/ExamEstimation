import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../annonce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesServiceService {

  private apiUrl="http://localhost:3000/annonce";

  constructor(private http:HttpClient) { }

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl);
  }

  addEstimation(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl , annonce);
  }
}
