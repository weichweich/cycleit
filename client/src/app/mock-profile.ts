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
            brakeName: "Full Metal Jacket",
            chainName: "2Chainz",
            forkName: "Federgabel",
            handlebarName: "Breiter Lencker"
        },
        {
            id: 1,
            modelName: "Herren Trekking 9000",
            modelDate: new Date(),
            modelManufacturer: "Marks",
            frameName: "Holz",
            wheelName: "28 Zoll Alu",
            brakeName: "Backenbremsen",
            chainName: "2Chainz",
            forkName: "Federgabel",
            handlebarName: "Breiter Lencker"
        },
        {
            id: 2,
            modelName: "Herren Trekking 9000",
            modelDate: new Date(),
            modelManufacturer: "Marks",
            frameName: "Holz",
            wheelName: "28 Zoll Alu",
            brakeName: "Backenbremsen",
            chainName: "2Chainz",
            forkName: "Federgabel",
            handlebarName: "Breiter Lencker"
        }
    ]
}