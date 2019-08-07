export class UserList{
    public firstName:string;
    public lastName:string;
    public emailId:string;
    public phoneNo:number;
    public dob:string;

    constructor(firstName:string,lastName:string,emailId:string,phoneNo:number,dob:string ){
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailId=emailId;
        this.phoneNo=phoneNo;
        this.dob=dob;
    }
}