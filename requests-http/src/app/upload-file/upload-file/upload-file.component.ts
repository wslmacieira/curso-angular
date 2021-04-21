import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  fileNames: any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.fileNames = [...event.srcElement.files].map(file => `${file.name}`).join(', ');
  }

}
