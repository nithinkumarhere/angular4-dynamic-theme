import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currentTheme: string;
  constructor(private ts: ThemeService) { 
    this.currentTheme = this.ts.currentTheme;
  }

  ngOnInit() {
  }

  setTheme(themeName) {
    this.ts.setTheme(themeName);
    this.currentTheme = themeName;
  }

}
