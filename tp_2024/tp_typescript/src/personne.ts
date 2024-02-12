/*
export class Personne{
    public numero : number =0;
    private _nom : string ;

    public get nom(){
        return this._nom;
    }

    public set nom(n:string){
        this._nom=n;
    }

    constructor(nomInitial:string="?"){
       this._nom=nomInitial;
    }
}*/

export class Personne{
    
    constructor(public numero : number =0,
                private _nom : string = "?" ){
   }
 
    public get nom(){
        return this._nom;
    }

    public set nom(n:string){
        this._nom=n;
    }

    
}
