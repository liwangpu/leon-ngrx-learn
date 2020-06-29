import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import * as fromStateStore from '../../state-store';

@Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

    public editForm: FormGroup;
    public constructor(
        private fb: FormBuilder,
        private myStore: fromStateStore.StateStoreService
    ) {
        this.editForm = fb.group({
            name: [],
            age: [],
            message: []
        });
    }

    public ngOnInit(): void {
        this.myStore.scope$.pipe(take(1)).subscribe(scope => {
            let { name, age, info } = scope;
            this.editForm.patchValue({ name, age, message: info.message });
            // console.log('scope', info);
        });
    }

    public save(): void {
        let { name, age, message } = this.editForm.value;
        this.myStore.setScope({ name, age, info: { message } });
    }

}
