import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDataCenter, setData } from 'src/app/data-center';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public constructor(
    private store: Store<IDataCenter>
  ) { }

  public ngOnInit(): void {
    this.store.subscribe(d => {
      console.log('d:', d);
    });

    this.store.dispatch(setData({ data: { name: 'Leon', age: 18 } }));
  }

}
