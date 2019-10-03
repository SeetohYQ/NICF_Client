import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULE = [
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatFormFieldModule, MatInputModule, 
  MatDatepickerModule, MatMomentDateModule, 
  MatCheckboxModule, MatRadioModule, MatMenuModule,
  FlexLayoutModule 
]

@NgModule({
  imports: MODULE,
  exports: MODULE
})
export class MaterialModule {}
