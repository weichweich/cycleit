import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';

import { Observable } from  'rxjs/Observable';

import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';


class  Manufacturers {

  name: string;
    
  constructor(values: Object = {}) {
  
  Object.assign(this, values);
  
  }
  
  }

@Injectable({
  providedIn: 'root'
})
export class CycleitService {

  baseUrl:string = "http://localhost:8000";

  constructor(private  httpClient : HttpClient) { 

  }

  public getManufacturers(): Observable<Manufacturers[]>{
    return  this.httpClient
      .get(this.baseUrl + '/ManufacturesList')
      .map(manufaturers  => {

        return  manufaturers.map((manufacturer) =>  new  Manufacturers(manufacturer));
        
        })
        
        .catch((err)=>{
        
        console.error(err);
        
        });
        
        
  }
}
