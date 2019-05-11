import { Profile } from './model/profile';

export const HansPeterProfile: Profile = {
    id: 0,
    email: "hans.peter@posteo.de",
    firstname: "Hans",
    lastname: "Peter",
    bikes: [
        {
            id: 0,
            modelName: "Damen City Crouser",
            modelDate: new Date(),
            modelManufacturer: "Stevens",
            frameName: "Steel XS",
            wheelName: "28 Zoll Alu",
            breaksName: "Full Metal Jacket",
        },
        {
            id: 1,
            modelName: "Herren Trekking 9000",
            modelDate: new Date(),
            modelManufacturer: "Marks",
            frameName: "Holz",
            wheelName: "28 Zoll Alu",
            breaksName: "Backenbremsen",
        },
        {
            id: 2,
            modelName: "Herren Trekking 9000",
            modelDate: new Date(),
            modelManufacturer: "Marks",
            frameName: "Holz",
            wheelName: "28 Zoll Alu",
            breaksName: "Backenbremsen",
        }
    ]
}