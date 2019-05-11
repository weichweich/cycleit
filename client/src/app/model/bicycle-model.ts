import { Manufacturer } from "./manufactorer";

export class BicycleModel{
    name: string;
    year: Date;
    manufacturer: Manufacturer;
    constructor(values: Object = {}) {
  
        Object.assign(this, values);
        
        }
}