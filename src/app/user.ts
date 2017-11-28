export class User {
    public name:string; 
    public age:number; 
    public hasDrivingLicense:boolean;
    public city:string;
    constructor(name:string , age:number , hasDrivingLicense:boolean,city:string){
        this.name = name; 
        this.age = age; 
        this.hasDrivingLicense = hasDrivingLicense; 
        this.city = city;
    }
}
