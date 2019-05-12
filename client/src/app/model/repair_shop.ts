export class RepairShop {
    id: number;
    name: String;
    location: String;
    rating: String;
    constructor(values: Object = {}) {
  
        Object.assign(this, values);
        
        }
}