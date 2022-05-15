import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AdminModule { }
