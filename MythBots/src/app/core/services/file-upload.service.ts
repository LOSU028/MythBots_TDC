import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../constants/constants';
import { fileUploadPayload } from '../model/common.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  FileUpload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    console.log('file uploading');
    return this.httpClient.post(`${ApiEndpoint.fileUpload}`, formData);
  }
}
