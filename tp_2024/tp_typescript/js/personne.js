"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(numero = 0, _nom = "?") {
        this.numero = numero;
        this._nom = _nom;
    }
    get nom() {
        return this._nom;
    }
    set nom(n) {
        this._nom = n;
    }
}
exports.Personne = Personne;
