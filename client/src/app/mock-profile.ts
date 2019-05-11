import { Profile } from './profile';

export const HansPeterProfile: Profile = {
    id: 1,
    email: "hans.peter@posteo.de",
    firstname: "Hans",
    lastname: "Peter",
    bikes: [
        {
            id: 1,
            modelName: "Damen City Crouser",
            modelYear: new Date(),
            modelManufacturer: "Stevens",
            frameName: "Steel XS",
            wheelName: "28 Zoll Alu",
            breaksName: "Full Metal Jacket",
        }
    ]
}