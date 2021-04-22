import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';
import { environment } from 'src/environments/environment';
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
  progress = 0;

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

    this.progress = 0;
  }

  onUpload(): void {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + '/upload')
        .pipe(
          uploadProgress(progress => {
            console.log(progress);
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe(response => console.log('Upload Concluido'));
      // .subscribe((event: HttpEvent<object>) => {
      //   // HttpEventType
      //   console.log(event.type);

      //   if (event.type === HttpEventType.Response) {
      //     console.log('Upload Concluido');
      //   } else if (event.type === HttpEventType.UploadProgress) {
      //     const percentDone = Math.round((event.loaded * 100) / (event.total ? event.total : 100));
      //     this.progress = percentDone;
      //     // console.log(this.progress);
      //   }
      // });
    }
  }

}
