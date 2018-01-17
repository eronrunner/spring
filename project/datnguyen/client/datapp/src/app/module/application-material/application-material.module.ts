import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatDatepickerModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatCardModule,MatDatepickerModule, MatFormFieldModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule,MatListModule,MatSnackBarModule,

  ],
  exports: [ MatButtonModule, MatCardModule, MatFormFieldModule, MatDatepickerModule,MatSnackBarModule,
    MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule
  ],
  declarations: []
})
export class ApplicationMaterialModule { }
