import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalData } from './modal-data';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TermsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
