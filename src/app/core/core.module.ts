import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './components/core/core.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { ReplaceTextComponent } from './components/replace-text/replace-text.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    CoreComponent,
    ReplaceTextComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule
    
  ]
})
export class CoreModule { }
