import { Component,  Inject, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { SynonymsService} from '../synonyms-service/synonyms.service';
import { Observable} from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  public text$: Observable<any>;
  public selectedWord: string;
  constructor(private textService: TextService,
              private synonymsService: SynonymsService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    this.text$ = this.textService.getText();
  }
  getSelection(id): void {
     this.selectedWord = window.getSelection().toString();
     this.textService.setTextId(id);
  }
}
