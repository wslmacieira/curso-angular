import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string): Observable<HttpEvent<object>> {

    const formData = new FormData();
    files.forEach(file => {
      console.log(file);
      formData.append('file', file, file.name);
    });

    const request = new HttpRequest('POST', url, formData);
    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

}
