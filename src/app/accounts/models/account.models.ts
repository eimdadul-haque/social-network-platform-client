import { IApplicationUser } from "./account.interface";


export class ApplicationUser implements IApplicationUser {
    constructor(){
        this.name = '';
        this.token = '';
    }
    token: string;
    name: string;
}