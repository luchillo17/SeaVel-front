import { Component, Input, Output, EventEmitter } from '@angular/core';
import memoize from 'memoizee';
import { addMonths, format } from 'date-fns';

@Component({
  selector: 'app-time-line',
  templateUrl: './timeLine.component.html',
  styleUrls: ['./timeLine.component.scss']
})
export class TimeLineComponent {
  @Input()
  dateStr = '1_2000';

  @Output()
  timelineChange = new EventEmitter<string>();

  memoizedFormatLabel = memoize((m: number) =>
    format(addMonths(new Date(2000, 0), m), 'yyyy/MM')
  );

  formatLabel = (month: number) => {
    return this.memoizedFormatLabel(month);
  };

  setMonth(months: number) {
    this.dateStr = format(addMonths(new Date(2000, 0), months), 'M_yyyy');

    this.timelineChange.emit(this.dateStr);
  }
}
