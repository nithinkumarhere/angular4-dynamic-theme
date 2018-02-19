import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharedModule } from './shared/shared.module';
import { ThemeService } from './shared/theme/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    readonly defaultTheme = 'kaplan';
    subscription: Subscription;

    constructor(private renderer: Renderer2, private ts: ThemeService) {
        this.ts.currentTheme = this.getLastSelectedTheme();
        this.renderer.addClass(document.body, this.ts.currentTheme);
        this.subscription = this.ts.getTheme().subscribe(data => {
            this.switchTheme(data.name);
        });
    }

    switchTheme(value: string) {
        this.renderer.removeClass(document.body, this.ts.currentTheme);
        this.ts.currentTheme = value;
        localStorage.setItem('appTheme', value);
        this.renderer.addClass(document.body, value);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getLastSelectedTheme() {
        return (localStorage.getItem('appTheme') === null)? this.defaultTheme : localStorage.getItem('appTheme');
    }
}
