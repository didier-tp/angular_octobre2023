"use strict";
/*
export class Personne{
    public prenom : string;
    public nom : string;

    constructor(prenom : string="?",nom:string="?"){
        this.prenom=prenom;
        this.nom=nom;
    }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(prenom = "?", nom = "?") {
        this.prenom = prenom;
        this.nom = nom;
    }
}
exports.Personne = Personne;
