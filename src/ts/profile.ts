export class Profile {

    private id:number;
    private creationDate: Date; 
    private lastChangeDate: Date;
    public name:string;
    public names_optional: string[];
    public description: string;
    public storytime_start: number | undefined;
    public storytime_end: number | undefined;
    public userIDs: number[];
     

    constructor(id:number,date: Date,userID:number){
        this.id = id;
        this.creationDate = date;
        this.lastChangeDate = date;
        this.name = "";
        this.names_optional = [];
        this.description = "";
        this.userIDs = [userID];
    }

    public setName(name:string,userID:number){
        this.name = name;
        this.updateLastChange();
    }

    public addOptionalName(name:string,userID:number){
        if(this.names_optional.indexOf(name) <= -1){
            this.names_optional.push(name);
            this.updateLastChange();
        }
    }
    public removeOptionalNameById(id:number,userID:number){
        if((id >= 0) && (id < this.names_optional.length)){
            this.names_optional.splice(id,1);
            this.updateLastChange();
        }
    }
    public removeOptionalNameByName(name:string,userID:number){
        const index = this.names_optional.indexOf(name)
        if(index > -1){
            this.names_optional.splice(index,1);
            this.updateLastChange();
        }
    }

    private updateLastChange(){
        this.lastChangeDate = new Date();
    }
    private updateUserList(userID:number){
        const index = this.userIDs.indexOf(userID);
        if(index < 0){
            this.userIDs.push(userID);
        }
    }
}