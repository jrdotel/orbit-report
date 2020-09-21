export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;
    
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name,
        this.type = type,
        this.launchDate = launchDate,
        this.orbitType = orbitType,
        this.operational = operational
    }

    shouldShowWarning (): boolean {
        let debris: string = "Space Debris"
        if (this.type.toLowerCase() === debris.toLocaleLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    stripes(arr): boolean {
        return arr.indexOf(this) % 2 === 0 && this.type.toLowerCase() !== 'space debris';
    }
}
