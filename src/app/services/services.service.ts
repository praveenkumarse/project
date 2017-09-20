import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServicesService {

  constructor(public http: HttpClient) { }

  public setHeader() {
    const headers = new HttpHeaders()
      .set("Authorization", "custom header value");
    return headers;
  }
  public getRequest(url):Observable<any> {
    const headers = new HttpHeaders()
      .set("Authorization", "Bearer IKbxdw6BMe2LGpIcvX0quLBgSwWtZU");
    return this.http.get(url,{headers});
  }
  public postRequest(url, data) {
    this.http.post(url, data);
  }
  public putRequest(url, data) {
    return this.http.put(url, data);
  }

}
