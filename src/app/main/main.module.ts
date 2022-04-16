import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MainModule { }
