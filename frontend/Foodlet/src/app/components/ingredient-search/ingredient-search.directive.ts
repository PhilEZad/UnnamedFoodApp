import {
  Directive,
  Input,
  Host,
  Self,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Directive({
  selector: '[forceSelection]',
})
export class AutocompleteForceSelectionDirective
  implements AfterViewInit, OnDestroy
{
  @Input() matAutocomplete: MatAutocomplete = null!;

  @Input('forceSelection') key: string = '';

  private destroyed = new Subject();

  constructor(
    @Host() @Self() private autoCompleteTrigger: MatAutocompleteTrigger,
    private ngControl: NgControl
  ) {}

  ngAfterViewInit() {
    this.autoCompleteTrigger.panelClosingActions
      .pipe(
        filter((e) => !e || !e.source),
        takeUntil(this.destroyed)
      )
      .subscribe((e) => {
        const selected = this.matAutocomplete.options
          .map((option) => option.value)
          .find(
            (option) =>
              (this.key ? option[this.key] : option) === this.ngControl.value
          );

        if (selected && this.ngControl && this.ngControl.control) {
          this.ngControl.control.setValue(selected);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next(undefined);
  }
}
