export class RepairCase {
    id: number;
    bicycleConfig: number;
    defect: string;
    price: number;
    repairShop: number;
    user: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}