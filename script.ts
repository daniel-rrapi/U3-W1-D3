abstract class Tasse {
    redditoLordo: number;
    constructor(_redditoLordo: number){
        this.redditoLordo = _redditoLordo
    }

    abstract utileTasse():any
    abstract getTasseIrpef():any
    abstract getTasseInps():any
} 

class Lavoratore extends Tasse {
    constructor(_redditoLordo: number){
        super(_redditoLordo)
        
    }
    utileTasse() {
       return this.redditoLordo * 0.78
    }
    getTasseIrpef(): any {
        return
    }
    getTasseInps(): any {
        return
    }
    getRedditoNetto() {
        return this.utileTasse() - this.getTasseIrpef() - this.getTasseInps()
    }
}

class Proffesionista extends Lavoratore {
    constructor(_redditoLordo: number){
        super(_redditoLordo)
    }
    getTasseIrpef() {
        return this.utileTasse() * 0.95
    }
    getTasseInps() {
        return this.utileTasse() * 0.75
    }
}

let prof1 = new Proffesionista(1000)
console.log(prof1.getTasseIrpef())