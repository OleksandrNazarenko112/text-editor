import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SynonymsService {
  private synonym = new BehaviorSubject('');

  constructor(private http: HttpClient) { }
 getSynonyms(synonym) {
    return this.http.get('http://api.datamuse.com/words?ml=' + synonym);
 }
}
