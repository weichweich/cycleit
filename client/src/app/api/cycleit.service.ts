import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs'
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
import { RepairShop } from '../model/repair_shop';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { RepairCase } from '../model/repair-case';

@Injectable({
  providedIn: 'root'
})
export class CycleitService {

  baseUrl: string = "http://localhost:8100/api";

  constructor(private httpClient: HttpClient) {

  }

  public getBicycleModelsByManufacturerId(manufactorerId): Observable<BicycleModel[]> {
    return this.httpClient
      .get<BicycleModel[]>(this.baseUrl + '/BicycleModelList/?manufacturer=' + manufactorerId)
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

  public getRepairShops(): Observable<RepairShop[]> {
    return this.httpClient
      .get<RepairShop[]>(this.baseUrl + '/RepairShopList/')
      .map(repairShops => repairShops.map(repairShop => new RepairShop(repairShop)));
  }

  public getRepairShop(id): Observable<RepairShop> {
    return this.httpClient
      .get<RepairShop>(this.baseUrl + '/RepairShopDetail/' + id)
      .map(repairShop => new RepairShop(repairShop));
  }

  public getModel(id): Observable<BicycleModel> {
    return this.httpClient
      .get<BicycleModel>(this.baseUrl + '/BicycleModelDetail/' + id)
      .map(bicycleModel => new BicycleModel(bicycleModel));
  }

  public getModels(): Observable<BicycleModel[]> {
    return this.httpClient.get<BicycleModel[]>(this.baseUrl + '/BicycleModelList')
      .map(bicycleModels => bicycleModels.map(
        bicycleModel => new BicycleModel(bicycleModel))
      );
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
  public getBicycleByUserId(user): Observable<Bicycle[]> {
    let bikes = this.httpClient.get<any[]>(this.baseUrl + '/BicycleConfigurationList?user=' + user);
    let wheels = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getWheel(bike["wheel"])))));
    let frames = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getFrame(bike["frame"])))));
    let brakes = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getBrake(bike["breaks"])))));
    let bicycle_models = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getModel(bike["model"])))));
    let chain_name = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getModel(bike["chain_name"])))));
    let handlebar_name = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getModel(bike["handlebar_name"])))));
    let fork_name = bikes.pipe(mergeMap(bks => forkJoin(bks.map(bike => this.getModel(bike["fork_name"])))));

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

  public getBicycleById(id): Observable<Bicycle> {
    let bike = this.httpClient.get<any[]>(this.baseUrl + '/BicycleConfigurationDetail/' + id);
    let wheels = bike.pipe(mergeMap(bike => this.getWheel(bike["wheel"])));
    let frames = bike.pipe(mergeMap(bike => this.getFrame(bike["frame"])));
    let brakes = bike.pipe(mergeMap(bike => this.getBrake(bike["breaks"])));
    let bicycle_models = bike.pipe(mergeMap(bike => this.getModel(bike["model"])));
    let chain_name = bike.pipe(mergeMap(bike => this.getModel(bike["chain_name"])));
    let handlebar_name = bike.pipe(mergeMap(bike => this.getModel(bike["handlebar_name"])));
    let fork_name = bike.pipe(mergeMap(bike => this.getModel(bike["fork_name"])));

    return forkJoin(bike, wheels, frames, brakes, bicycle_models, chain_name, handlebar_name, fork_name).map(results => {
      return new Bicycle({
        "wheelName": results[1].name,
        "id": results[0]["id"],
        "modelName": results[4].name,
        "modelYear": "test",
        "modelManufacturer": "test",
        "frameName": results[2].name,
        "breaksName": results[3].name,
        "chainName": results[5].name,
        "forkName": results[7].name,
        "handlebarName": results[6].name,
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

  public createRepairCase(repair_case: RepairCase) {
    return this.httpClient.post(this.baseUrl + '/RepairCaseList/', {
      "bicycleConfig": repair_case.bicycleConfig,
      "defect": repair_case.defect,
      "price": repair_case.price,
      "repair_shop": repair_case.repairShop,
      "user": repair_case.user,
    })
  }

  public getRepairCases(user: number): Observable<RepairCase[]> {
    let cases = this.httpClient.get<any[]>(this.baseUrl + '/RepairCaseList/?user=' + user);
    let shops = cases.pipe(mergeMap(cs => forkJoin(cs.map(cas => {
      if (cas["repair_shop"] == null) {
        return of({ "name": "NA" })
      }
      return this.getRepairShop(cas["repair_shop"])
    }))));

    return forkJoin(cases, shops).map(results => {
      return results[0].map((result, i) => {
        let rc = new RepairCase({
          "id": results[0][i].id,
          "bicycleConfig": results[0][i].bicycleConfig,
          "defect": results[0][i].defect,
          "price": results[0][i].price,
          "repairShop": results[1][i].name,
        });
        console.log(rc);
        return rc;
      });
    });
  }
}
