import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../constants/constants';
import { fileUploadPayload } from '../model/common.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  FileUpload(files: File[]) {
    const formData = new FormData();
    files.forEach((value) => {
      formData.append('files', value);
    })
    console.log('files uploading');
    return this.httpClient.post(`${ApiEndpoint.fileUpload}`, formData);
  }
}
