import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import {
  mergeAll,
  mergeMap,
  combineLatest
} from 'rxjs/operators';

import 'rxjs/add/operator/map';

import { Bicycle } from '../model/bicycle';
import { BicycleModel } from '../model/bicycle-model';
import { Manufacturer } from '../model/manufactorer';
import { Break } from '../model/breaks';
import { Frame } from '../model/frame';
import { Groupset } from '../model/groupset';
import { Profile } from '../model/profile';
import { Wheel } from '../model/wheels';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CycleitService {

  baseUrl: string = "http://localhost:8100/api";

  constructor(private httpClient: HttpClient) {

  }

  public getBicycleModelsByManufacturerId(manufactorerId): Observable<BicycleModel[]> {
    return this.httpClient
      .get<BicycleModel[]>(this.baseUrl + '/BicycleModelList' + manufactorerId)
      .map(models => {
        return models.map((model) => new BicycleModel(model));
      })
  }

  public getManufacturers(): Observable<Manufacturer[]> {
    return this.httpClient
      .get<Manufacturer[]>(this.baseUrl + '/ManufacturesList')
      .map(manufaturers => {

        return manufaturers.map((manufacturer) => new Manufacturer(manufacturer));

      })

    // .catch((err)=>{

    // console.error(err);

    // });
  }
  public getWheel(id): Observable<Wheel> {
    return this.httpClient
      .get<Wheel>(this.baseUrl + '/WheelDetail/' + id)
      .map(wheel => new Wheel(wheel));
  }

  public getModel(id): Observable<BicycleModel> {
    return this.httpClient
      .get<BicycleModel>(this.baseUrl + '/BicycleModelDetail/' + id)
      .map(bicycleModel => new BicycleModel(bicycleModel));
  }

  public getBrake(id): Observable<Break> {
    return this.httpClient
      .get<Break>(this.baseUrl + '/BreaksDetail/' + id)
      .map(brake => new Break(brake));
  }

  public getFrame(id): Observable<Frame> {
    return this.httpClient
      .get<Frame>(this.baseUrl + '/FrameDetail/' + id)
      .map(frame => new Frame(frame))
  }
  public getGroupset(id): Observable<Groupset> {
    return this.httpClient
      .get<Groupset>(this.baseUrl + '/GroupsetDetail/' + id)
      .map(groupset => new Groupset(groupset))
  }

  public getManufacturer(id): Observable<Manufacturer> {
    return this.httpClient
      .get<Manufacturer>(this.baseUrl + '/ManufacturerDetail/' + id)
      .map(manufacturer => new Manufacturer(manufacturer))
  }
  public getBicycleByUserId(user_id): Observable<Bicycle[]> {
    let bikes = this.httpClient.get<any[]>(this.baseUrl + '/BicycleConfigurationList?user=' + user_id);
    let wheels = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getWheel(bike["wheel"])))));
    let frames = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getFrame(bike["frame"])))));
    let brakes = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getBrake(bike["breaks"])))));
    let bicycle_models = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getModel(bike["model"])))));

    return forkJoin(bikes, wheels, frames, brakes, bicycle_models).map(results => {
      return results[0].map((result, i) => {
        return new Bicycle({
          "wheelName": results[1][i].name,
          "id": results[0]["id"],
          "modelName": results[4][i].name,
          "modelYear": "test",
          "modelManufacturer": "test",
          "frameName": results[2][i].name,
          "breaksName": results[3][i].name,
        });
      });
    });
  }

  public getProfile(id): Observable<Profile> {
    return this.httpClient
      .get<Profile[]>(this.baseUrl + '/UserDetail/' + id)
      .map(user => {
        return new Profile(user);
      })
  }
}
