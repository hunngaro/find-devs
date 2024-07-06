import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/base/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ApiService{

  constructor(
    private httpClient: HttpClient
  ) { 
    super(httpClient)
  }
}
