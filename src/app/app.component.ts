import { Component, OnInit } from '@angular/core';
import { StateStoreService } from './state-store';

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
        this.myStore.scopeMessage$.subscribe(mes => console.log('message', mes));
        this.myStore.scope$.subscribe(scope => console.log('scope', scope));

    }


}
