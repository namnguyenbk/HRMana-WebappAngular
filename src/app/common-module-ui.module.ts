import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentLoadingModule } from '@covalent/core/loading';

import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';

import {

} from '@angular/material';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatListModule,
    MatSelectModule, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule,MatRadioModule,
    MatGridListModule

} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatListModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatGridListModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        CovalentHttpModule.forRoot(),
        CovalentDynamicFormsModule,
        CovalentSearchModule,
        CovalentDialogsModule,
        CovalentLoadingModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        DragDropModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatListModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatGridListModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        CovalentDynamicFormsModule,
        RouterModule,
        CovalentDialogsModule,
        CovalentSearchModule,
        CovalentLoadingModule,
    ],
    providers:[
        TdDialogService,
        TdLoadingService
    ]
})
export class CommonModuleUi { }