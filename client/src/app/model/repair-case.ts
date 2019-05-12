export class RepairCase {
    id: number;
    bicycleConfig: number;
    defect: string;
    price: number;
    repair_shop: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}