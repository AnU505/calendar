import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatRippleModule} from '@angular/material/core'; 
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
@NgModule({

    imports: [CommonModule, MatTableModule, MatIconModule, MatRippleModule],
    exports: [MatTableModule, MatIconModule, MatRippleModule],

})
export class MaterialModule { }