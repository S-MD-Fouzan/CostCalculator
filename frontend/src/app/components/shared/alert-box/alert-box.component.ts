import { Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertBoxComponent>) { }

  ngOnInit(): void {
  }
  
  close():void{
    this.dialogRef.close(false);
  }
  proceed():void{
    this.dialogRef.close(true);
  }
}
