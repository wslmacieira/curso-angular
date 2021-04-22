import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  fileNames: any;
  filesUpload: any;
  files: Set<File>;

  constructor(private service: UploadFileService) { }

  ngOnInit(): void {
  }

  onChange(event: any): void {
    this.files = new Set();
    this.filesUpload = [...event.srcElement.files];
    this.fileNames = [...this.filesUpload].map(file => `${file.name}`).join(', ');

    for (const file of this.filesUpload) {
      this.files.add(file);
    }
  }

  onUpload(): void {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, 'http://localhost:3333/upload')
        .subscribe(response => console.log('Upload Concluído'));
    }
  }

}
