import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeService {
    private subject = new Subject<any>();
    public currentTheme = '';

    constructor() { }

    setTheme(name: Object) {
        this.subject.next({ name: name });
    }

    clearTheme() {
        this.subject.next();
    }

    getTheme(): Observable<any> {
        return this.subject.asObservable();
    }
}
