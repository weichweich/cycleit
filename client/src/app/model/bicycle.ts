export class Bicycle {
    id: number;
    modelName: String;
    modelDate: Date;
    modelManufacturer: String;
    frameName: String;
    wheelName: String;
    breaksName: String;
    constructor(values: Object = {}) {
  
        Object.assign(this, values);
        
        }
}