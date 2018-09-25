import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SalariedService {

  private resourceUrl = 'http://127.0.0.1:8080/api/salaried';

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(this.resourceUrl +'/');
  }

  getDistinctByKey(key: string) {
    return this.http.get(this.resourceUrl + '/getDistinctByKey/' + key);
  }

}
