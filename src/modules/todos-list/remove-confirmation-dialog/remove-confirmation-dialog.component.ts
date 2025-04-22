import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/models';

@Component({
  selector: 'app-remove-confirmation-dialog',
  templateUrl: './remove-confirmation-dialog.component.html',
  styleUrls: ['./remove-confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoveConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<RemoveConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
