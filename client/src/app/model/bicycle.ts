export class Bicycle {
    id: number;
    modelName: String;
    modelDate: Date;
    modelManufacturer: String;
    frameName: String;
    wheelName: String;
    brakeName: String;
    chainName: String;
    forkName: String;
    handlebarName: String;
    constructor(values: Object = {}) {

        Object.assign(this, values);

    }
}