import { Component, Input, OnInit } from '@angular/core';
import { SynonymsService} from '../synonyms-service/synonyms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  private _synonym: string;
  public synonymsArray$: Observable<any>;

  @Input() set synonym(synonym: string) {
    this._synonym = synonym;
    if (this._synonym) {
      this.synonymsArray$ =  this.synonymsService.getSynonyms(this._synonym);
    }
  }
  constructor(private synonymsService: SynonymsService) { }

  ngOnInit() {
  }

}
