import { Component } from '@angular/core';
import * as memoize from 'memoizee';
import { addMonths, format } from 'date-fns';

@Component({
  selector: 'app-time-line',
  templateUrl: './timeLine.component.html',
  styleUrls: ['./timeLine.component.scss']
})
export class TimeLineComponent {
  memoizedFormatLabel = memoize((m: number) =>
    format(addMonths(new Date(2000, 0), m), 'yyyy/MM')
  );

  formatLabel = (month: number) => {
    return this.memoizedFormatLabel(month);
  };
}
