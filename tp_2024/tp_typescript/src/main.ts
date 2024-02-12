import { Personne } from "./personne";




let a :number;
a=6;
console.log("a="+a);


let p1 : Personne = new Personne();
console.log("p1=" + JSON.stringify(p1));
p1.nom = "toto";
console.log("p1=" + JSON.stringify(p1));

let p2  = new Personne(3,"titi");
console.log("p2=" + JSON.stringify(p2));