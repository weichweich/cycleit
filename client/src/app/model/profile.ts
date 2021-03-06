import { Bicycle } from './bicycle';

export class Profile {
    id: number;
    email: String;
    firstname: String;
    lastname: String;
    bikes: Bicycle[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}