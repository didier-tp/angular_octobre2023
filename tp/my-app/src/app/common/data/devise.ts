export class Devise{
    constructor(public code:string="?",
                public name:string="?",
                public change:number=1){}
}

//exemple code="USD" ou "EUR" , name="dollar" ou "euro" , change = nb_unite_pour_1_euro