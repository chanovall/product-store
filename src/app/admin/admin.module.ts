import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule

  ]
})
export class AdminModule { }
