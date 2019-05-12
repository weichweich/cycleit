export class RepairShop {
    id: number;
    name: String;
    location: String;
    ratig: String;
    constructor(values: Object = {}) {
  
        Object.assign(this, values);
        
        }
}