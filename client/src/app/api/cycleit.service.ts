import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';

import { Observable } from  'rxjs/Observable';

import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';

import {Bicycle} from '../model/bicycle';
import {BicycleModel} from '../model/bicycle-model';
import {Manufacturer} from '../model/manufactorer';
import {Break} from '../model/breaks';
import {Frame} from '../model/frame';
import {Groupset} from '../model/groupset';
import {Profile} from '../model/profile';
import {Wheel} from '../model/wheels';

@Injectable({
  providedIn: 'root'
})
export class CycleitService {

  baseUrl:string = "http://localhost:8100/api";

  constructor(private  httpClient : HttpClient) { 

  }

  public getBicycleModelsByManufacturerId(manufactorerId) : Observable<BicycleModel[]>{
    return this.httpClient
      .get<BicycleModel[]>(this.baseUrl + '/BicycleModelList' + manufactorerId)
      .map(models => {
        return models.map((model) => new BicycleModel(model));
      })
  } 

  public getManufacturers(): Observable<Manufacturer[]>{
    return  this.httpClient
      .get<Manufacturer[]>(this.baseUrl + '/ManufacturesList')
      .map(manufaturers  => {

        return  manufaturers.map((manufacturer) =>  new  Manufacturer(manufacturer));
        
        })
        
        // .catch((err)=>{
        
        // console.error(err);
        
        // });
        
        
  }
}
