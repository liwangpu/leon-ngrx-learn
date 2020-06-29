import { Component, OnInit } from '@angular/core';
import { StateStoreService } from './state-store';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public constructor(
        private myStore: StateStoreService
    ) { }

    public ngOnInit(): void {
        // this.myStore.scopeMessage$.subscribe(mes => console.log('message', mes));
        // this.myStore.scope$.subscribe(scope => console.log('scope', scope));

        this.myStore.getDynamicScope({ myName: 'name', myMessage: 'info.message' }).subscribe(res => {
            console.log('data', res);
        });

    }


}
