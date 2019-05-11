export class Frame {
    id: number;
    name: String;
    constructor(values: Object = {}) {
  
        Object.assign(this, values);
        
        }
}