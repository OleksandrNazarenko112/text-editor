import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TextService } from '../text-service/text.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit, OnDestroy {
  private destroySubject$: Subject<void> = new Subject();
  constructor( @Inject(DOCUMENT) private document: any,
               private textService: TextService) {
  }

  ngOnInit(): void {
  }
  bold(): void {
    this.document.execCommand('bold', false, null);
    this.getElem();
  }
  italic(): void {
    this.document.execCommand('italic', false, null);
    this.getElem();
  }
  underline(): void {
    this.document.execCommand('underline', false, null);
    this.getElem();
  }
  getElem(): void {
    this.textService.getTextId().pipe(takeUntil(this.destroySubject$)).subscribe(response => {
      const newText = this.document.getElementById(response).innerHTML;
      this.textService.putText({id: response, text: newText}).subscribe();

      //This methods can be removed and needed only to show that db is updated
      this.textService.getText().pipe(takeUntil(this.destroySubject$)).subscribe(res => console.log('db', res));
    });
  }
  ngOnDestroy(): void {
    this.destroySubject$.next();
  }
}
