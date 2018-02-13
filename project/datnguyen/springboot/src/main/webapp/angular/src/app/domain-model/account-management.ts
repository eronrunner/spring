export class AccountModel {
    accountId : string;
    password : string;
    registeredEmail: string;
    activated : boolean = false;
    accountType : number = 0;
    
    constructor(){}
}